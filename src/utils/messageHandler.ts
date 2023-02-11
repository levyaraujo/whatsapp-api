import axios from "axios";
import { token, url } from "../config";

export class Bot {
  profileName: string;
  phoneNumber: string;
  constructor(profileName: string, phoneNumber: string) {
    this.profileName = profileName;
    this.phoneNumber = phoneNumber;
  }

  private async sendMessage(message: string) {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };
    const payload: object = {
      "messaging_product": "whatsapp",
      "to": "5594981362600",
      "type": "text",
      "text": { "body": `${message}` }
    };

    const response = await axios.post(url, payload, config);
    return response;
  }

  private async sendMedia(message: string) {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };
    const payload: object = {
      "messaging_product": "whatsapp",
      "to": "5594981362600",
      "type": "image",
      "image": { "link": `${message}` }
    };

    const response = await axios.post(url, payload, config);
    return response;
  }

  async onboard() {
    const images: string[] = [
      "https://i.imgur.com/S8pzlOP.png",
      "https://i.imgur.com/LSIO6mu.png",
      "https://i.imgur.com/gz8aBWQ.png",
      "https://i.imgur.com/omvFgyO.png",
      "https://i.imgur.com/FstohBc.png",
      "https://i.imgur.com/uBATpQM.png",];

    for (const image of images) {
      this.sendMedia(image);
    }
    this.sendMessage(`Olá, *${this.profileName}!* Somos o *Açaí Pebinha*! Vamos montar o seu pedido? 📝`);
  }
}

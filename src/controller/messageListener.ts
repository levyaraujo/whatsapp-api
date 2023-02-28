import { Request, Response } from "express";
import { Bot } from "../utils/messageHandler";

export async function messageListener(request: Request, response: Response) {
  const data = request.body;
  console.log(data);
  const bot = new Bot("Levy", "5594981362600");
  await bot.onboard();
  return response.json({ "OK": "OK" });
}

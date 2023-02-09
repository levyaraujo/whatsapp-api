import { Request, Response } from "express";
import * as dotenv from "dotenv";

dotenv.config();

export async function checkToken(request: Request, response: Response) {
  const token = request.query["hub.verify_token"];
  const challenge = request.query["hub.challenge"];

  if (token === process.env.TOKEN) {
    return response.send(challenge).status(200);
  }
}

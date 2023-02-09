import { Router } from "express";
import { checkToken } from "./controller/tokenValidation";

export const router = Router();

router.get("/webhook", checkToken);

import { Router } from "express";
import { checkToken } from "./controller/tokenValidation";
import { messageListener } from "./controller/messageListener";

export const router = Router();

router.get("/webhook", checkToken);
router.post("/webhook", messageListener);

import { Router } from "express";
import { config } from "dotenv";

import { AuthenticateUser, RegisterUser } from "./controllers/userController";

const router = Router();

config();

export default router
  .post("/register", RegisterUser)
  .post("/auth", AuthenticateUser);

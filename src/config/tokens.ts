import { config } from "dotenv";
export class Token {
  async discord() {
    config();
    return process.env.TOKEN_DISCORD ? process.env.TOKEN_DISCORD : "";
  }
}

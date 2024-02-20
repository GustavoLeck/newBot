import { config } from "dotenv";
export class token {
  async discord() {
    config();
    return process.env.TOKEN_DISCORD ? process.env.TOKEN_DISCORD : "";
  }
}

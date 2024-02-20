import { Client, GatewayIntentBits } from "discord.js";
import { token } from "../config/tokens";
export class Ping {
  async execute() {
    const client = new Client({ intents: [GatewayIntentBits.Guilds] });
    client.on("interactionCreate", async (interaction) => {
      if (!interaction.isChatInputCommand()) {
        return;
      }
      if (interaction.commandName === "ping") {
        await interaction.reply(
          `Pong!\n\nA requisição levou ${client.ws.ping}ms.`
        );
      }
    });

    client.login(await new token().discord());
    return;
  }
}

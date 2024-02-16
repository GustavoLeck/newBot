import { Client, GatewayIntentBits } from "discord.js";

export class Ping {
  async execute() {
    const client = new Client({ intents: [GatewayIntentBits.Guilds] });
    client.on("interactionCreate", async (interaction) => {
      if (!interaction.isChatInputCommand()) {
        return;
      }
      if (interaction.commandName === "ping") {
        await interaction.reply("Pong!");
      }
    });

    client.login(
      "OTEzMTU0NjI1MjM3MDUzNTUx.GD6uOB.8oLlkWFuhdEqxRiEiCko30kLxsoIBqBqStkvDk"
    );
    return;
  }
}

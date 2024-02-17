import { Client, GatewayIntentBits } from "discord.js";

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

    client.login(
      "OTEzMTU0NjI1MjM3MDUzNTUx.Gd4IcE.21TyI74zCWUg3JVgQb18YB1KW9xtLan2fJt9RM"
    );
    return;
  }
}

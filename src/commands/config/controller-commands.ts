import { Client, GatewayIntentBits } from "discord.js";
import { PlayerConfig } from "../player-config";
import { token } from "../../config/tokens";
import { Ping } from "../ping";
import { Play } from "../play";

export class ControllerCommands {
  async execute() {
    const client = new Client({ intents: [GatewayIntentBits.Guilds] });

    client.on("interactionCreate", async (interaction) => {
      client.login(token.toString());
      await new PlayerConfig().execute(client);

      if (!interaction.isChatInputCommand()) {
        return;
      }
      if (interaction.commandName === "ping") {
        await new Ping().execute(interaction, client);
      }

      if (interaction.commandName === "play") {
        await new Play().execute(interaction);
      }
    });
    return;
  }
}

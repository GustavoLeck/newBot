import { Client, GatewayIntentBits } from "discord.js";
import { PlayerConfig } from "../player-config";
import { Token } from "../../config/tokens";
import { Ping } from "../ping";
import { Play } from "../play";

export class ControllerCommands {
  async execute() {
    const client = new Client({
      intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildPresences,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.DirectMessages,
      ],
    });
    await new PlayerConfig().execute(client);

    client.on("interactionCreate", async (interaction) => {
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
    client.login(await new Token().discord());
    return;
  }
}

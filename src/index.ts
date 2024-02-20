import { REST, Routes } from "discord.js";
import { token } from "./config/tokens";
import { server } from "./server";
import { Ping } from "./commands/ping";

server.listen(5500, async () => {
  console.clear();
  const commands = [
    {
      name: "ping",
      description: "Top",
    },
  ];
  console.log(commands);
  const rest = new REST({ version: "10" }).setToken(
    await new token().discord()
  );

  try {
    await rest.put(Routes.applicationCommands("913154625237053551"), {
      body: commands,
    });

    await new Ping().execute();
    console.log(`--Server ON--`);
  } catch (error) {
    console.error(error);
  }
});

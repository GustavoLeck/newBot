import { REST, Routes } from "discord.js";
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
    "OTEzMTU0NjI1MjM3MDUzNTUx.GD6uOB.8oLlkWFuhdEqxRiEiCko30kLxsoIBqBqStkvDk"
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

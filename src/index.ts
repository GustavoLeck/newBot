import { REST, Routes } from "discord.js";
import { token } from "./config/tokens";
import { server } from "./server";
import { commands } from "./commands/config/command-list";
import { ControllerCommands } from "./commands/config/controller-commands";
// import {  } from "";

server.listen(5500, async () => {
  console.clear();
  try {
    const rest = new REST({ version: "10" }).setToken(
      await new token().discord()
    );
    await rest.put(Routes.applicationCommands("913154625237053551"), {
      body: commands,
    });

    await new ControllerCommands().execute();

    console.log("Comandos preparados: ");
    // console.log(commands);
    console.log(`--Server ON--`);
  } catch (error) {
    console.error(error);
  }
});

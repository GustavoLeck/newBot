import { ApplicationCommandOptionType } from "discord.js";
const commands = [
  {
    name: "ping",
    description: "Retorna tempo de resposta do servidor",
  },
  {
    name: "play",
    description: "Reproduz música desejada",
    options: [
      {
        name: "musica",
        description: "Valor a ser pesquisado",
        type: ApplicationCommandOptionType.String,
        required: true,
      },
    ],
  },
];
export { commands };

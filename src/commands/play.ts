import { useMainPlayer } from "discord-player";

export class Play {
  async execute(interaction: any) {
    console.log("Teste Play");
    try {
      await interaction.deferReply();

      const player = useMainPlayer();
      const channel = interaction.member.voice.channel;
      if (!channel)
        return interaction.reply(
          "Você não está conectado em nenhum canal de voz!"
        );
      // let query = interaction.options.getString("query", true);

      let query = "Stairway to heaven";
      const { track } = await player.play(channel, query, {
        nodeOptions: {
          metadata: interaction,
        },
      });
      return interaction.followUp(`${track.title}\n\n=> Adicionado na fila!`);
    } catch (error) {
      return interaction.followUp(`Ocorreu um erro na operação: ${error}`);
    }
  }
}

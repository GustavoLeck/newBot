import { useMainPlayer } from "discord-player";

export class Play {
  async execute(interaction: any) {
    try {
      await interaction.deferReply();

      const player = useMainPlayer();
      const channel = interaction.member.voice.channel;
      if (!channel)
        return interaction.followUp(
          "Você não está conectado em nenhum canal de voz!"
        );
      let value = interaction.options.getString("musica", true);
      console.log(value);
      const { track } = await player.play(channel, value, {
        nodeOptions: {
          metadata: interaction,
        },
      });
      return interaction.followUp(`${track.title}\n\n=> Adicionado na fila`);
    } catch (error) {
      return interaction.followUp(`Ocorreu um erro na operação: ${error}`);
    }
  }
}

export class Ping {
  async execute(interaction: any, client: any) {
    return await interaction.reply(
      `Pong!\n\nA requisição levou ${client.ws.ping}ms.`
    );
  }
}

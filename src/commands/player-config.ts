import { Player } from "discord-player";

export class PlayerConfig {
  async execute(client: any) {
    const player = new Player(client);
    await player.extractors.loadDefault(
      (ext: any) => ext !== "YouTubeExtractor"
    );
    player.events.on("playerStart", (queue: any, track: any) => {
      queue.metadata.channel.send(`Começou a tocar: \n\n => ${track.title}!`);
    });
    return;
  }
}

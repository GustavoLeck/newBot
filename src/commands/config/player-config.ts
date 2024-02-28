import { Player } from "discord-player";

export class PlayerConfig {
  async execute(client: any) {
    const player = new Player(client);
    await player.extractors.loadDefault(
      (ext) =>
        ext === "YouTubeExtractor" ||
        ext === "SpotifyExtractor" ||
        ext === "AttachmentExtractor"
    );
    player.events.on("playerStart", (queue: any, track: any) => {
      queue.metadata.channel.send(`Começou a tocar: \n\n => ${track.title}`);
    });
    return;
  }
}

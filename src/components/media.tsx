import { medias } from "../constants/medias";
import { MediaItem } from "./inner/media-item";

export function Media() {
  return (
    <ul className="mt-auto flex items-center gap-3">
      {medias.map((media) => (
        <MediaItem key={media.id} media={media} />
      ))}
    </ul>
  );
}

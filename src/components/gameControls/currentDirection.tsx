import { Direction } from "../../types";

export function CurrentDirection({ direction }: { direction: Direction }) {
  const emoji = getDirectEmoji(direction);

  return <span>{emoji.repeat(3)}</span>;
}

function getDirectEmoji(direction: Direction): string {
  switch (direction) {
    case Direction.UP:
      return "👆";
    case Direction.RIGHT:
      return "👉";
    case Direction.DOWN:
      return "👇";
    case Direction.LEFT:
      return "👈";
    default:
      throw new Error(`Unknown direction ${direction}`);
  }
}

import { memo, type CSSProperties } from "react";
import { CellType } from "../../../types";

function getStyle(
  gridRow: number,
  gridColumn: number,
  isSnake: boolean
): CSSProperties {
  return {
    width: 30,
    height: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "2em",
    gridRow,
    gridColumn,
    backgroundColor: isSnake ? "#A81417" : "#329b2a",
    border: `1px solid ${isSnake ? "#A81417;" : "#228B22"}`,
  };
}
type Props = {
  row: number;
  col: number;
  content: string;
};

export const Cell = memo(({ row, col, content }: Props) => {
  const isSnake = content === CellType.SNAKE || content === CellType.SNAKE_HEAD;
  const style = getStyle(row, col, isSnake);
  return <div style={style}>{content === CellType.SNAKE ? "" : content}</div>;
});

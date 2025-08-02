import type { ReactElement } from "react";
import classes from './alternativeGrid.module.css'
import { Cell } from "./cell";
import { getGridSize } from "../getGridSize";

export function mapCells(grid: string[][]): ReactElement[] {
  const [rowsCount, columsCount] = getGridSize(grid);
  const rows = new Array<ReactElement>(rowsCount);

  for (let r = 0; r < rowsCount; r++) {
    const cells = new Array<ReactElement>(columsCount);
    for (let c = 0; c < columsCount; c++) {
      cells[c] = <Cell key={`[${r}, ${c}]`} content={grid[r][c]} />;
    }
    rows[r] = <tr key={`ro_${r}`}>{cells}</tr>;
  }
  return rows;
}

interface GridProps {
  grid: string[][];
}

export function AlternativeGrid({ grid }: GridProps) {
  return (
    <div className={classes.gridContainer}>
      <table>
        <tbody>{mapCells(grid)}</tbody>
      </table>
    </div>
  );
}

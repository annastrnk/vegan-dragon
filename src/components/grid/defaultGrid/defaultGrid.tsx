import type { ReactElement } from "react";
import classes from './defaultGrid.module.css'

import { getGridSize } from "../getGridSize";
import { Cell } from "./cell";

export function mapCells(grid: string[][]): ReactElement[] {
  const [rowsCount, columsCount] = getGridSize(grid);
  const cells:ReactElement[]=[]

  for (let i = 0; i < rowsCount; i++) {
  
    for (let j = 0; j < columsCount; j++) {
      cells.push( <Cell key={`[${i}, ${j}]`} row={i+1} col={j+1} content={grid[i][j]}/>)
    }
  }
  return cells;
}

interface GridProps {
  grid: string[][];
}

export function DefaultGrid({ grid }: GridProps) {
  return (
    <div className={classes.gridContainer}>
        <div className={classes.grid}>{mapCells(grid)}</div>
    </div>
  );
}

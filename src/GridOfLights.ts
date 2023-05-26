const ROWS_NUMBER: number = 1000;
const COLUMNS_NUMBER: number = 1000;

/**
 * [[0, 1, 2, 3],
 * [4, 5, 6, 7],
 * [8, 9, 0, 0]]
 *
 * -> grid[2][1] = 9
 * -> grid[1][2] = 6
 *
 * -> grid[row][column]
 * */
export default class GridOfLights{
    #_gridOfLights: boolean[][] = Array(ROWS_NUMBER).fill(Array(COLUMNS_NUMBER).fill(false));

    get gridOfLights(): boolean[][] {
        return this.#_gridOfLights;
    }

    set gridOfLights(value: boolean[][]) {
        this.#_gridOfLights = value;
    }

    turnOn(fisrtColumnIndex: number, firstRowIndex: number,  lastColumnIndex: number, lastRowIndex: number) {
        for (let i = firstRowIndex; i <= lastRowIndex; i++) {
            for (let j = fisrtColumnIndex; j <= lastColumnIndex; j++) {
                this.gridOfLights[i][j] = true;
            }
        }
    }

    turnOff(fisrtColumnIndex: number, firstRowIndex: number,  lastColumnIndex: number, lastRowIndex: number) {
        for (let i = firstRowIndex; i <= lastRowIndex; i++) {
            for (let j = fisrtColumnIndex; j <= lastColumnIndex; j++) {
                this.gridOfLights[i][j] = false;
            }
        }
    }

    toggle(fisrtColumnIndex: number, firstRowIndex: number,  lastColumnIndex: number, lastRowIndex: number) {
        for (let i = firstRowIndex; i <= lastRowIndex; i++) {
            for (let j = fisrtColumnIndex; j <= lastColumnIndex; j++) {
                this.gridOfLights[i][j] = !this.gridOfLights[i][j];
            }
        }
    }
}
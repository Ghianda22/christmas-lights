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
export default class GridOfLights {
    // #_gridOfLights: boolean[][] = Array(ROWS_NUMBER).fill(Array(COLUMNS_NUMBER).fill(false));
    #_gridOfLights: number[][] = [];
    #_brightness: number = 0;

    constructor() {
        for (let rowIndex = 0; rowIndex < ROWS_NUMBER; rowIndex++) {
            this.#_gridOfLights.push([]);
            for (let columnIndex = 0; columnIndex < COLUMNS_NUMBER; columnIndex++) {
                this.#_gridOfLights[rowIndex].push(0)
            }
        }
    }


    get brightness(): number {
        return this.#_brightness;
    }

    set brightness(value: number) {
        this.#_brightness = value;
    }

    get gridOfLights(): number[][] {
        return this.#_gridOfLights;
    }

    set gridOfLights(value: number[][]) {
        this.#_gridOfLights = value;
    }

    turnOn(firstColumnIndex: number, firstRowIndex: number, lastColumnIndex: number, lastRowIndex: number) {
        for (let rowIndex = firstRowIndex; rowIndex <= lastRowIndex; rowIndex++) {
            for (let columnIndex = firstColumnIndex; columnIndex <= lastColumnIndex; columnIndex++) {
                this.gridOfLights[rowIndex][columnIndex] += 1;
                this.brightness += 1;
            }
        }
    }

    turnOff(firstColumnIndex: number, firstRowIndex: number, lastColumnIndex: number, lastRowIndex: number) {
        for (let rowIndex = firstRowIndex; rowIndex <= lastRowIndex; rowIndex++) {
            for (let columnIndex = firstColumnIndex; columnIndex <= lastColumnIndex; columnIndex++) {
                if(this.gridOfLights[rowIndex][columnIndex] == 0){
                    continue;
                }
                this.gridOfLights[rowIndex][columnIndex] -= 1;
                this.brightness -= 1;
            }
        }
    }

    toggle(firstColumnIndex: number, firstRowIndex: number, lastColumnIndex: number, lastRowIndex: number) {
        for (let rowIndex = firstRowIndex; rowIndex <= lastRowIndex; rowIndex++) {
            // console.log(rowIndex + " status: " + this.gridOfLights[rowIndex]);
            for (let columnIndex = firstColumnIndex; columnIndex <= lastColumnIndex; columnIndex++) {
                this.gridOfLights[rowIndex][columnIndex] += 2;
                this.brightness += 2;
                // console.log("column " + columnIndex + " row: " + rowIndex + this.gridOfLights[rowIndex][columnIndex]);
                // console.log("RIGA DOPO: column:" + columnIndex + " row:" + (rowIndex+1) + this.gridOfLights[rowIndex+1][columnIndex]);
            }
        }
    }

    // printGrid() {
    //     let gridAsString: string = "";
    //     for (let rowIndex = 0; rowIndex < ROWS_NUMBER; rowIndex++) {
    //         for (let columnIndex = 0; columnIndex < COLUMNS_NUMBER; columnIndex++) {
    //             gridAsString = gridAsString.concat(this.gridOfLights[rowIndex][columnIndex] ? "0" : "-");
    //         }
    //         gridAsString = gridAsString.concat("\n");
    //     }
    //
    //     console.log(gridAsString);
    //
    // }

    countLightsOn(): number {
        let numberOfLightsOn: number = 0;
        for (let rowIndex = 0; rowIndex < ROWS_NUMBER; rowIndex++) {
            for (let columnIndex = 0; columnIndex < COLUMNS_NUMBER; columnIndex++) {
                if(this.gridOfLights[rowIndex][columnIndex]){
                    numberOfLightsOn++;
                }
            }
        }
        return numberOfLightsOn;
    }
}
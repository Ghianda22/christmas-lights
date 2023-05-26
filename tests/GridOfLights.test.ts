/** TEST LIST
 *
 * [-] turn on 0,0 through 999,999 would turn on (or leave on) every light.
 * [-] toggle 0,0 through 999,0 would toggle the first line of 1000 lights, turning off the ones that were on, and turning on the ones that were off.
 * [-] turn off 499,499 through 500,500 would turn off (or leave off) the middle four lights
 * */


/* the 1000x1000 lights are represented as a two-dimensional boolean array
* if true the light is on, if false the light is off
*
* 0,0   1,0     2,0  ...   999,0
* 0,1   1,1     2,1  ...   999,1
* 0,2   1,2     2,2  ...   999,2
* ...   ...     ...         ...
* 0,999 1,999   2,999 ...   999,999
* */
import GridOfLights from "../src/GridOfLights";

const ROWS_NUMBER: number = 1000;
const COLUMNS_NUMBER: number = 1000;

interface Coordinates {
    colNum: number
    rowNum: number,
}

test('Turn on (0,0) through (999,999) should turn on every light', () => {
    //given
    const lights: GridOfLights = new GridOfLights();
    const startingLightCoordinates: Coordinates = {colNum: 0, rowNum:0};
    const endingLightCoordinates: Coordinates = {colNum:999, rowNum:999};
    let expectedLightStatus: boolean[][] = Array(ROWS_NUMBER).fill(Array(COLUMNS_NUMBER).fill(true));


    //when
    lights.turnOn(startingLightCoordinates.colNum, startingLightCoordinates.rowNum,
        endingLightCoordinates.colNum,endingLightCoordinates.rowNum);
    const actualLightStatus: boolean[][] = lights.gridOfLights;

    //then
    expect(actualLightStatus).toStrictEqual(expectedLightStatus);
})

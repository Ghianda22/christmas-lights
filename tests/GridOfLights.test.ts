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

describe('Toggle (0,0) through (999,0) should toggle the first line and ignore the rest', () => {
    it.each([
        /*100 values * 10 rows*/
        [[true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,
        true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,
        true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,
        true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,
        true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,
        true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,
        true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,
        true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,
        true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,
        true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,
        ], [false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,
        false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,
        false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,
        false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,
        false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,
        false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,
        false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,
        false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,
        false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,
        false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,
        ]],
        [[false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,
        false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,
        false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,
        false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,
        false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,
        false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,
        false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,
        false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,
        false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,
        false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,
        ],[true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,
        true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,
        true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,
        true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,
        true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,
        true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,
        true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,
        true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,
        true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,
        true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,
        ]]
    ])('first line %s should be %s', (firstRowBeforeToggle: boolean[], firstRowAfterToggle: boolean[]) => {
        //given
        const lights: GridOfLights = new GridOfLights();
        let expectedLightStatus: boolean[][] = Array(ROWS_NUMBER).fill(Array(COLUMNS_NUMBER).fill(false));
        const startingLightCoordinates: Coordinates = {colNum: 0, rowNum:0};
        const endingLightCoordinates: Coordinates = {colNum:999, rowNum:0};
        expectedLightStatus[0] = firstRowAfterToggle;
        lights.gridOfLights[0] = firstRowBeforeToggle;

        //when
        lights.toggle(startingLightCoordinates.colNum, startingLightCoordinates.rowNum, endingLightCoordinates.colNum, endingLightCoordinates.rowNum);
        const actualLightStatus: boolean[][] = lights.gridOfLights;

        //then
        expect(actualLightStatus).toStrictEqual(expectedLightStatus);
    })
})

test('Turn off from (499,499) to (500, 500) should switch off the middle four lights', () => {
    //given
    const startingLightCoordinates: Coordinates = {colNum: 499, rowNum:499};
    const endingLightCoordinates: Coordinates = {colNum:500, rowNum:500};

    let baseArray: boolean[][] = Array(ROWS_NUMBER).fill(Array(COLUMNS_NUMBER).fill(Math.random() < 0.5));
    const lights: GridOfLights = new GridOfLights();
    let expectedLightStatus:boolean[][] = Array(ROWS_NUMBER).fill(Array(COLUMNS_NUMBER).fill(true));

    for (let i = 0; i < ROWS_NUMBER; i++) {
        for (let j = 0; j < COLUMNS_NUMBER; j++) {
            lights.gridOfLights[i][j] = baseArray[i][j];
            expectedLightStatus[i][j] = baseArray[i][j];
        }
    }

    expectedLightStatus[499][499] = expectedLightStatus [499][500] = expectedLightStatus[500][499] = expectedLightStatus[500][500] = false;

    //when
    lights.turnOff(startingLightCoordinates.colNum, startingLightCoordinates.rowNum, endingLightCoordinates.colNum, endingLightCoordinates.rowNum);
    const actualLightStatus: boolean[][] = lights.gridOfLights;

    //then
    expect(actualLightStatus).toStrictEqual(expectedLightStatus);
})
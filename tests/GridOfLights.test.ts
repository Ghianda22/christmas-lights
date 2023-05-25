/** TEST LIST
 *
 * [-] turn on 0,0 through 999,999 would turn on (or leave on) every light.
 * [-] toggle 0,0 through 999,0 would toggle the first line of 1000 lights, turning off the ones that were on, and turning on the ones that were off.
 * [-] turn off 499,499 through 500,500 would turn off (or leave off) the middle four lights
 * */


/* the 1000x1000 lights are represented as a two-dimensional boolean array
* if true the light is on, if false the light is off
* */
import GridOfLights from "../src/GridOfLights";

const HORIZONTAL_GRID_SIZE: number = 1000;
const VERTICAL_GRID_SIZE: number = 1000;

test('Turn on (0,0) through (999,999) should turn on every light', () => {
    //given
    const lights: GridOfLights = new GridOfLights();

    let  expectedLightStatus: boolean[][] = Array(HORIZONTAL_GRID_SIZE).fill(Array(VERTICAL_GRID_SIZE).fill(true));


    //when
    lights.turnOn(0,0, 999, 999);
    const actualLightStatus: boolean[][] = lights.gridOfLights;

    //then
    expect(actualLightStatus).toStrictEqual(expectedLightStatus);
})


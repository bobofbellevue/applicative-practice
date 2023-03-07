// Note to reviewer:
// This solution is very strange.  I'd appreciate feedback on what I'm not understanding here.
// That trailing zero at the end of reduce() is the initial value.  The initial value causes the accumulator to always be a number.
// Otherwise, I was finding - after hours of debugging - that the accumulator was a Planet object on the first iteration and a number on every iteration afterwards.

import { data } from "../data/data";

// SPACE DATA EXERCISE 12
// Return the sum of all moons for all planets
// Return example: 42

export function allPlanetsMoonsCount(data) {
  return data.planets.reduce(function(moonsCount, planetCurrent) {
    return moonsCount + ((typeof planetCurrent.moonsCount !== 'undefined') ? planetCurrent.moonsCount : 0);
  }, 0);
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-12"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function

import { data } from "../data/data";

// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902

export function getGreatestDiscoveryYear(data) {
  let maxCount = 0;
  let maxYear = 0;
  let yearArray = [];
  data.asteroids.map(asteroid => {
    yearArray[asteroid.discoveryYear] = (typeof (yearArray[asteroid.discoveryYear]) == "undefined") ? 1 : yearArray[asteroid.discoveryYear] + 1;
    if (yearArray[asteroid.discoveryYear] > maxCount) {
      maxCount = yearArray[asteroid.discoveryYear];
      maxYear = asteroid.discoveryYear;
    }
  });
  return maxYear;
}
// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function

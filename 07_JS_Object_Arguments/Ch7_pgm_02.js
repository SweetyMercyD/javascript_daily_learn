// A function that adds properties to an object

var planet1 = { name: "Jupiter", radius: 69911 };

var calculateSizes = function (planet) {
    var r = planet.radius;
    planet.area = 4 * 3.142 * r * r;
    planet.volume = 4 * 3.142 * r * r * r / 3;
};

var displaySizes = function (planet) {
    console.log(planet.name);
    console.log("surface area = " + planet.area + " square km");
    console.log("volume = " + planet.volume + " cubic km");
};

calculateSizes(planet1);
displaySizes(planet1);                                                  
                                                  


/* Further Adventures
 *
 * The diameter of a planet is double its radius.
 *
 * 1) Update the calculateSizes function so it also
 *    adds a diameter property to the planet.
 *
 * 2) Update the displaySizes function so it also
 *    displays the diameter on the console.
 *
 */

var planet1 = { name: "Jupiter", radius: 69911 };

var calculateSizes = function (planet) {
    var r = planet.radius;
    planet.diameter = 2 * r; // Calculate diameter
    planet.area = 4 * 3.142 * r * r;
    planet.volume = (4 / 3) * 3.142 * r * r * r;
};

var displaySizes = function (planet) {
    console.log(planet.name);
    console.log("diameter = " + planet.diameter + " km");
    console.log("surface area = " + planet.area.toFixed(2) + " square km"); // Rounded to two decimal places
    console.log("volume = " + planet.volume.toFixed(2) + " cubic km"); // Rounded to two decimal places
};

calculateSizes(planet1);
displaySizes(planet1);
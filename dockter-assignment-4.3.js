/*
============================================
; Title:  Discussion 4.2
; Author: Brittany Dockter 
; Date:   23 June 2019
; Modified by: Brittany Dockter
; Description: Creating a function to output an array.
;===========================================
*/

// Begin Header
var header = require('C:/Users/Brittany/Documents/WEB231/bu-webdev/web-231/week-2/Dockter-header-test');
// End Header

/* Expected Output

-- DISPLAYING ARRAY ITEMS --
  Car
  Truck
  Motorcycle
  Airplane
  Bus

  -- SELECTED VALUE --
  Motorcycle

  -- SELECTED VALUE --
  Bus

  */

  // Begin Program

  var vehicles = ["Car", "Truck", "Motorcycle", "Airplane", "Bus"];

  // Function

  function getValue(arr, val) {
    for (var k = 0; k < arr.length; k++) {
        if (arr[k] === val)
        console.log(arr[k]);
    }
  }

  // Output
  console.log("-- DISPLAYING ARRAY ITEMS--");
    for (x = 0; x < vehicles.length; x++) {
        console.log(vehicles[x]);
    }

// New Line
console.log("")

console.log("--SELECTED VALUE--");
getValue(vehicles, "Motorcycle");

console.log("--SELECTED VALUE--");
getValue(vehicles, "Bus");

// End Program
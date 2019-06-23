/*
============================================
; Title:  Assignment 4.4
; Author: Brittany Dockter 
; Date:   23 June 2019
; Modified by: Brittany Dockter
; Description: 
;===========================================
*/

// Begin Header
var header = require('C:/Users/Brittany/Documents/WEB231/bu-webdev/web-231/week-2/Dockter-header-test');
// End Header

/* Expected Output 

FirstName LastName
  Assignment 4.4
  Today's Date

  -- ORIGINAL ARRAY --
  Alabama
  Nebraska
  Iowa
  California
  Nevada

  -- SORTED ARRAY --
  Alabama
  California
  Iowa
  Nebraska
  Nevada

  -- SELECTED VALUE --
  Iowa

  */

  // Begin Program

  var states = ["California", "Washington", "Colorado", "Texas", "Arizona"];

  // Begin Funtion

  function get_value(arr, val) {
    for (k = 0; k < arr.length; k++) {
        if (arr[k] === val)
        console.log(arr[k]);
    }
  }

  var result = states.sort();

  // Output
  console.log("-- ORIGINAL ARRAY --");
  for (x = 0; x < states.length; x++)
  console.log(states[x]);

  console.log("")

  console.log("-- SORTED ARRAY --");
  for (x = 0; x < result.length; x++)
  console.log(result[x]);

  console.log("")

  console.log("--SELECTED VALUE--");
  get_value(states, "Washington");

  // End Program
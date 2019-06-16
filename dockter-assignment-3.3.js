/*
============================================
; Title:  Exercise 3.3
; Author: Brittany Dockter 
; Date:   16 June 2019
; Modified by: Brittany Dockter
; Description: Pattern matching functions for if else statements
;===========================================
*/

// Begin Header
var header = require('C:/Users/Brittany/Documents/School/WEB231/bu-webdev/web-231/week-2/Dockter-header-test');
// End Header

/*
  Expected output:

  FirstName LastName
  Exercise 3.3
  Today's Date

  // Expected output
  The enter key was pressed
*/

// Declare Variables
var eventKeyCode = 13;

// Begin Switch Block

switch (eventKeyCode) {
    case 13:
        console.log("The enter key was pressed");
        break;
    case 16:
        console.log("The shift key was pressed");
        break;
    case 32:
        console.log("The spacebar key was pressed");
        break;
    case 8: 
        console.log("The backspace / delete key was pressed");
        break;
    default: 
        console.log("Unrecognized key press");
        break;
    }

    // End Program
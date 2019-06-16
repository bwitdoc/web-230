/*
============================================
; Title:  Assignment 3.4
; Author: Brittany Dockter 
; Date:   16 June 2019
; Modified by: Brittany Dockter
; Description: Using loop statements
;===========================================
*/

/* Expected Output
FirstName LastName
Assignment 3.4
Today's Date

-- DO THE NUMBERS MATCH GAME --
6 does not match 4!
6 does not match 7!
6 does not match 4!
6 does not match 8!
6 does not match 9!
6 does not match 7!
6 does match 6!
6 does not match 3!
*/

// Begin Header
var header = require('C:/Users/Brittany/Documents/School/WEB231/bu-webdev/web-231/week-2/Dockter-header-test');
// End Header

// Declare Variables
var a = 3;

// Begin Match, logMismatch and logMatch Functions
function match(arg1, arg2) {
    if (arg1 === arg2) 
        return true
     else 
        return false
}

function logMismatch(arg1, arg2) {
    console.log(arg1 + " does not match " + arg2 + "!");
}

function logMatch(arg1, arg2) {
    console.log(arg1 + " does match " + arg2 + "!");
}

// For Loop
for (let x = 0; x < 10; x++) {
    var randomNumber = Math.floor((Math.random() * 10) + 1);
    if (match(a, randomNumber)) {
        logMatch(a, randomNumber);
    } else {
        logMismatch(a, randomNumber);
    }
}
// End Program
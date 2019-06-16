/*
============================================
; Title:  Exercise 3.2
; Author: Brittany Dockter 
; Date:   16 June 2019
; Modified by: Brittany Dockter
; Description: Pattern matching functions for if else statements
;===========================================
*/

// Begin Header
var header = require('C:/Users/Brittany/Documents/School/WEB231/bu-webdev/web-231/week-2/Dockter-header-test');
// End Header

/* Expected output
; false
; true
; Truck and Car do not match!
; Bike and Bike do match!
; Boat and Motorcycle do not match!
*/

// Declared Variables
var testVar1 = "Truck";
var testVar2 = "Car";
var testVar3 = "Bike";
var testVar4 = "Bike";
var testVar5 = "Boat";
var testVar6 = "Motorcycle";


// Begin Functions
function match(arg1, arg2) {
    if (arg1 === arg2) 
        return true
     else 
        return false
}

function logMismatch(arg1, arg2) {
    console.log(arg1 + " and " + arg2 + " do not match!");
}

function logMatch(arg1, arg2) {
    console.log(arg1 + " and " + arg2 + " do match!");
}

// Output from the match() function
console.log(match("A", "B"));
console.log(match(2, 2));

 // Conditional "if...else" statements. Include checks for all six test variables
 if (match(testVar1, testVar2)) {
     logMatch(testVar1, testVar2);
 } else {
     logMismatch(testVar1, testVar2);
 } 
 if (match(testVar3, testVar4)) {
    logMatch(testVar3, testVar4);
 } else {
     logMismatch(testVar3, testVar4);
 }
 if (match(testVar5, testVar6)) {
     logMatch(testVar5, testVar6);
 } else {
     logMismatch(testVar5, testVar6);
 }
    

/*
============================================
; Title:  Assignment 2.4
; Author: Brittany Dockter 
; Date:   10 June 2019
; Modified by: Brittany Dockter
; Description: Displays a function with concatonated strings
;===========================================
*/

// Begin Header
var header = require('./Dockter-header-test');
// End Header

/* Expected output:
; FirstName LastName
; Assignment 2.4
; Today's Date
; Hello my name is <concatenated full name>!
; Today's date is <formatted date> and the current temperature is <formatted number with 1 fixed decimal position>
; I am <parsed int> years old and my savings account goal is <parsed float value> dollars.
*/

// Begin Function

var fullName = "Brittany Dockter";
var dateWriter = "June 10, 2019";
var formatNumber = "97.5";
var convertToInt = "22";
var convertToFloat = "$5,000";

function fullName(Brittany, Dockter) {
    return fullName;
}

function dateWriter() {
    return dateWriter;
}

function formatNumber() {
    return formatNumber;
}

function convertToInt() {
    return convertToInt;
}

function convertToFloat() {
    return converToFloat;
}

// output 
console.log("Hello my name is " + fullName + '\n' + "Today's date is " + dateWriter + " and the current temperature is " + formatNumber + '\n' + "I am " + convertToInt + " years old and my savings account goal is " + convertToFloat);
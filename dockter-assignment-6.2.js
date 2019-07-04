/*
============================================
; Title:  Assignment 6.2
; Author: Brittany Dockter 
; Date:   03 July 2019
; Modified by: Brittany Dockter
; Description: Exception handling 
;===========================================
*/

// Begin Header
var header = require('C:/Users/Brittany/Documents/WEB231/bu-webdev/web-231/week-2/Dockter-header-test');
// End Header

// Start Program

try {
    var x = 3;
    var y = 18;
    var sum = y/x;

if(sum == Infinity) 
throw "Try a different number!";
    console.log(sum);
} catch (err) {
    console.log("Catch clause: " + err);
} finally {
    console.log("Finally clause: End of program...")
}

// End Program
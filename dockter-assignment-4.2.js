/*
============================================
; Title:  Discussion 4.1
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

Brittany Dockter
Assignment 4.2
June 23, 2019

*/

// Begin Program

var fruit = ["Peach", "Lemon", "Watermelon", "Blueberry", "Guava"];

// Function

function getFruit(arr) {
   for (var k =  0; k < arr.length; k++) {
        console.log(arr[k]);
    }
}

// Output from the getFruit function
getFruit(fruit);

// End Program
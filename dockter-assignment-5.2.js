/*
============================================
; Title:  Assignment 5.2
; Author: Brittany Dockter 
; Date:   25 June 2019
; Modified by: Brittany Dockter
; Description: Function array with favorite foods.
;===========================================
*/

// Begin Header
var header = require('C:/Users/Brittany/Documents/WEB231/bu-webdev/web-231/week-2/Dockter-header-test');
// End Header

/* -- Expected Output --

Chicken
Pasta
Bagels
Cereal
Granola

*/

// Begin Function
var foods = ["Chicken", "Pasta", "Bagels", "Cereal", "Granola"];

foods.forEach(function(food) {
    console.log(food);
});

// End Program
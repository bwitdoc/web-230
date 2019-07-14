/*
============================================
; Title:  Exercise 7.2
; Author: Brittany Dockter 
; Date:   14 July 2019
; Modified by: Brittany Dockter
; Description: Use of constructor functions 
;===========================================
*/

// Begin Header
var header = require('C:/Users/Brittany/Documents/WEB231/bu-webdev/web-231/week-2/Dockter-header-test');
// End Header

/* Expected Output


*/

// Start Program

function Employee(id, firstName, lastName, title) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.title = title;

    console.log(Employee);

var employees = [
    new Employee("Alex Smith", "Underwriter"),
    new Employee("Taylor King", "Estimator"),
    new Employee("Lance Wells", "Business Analyst"),
    new Employee("Regina Wilder", "Cheif Executive Officer"),
    new Employee("Brandy Newman", "Receptionist")
]};
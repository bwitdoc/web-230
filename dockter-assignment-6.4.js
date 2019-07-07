/*
============================================
; Title:  Assignment 6.4
; Author: Brittany Dockter 
; Date:   7 July 2019
; Modified by: Brittany Dockter
; Description: Nested object literals
;===========================================
*/

// Begin Header
var header = require('C:/Users/Brittany/Documents/School/WEB231/bu-webdev/web-231/week-2/Dockter-header-test');
// End Header

/* Expected Output

  FirstName LastName
  Assignment 6.4
  Today's Date

  Ticket 105 was created on <today' date> and assigned to employee Bob Jones (Programmer I).
*/

// Start Program

var ticket = {
    id: "313",
    name: "Item Defect",
    dateCreated: "July 7, 2019",
    priority: "High",
    personId: "321654",
};

var person = {
    id: "321654",
    firstName: "Miriam",
    lastName: "Shepherd",
    jobTitle: "(Customer Service Representative)",
};

// Output

console.log("");
console.log("Ticket " + ticket.id + " was created on " + ticket.dateCreated + " and assigned to employee " + person.firstName + " " + person.lastName + " " + person.jobTitle + ".");

// End Program
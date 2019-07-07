/*
============================================
; Title:  Assignment 6.3
; Author: Brittany Dockter 
; Date:   7 July 2019
; Modified by: Brittany Dockter
; Description: Object literals with getter/setter method
;===========================================
*/

// Begin Header
var header = require('C:/Users/Brittany/Documents/School/WEB231/bu-webdev/web-231/week-2/Dockter-header-test');
// End Header

/* Expected Output

Brittany Dockter
Assignment 6.3
Date: 7/7/2019

{id: 403, name: IT Support, requester: Adam Jones}
*/

// Start Program

var ticket = {
    id: "403,",
    name: "IT Support,",
    requester: "Adam Jones",

    get info() {
        return this.id;
    },

    set info(val) {
        this.id = val;
    }
};

// Output

console.log("");
console.log("{id: " + ticket.id + " name: " + ticket.name + " requester: " + ticket.requester + "}");

// End Program
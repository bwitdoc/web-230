/*
============================================
; Title:  Discussion 6.1
; Author: Brittany Dockter 
; Date:   3 July 2019
; Modified by: Brittany Dockter
; Description: Create a program using objects
;===========================================
*/

// Begin Header
var header = require('C:/Users/Brittany/Documents/WEB231/bu-webdev/web-231/week-2/Dockter-header-test');
// End Header

// Start Program

var business =  {
    businessName: "Grocery Outlet"
    businessAddress: "1000 Market St"
    storeNumber: "114"
    businessProfits: "13,000,000"
    businessOwner: "John and Lucy Tyler"
}

forEach(function(business) {
    console.log(
        "-- BUSINESS INFORMATION BELOW --" + '\n' + "Business Name: " + business.businessName + '\n' + "Address: " + business.businessAddress + '\n' + "Store Number: " + business.storeNumber + '\n' + "Annual Profits: " + business.businessProfits + '\n' + "Owners: " + business.businessOwner 
        )

    // End Program
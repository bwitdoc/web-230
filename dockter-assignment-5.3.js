/*
============================================
; Title:  Assignment 5.3
; Author: Brittany Dockter 
; Date:   25 June 2019
; Modified by: Brittany Dockter
; Description: Function array of (5) composer objects.
;===========================================
*/

// Begin Header
var header = require('C:/Users/Brittany/Documents/WEB231/bu-webdev/web-231/week-2/Dockter-header-test');
// End Header

/* Expected Output 

Last Name: Swift, Genre: Pop, Rating: 9
Last Name: Cobain, Genre: Alternative, Rating: 10
Last Name: Plant, Genre: Hard Rock, Rating: 7
Last Name: McCormick, Genre: Rap, Rating: 8
Last Name: Beam, Genre: Indie, Rating: 6

*/

// Begin Program

var composers = [
{
    firstName: "Taylor",
    lastName: "Swift",
    Genre: "Pop",
    Rating: "9",
},
{
    firstName: "Kurt",
    lastName: "Cobain",
    Genre: "Alternative",
    Rating: "10",
},
{
    firstName: "Robert",
    lastName: "Plant",
    Genre: "Hard Rock",
    Rating: "7",
},
{
    firstName: "Malcolm",
    lastName: "McCormick",
    Genre: "Rap",
    Rating: "9",
},
{
    firstName: "Samuel",
    lastName: "Beam",
    Genre: "Indie",
    Rating: "6",
}
];

// Output
console.log("-- COMPOSERS --");
composers.forEach(function(composers) {
    console.log(
        "Last Name: " + composers.lastName + ", Genre: " + composers.Genre + ", Rating: " + composers.Rating
    )
})

// End Program
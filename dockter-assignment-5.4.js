/*
============================================
; Title:  Assignment 5.4
; Author: Brittany Dockter 
; Date:   25 June 2019
; Modified by: Brittany Dockter
; Description: Function array of composers using maps.
;===========================================
*/

// Begin Header
var header = require('C:/Users/Brittany/Documents/WEB231/bu-webdev/web-231/week-2/Dockter-header-test');
// End Header

/* Expected Output

*/

// Begin Program

var composers = [
    {
        firstName: "Taylor",
        Composer: "Swift",
        Genre: "Pop",
        Rating: "9",
    },
    {
        firstName: "Kurt",
        Composer: "Cobain",
        Genre: "Alternative",
        Rating: "10",
    },
    {
        firstName: "Robert",
        Composer: "Plant",
        Genre: "Hard Rock",
        Rating: "7",
    },
    {
        firstName: "Malcolm",
        Composer: "McCormick",
        Genre: "Rap",
        Rating: "9",
    },
    {
        firstName: "Samuel",
        Composer: "Beam",
        Genre: "Indie",
        Rating: "6",
    }
    ];
    
    // Output
    console.log("");
    console.log("-- COMPOSER BY RATING --")
    composers.forEach(function(composers) {
        console.log(
            "Rating: " + composers.Rating + '\n' + "Composer: " + composers.Composer + '\n'
            )
    })

    console.log("-- COMPOSER BY GENRE --");
    composers.forEach(function(composers) {
        console.log(
            "Genre: " + composers.Genre + '\n' + "Composer: " + composers.Composer + '\n'
        )
    })

    // End Program
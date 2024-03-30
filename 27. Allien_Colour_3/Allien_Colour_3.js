"use strict";
// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
//  Write three versions of this program, making sure each message is printed for the appropriate color alien.
let alienColour = "green";
//  If the alien is green, print a message that the player earned 5 points
//  If the alien is yellow, print a message that the player earned 10 points
//  If the alien is green, print a message that the player earned 15 points
//version 1 of the program
if (alienColour == "green") {
    console.log("version 1: player earned 5 points.");
}
else if (alienColour === "yellow") {
    console.log("player earned 10 points.");
}
else if (alienColour === "red") {
    console.log("player earned 15 points.");
}
else {
    console.log("please select right color");
}
//version 2 of the program
alienColour = "yellow";
if (alienColour == "green") {
    console.log("player earned 5 points.");
}
else if (alienColour === "yellow") {
    console.log("version 2 :player earned 10 points.");
}
else if (alienColour === "red") {
    console.log("player earned 15 points.");
}
else {
    console.log("please select right color");
}
//version 3 of the program
alienColour = "red";
if (alienColour == "green") {
    console.log("player earned 5 points.");
}
else if (alienColour === "yellow") {
    console.log("player earned 10 points.");
}
else if (alienColour === "red") {
    console.log("version 3:player earned 15 points.");
}
else {
    console.log("please select right color");
}

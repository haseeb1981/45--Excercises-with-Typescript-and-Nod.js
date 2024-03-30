"use strict";
//store the location in a array. Make sure the array is not in  alphabetical order.
let places = ['itly', 'Germany', ' Karachi', 'Eifel Tower', 'Time square'];
//Print  your array in its orignal order.
console.log('Orignal ' + places);
//Print your array in  alphabetical order without  modifiying  the actual list.
console.log('Copy ' + [...places].sort());
//Show that your array is Still in its orignal order by printing it.
console.log('Orignal ' + places);
//Printing your array in reverse alphabetical order without changing  the order of the orignal list.
console.log('Copy ' + [...places].sort().reverse());
//Show that your array is Still in its orignal order by printing it again.
console.log('Orignal ' + places);
//Reverse the order of your list. Print the array to show that its order has change.
console.log('Orignal ' + places.reverse());
//Reverse the order of your list again . Print the list  to show its back to its orignal order.
console.log('Orignal ' + places.reverse());
//sort your array so its stored in alphabetical order.print the array to show that its order has been change.
console.log('Orignal ' + places.sort());
//sort change your array so its stored in reverse alphabetical order.print the list to  show that its order has change.
console.log('Orignal ' + places.sort().reverse());

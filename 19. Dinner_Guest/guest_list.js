"use strict";
let Guest_List = ['Imran khan', 'Nawaz Sharif', 'Asif Ali Zardari'];
// for (let i=0; i< Guest_List.length; i++) {
//     console.log('Dear Mr. ' + Guest_List[i] +',\n\nIt is Our Pleasure to invite you in Our party.\n\nThank You!\n\n')
// }
let absent_Guest = 'Imran Khan';
let new_Guest = 'Kamran Tessori';
Guest_List[0] = new_Guest;
// for (let i=0; i< Guest_List.length; i++) {
//     console.log('Dear Mr. ' + Guest_List[i] +',\n\nIt is Our Pleasure to invite you in Our party.\n\nThank You!\n\n')
// }
// console.log(`Mr. ${absent_Guest} is not coming to the party.`);
// console.log('Good News ! We  find Big Table so we are inviting 3 more  guests')
// array main 3 guest  add kiye hain
Guest_List.unshift('Sir Zia Khan');
Guest_List.splice(2, 0, 'Mariyum Nawaz');
Guest_List.push('Bhutto Zardari');
// yahan par mai ne  6 guest ke array ko print karwaya hai.
// Sorry Message to guest for not invited.
// console.log('\nSorry we can not arrange Big Table,Only Two people will be invited.');
// yahan par main ne guest remove keye hain.
while (Guest_List.length > 2) {
    let remove_Guest = Guest_List.pop();
    //console.log(`Sorry Mr. ${remove_Guest}, You are not invited for Dinner.`);
}
// humaray bachay  howe 2 invited guest. 
// for (let i=0; i< Guest_List.length; i++) {
//     console.log('Dear Mr. ' + Guest_List[i] +',\n\nYou are still invited.\n\nThank You!\n\n')
// }
// main ne saray guestt array se remove kar deye hain
Guest_List.splice(0, 2);
console.log(Guest_List);
//Exercise  19
//Print a message indicating the number of people you are inviting  to dinner.
console.log(`Total Number of Guest are: ${Guest_List}`);

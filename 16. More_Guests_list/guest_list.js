"use strict";
let Guest_List = ['Imran khan', 'Nawaz Sharif', 'Asif Ali Zardari'];
// for (let i=0; i< Guest_List.length; i++) {
//     console.log('Dear Mr. ' + Guest_List[i] +',\n\nIt is Our Pleasure to invite you in Our party.\n\nThank You!\n\n')
// }
let absent_Guest = 'Imran Khan';
let new_Guest = 'Kamran Tessori';
Guest_List[0] = new_Guest;
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is Our Pleasure to invite you in Our party.\n\nThank You!\n\n');
}
console.log(`Mr. ${absent_Guest} is not coming to the party.`);
console.log('Good News ! We  find Big Table so we are inviting 3 more  guests');
Guest_List.unshift('Sir Zia Khan');
Guest_List.splice(2, 0, 'Mariyum Nawaz');
Guest_List.push('Bhutto Zardari');
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is Our Pleasure to invite you in Our party.\n\nThank You!\n\n');
}

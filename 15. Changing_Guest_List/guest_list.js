"use strict";
let Guest_List = ['Imran khan', 'Nawaz Sharif', 'Asif Ali Zardari'];
// for (let i=0; i< Gst_List.length; i++) {
//     console.log('Dear Mr. ' + Guest_List[i] +',\n\nIt is Our Pleasure to invite you in Our party.\n\nThank You!\n\n')
// }
let absent_Guest = 'Imran khan';
let new_Guest = 'Kamran Tessori';
Guest_List[0] = new_Guest;
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is Our Pleasure to invite you in Our party.\n\nThank You!\n\n');
}
console.log(`Mr. ${absent_Guest} is not coming to the party.`);
console.log('Good News! We fine Big Table so we are inviting 3 more guest.');
Guest_List.unshift('sir zia khan');
Guest_List.splice(2, 0, 'Mariyam Nawaz');
Guest_List.push('Bilawal Bhutto zardari');
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is Our Pleasure to invite you in Our party.\n\nThank You!\n\n');
}

"use strict";
let personalName = '';
personalName = prompt('what is your name?') || '';
let lowercase = personalName.toLowerCase();
let uppercase = personalName.toUpperCase();
let titlecase = personalName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
if (personalName !== null && personalName !== '') {
    alert(`Hello ${personalName}, Here are your name in:
 LowerCase: ${lowercase}
 UpperCase: ${uppercase}
 TitleCase: ${titlecase}`);
}
else {
    alert('Please fill you name !');
}

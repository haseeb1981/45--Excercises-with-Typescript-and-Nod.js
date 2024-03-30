let personalName  :string  = '';

personalName = prompt('what is your name?') || '';

let lowercase :string = personalName.toLowerCase() ;
let uppercase :string = personalName.toUpperCase() ;
let titlecase :string = personalName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')

if(personalName !== null && personalName !==''){
    alert (`Hello ${personalName}, Here are your name in:
 LowerCase: ${lowercase}
 UpperCase: ${uppercase}
 TitleCase: ${titlecase}`)
}
else{
    alert('Please fill you name !')
}

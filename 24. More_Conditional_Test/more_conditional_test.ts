import test from "node:test";

// Equality and Inequality Test 1
console.log("Equality test with string: ", "Apple" === "Apple");

// Equality and Inequality Test 2
console.log("Inequality test with string: ", ("Apple" as string) != "Orange");

// Test using the lower case funcation
console.log("Lower case test with string" , "HELLO". toLowerCase()=== "hello");

// Numerical tests involving equality
console.log("Equality test with Number: ", 26 === 26);

// Numerical tests involving inequality
console.log("Inequality test with Number: ", ( 26 as number) != 35);


//greter then test
console.log("Greter then test: ",10 > 5);

// less than test
console.log("Less then test: ",5 < 10);


// greater than or equal
console.log("Greater than or equal to test:",10>=10);

//less than or equal to
console.log("Less than or equal to test:", 5<=10) ;

// testing using "and" operator
console.log("And operator test:", 5===5 && 10 > 5) ;

// testing using "or" operator
console.log("or operator test:", 5===5 || false) ;

// test wheather an item is in a array
const fruits :string[]=['Nashpati', 'Banana','Amrood']
console.log('test "Nashpati" in the array:',fruits.includes("Nashpati"));

//test weather an item in a array
console.log('testing "Apple" is not in array:',!fruits.includes('Apple'));





//Boolean True or False
console.log(5 > 4); // true
console.log(5 < 4); // false

//Compariosn Operators
// ==, !=, >, <, >=, <=, ===, !==
console.log(5 == 5); // true
console.log(5 == 4); // false
console.log(5 != 4); // true
console.log(5 != 5); // false
console.log(5 > 4); // true
console.log(5 < 4); // false
console.log(5 >= 4); // true
console.log(5 <= 4); // false

//Strict Equality Operator
console.log(5 === 5); // true
console.log(5 === '5'); // false
console.log(5 !== 5); // false  
// 
// 
// 
//Strict Inequality Operator
console.log(5 !== '5'); // true
console.log(5 !== 5); // false
//
//Truthy and Falsy values
//Falsy values: 0, '', undefined, null, NaN
//Truthy values: all other values
console.log(0 == false); // true
console.log(0 == ''); // true
console.log(0 == undefined); // false
console.log(0 == null); // false
console.log(0 == NaN); // false
console.log(0 == 0); // true
console.log(Boolean(0)); // false
console.log(Boolean('')); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(null)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(5)); // true
console.log(Boolean('5')); // true

console.log(Boolean(null)); // false


//combining conditionals with logical operators
//Logical AND (&&)
console.log(5 > 4 && 5 < 6); // true
//Logical OR (||)
console.log(5 > 4 || 5 < 4); // true

let isWeekend = true;
let isHoliday = false;
console.log(isWeekend && isHoliday); // false
console.log(isWeekend || isHoliday); // true
if (isWeekend || isHoliday) {
    console.log('Today is a holiday or weekend');
} else {
    console.log('Today is a working day');
}   
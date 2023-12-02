// Create an object, called crayonBox, that has a property that is an array. 
// The array should have the names of some crayons. Log one of the elements of that array.
const crayonBox= {colors: ["blue", "green", "red", "orange"]}
console.log(crayonBox.colors[3])

// Create an object bottle that has a property that is an object: cap. 
// cap can have properties like material: 'metal' or 'plastic', 
// color: blue or white etc. Log one of the properties of that inner object.

const bottle = {
    cap: { material: "metal", color: "blue"},
}
console.log(bottle.cap.color)

// Create an array called receipt that has at least one object in it. 
// The inner objects should be items that have a name and a price. 
// Log one of the properties of that inner object.
receipt = [
    {"name": "Groceries", "price": "$100"},]

console.log(receipt[0].name)

// Create an array called apartmentBuilding that has an array as one of its elements, 
// the inner array should be the names of the tenants. 
// Log one of the elements of the inner array.

const apartmentBuilding = names=[
    ["Bob", "Mary", "Ted"]
];
console.log(names[0][2])

// Combine objects, arrays, and functions more than one level deep

// Create a function knit that returns an object that has the following 
// kinds of properties item: scarf, size : 6ft etc.
//  Log a value of that object (hint: call the function and then call a property on the return value).

const knit = ()=>{
    return {
        scarf: {
            item:'scarf',
            size: '6ft'
        }
    }
}
;

console.log(knit().scarf.size);

// Create a function crayonSelector that returns an object that has an array
//  (you can reuse your crayonBox object). Log one of the elements of that array.
    
const crayonSelector = ()=>{
    return {
        crayonBox: {colors: ["blue", "green", "red", "orange"]}

};
}

console.log(crayonSelector().crayonBox.colors[3]);


// Create a function powerButton that returns a function called options 
// - options should console.log a simple message like select a song.
//  Call that inner function
function powerButton(){
    return function options()
    {
        console.log("select a song")
    }
}
powerButton()();

// Model a Vending Machine Model a vending machine

// a vending machine is an object
// it has an array of snacks (make 3 snacks)
// snacks are objects that have a name and a price
// a vending machine has a function vend that allows user to enter the array position 
// (a number) of the snack and then that snack will be returned
// Be able to call vendingMachine.vend() with a valid integer to return a snack

// const vendingMachine = [
//     {"name" : "candy bar", "price": "$2"},
//     {"name" : "chips", "price": "$1"},
//     {"name": "cookies", "price": "$1.50"},
//     function vend([i]){
//         return [vendingMachine.name[i],vendingMachine.price[i]].join(" ")},]

//    console.log(vendingMachine.vend([0]))

// Make a function add that takes two arguments (numbers) and sums them together
const add = (num1,num2) => num1+num2
 
// Make a function subtract that takes two arguments (numbers) and subtracts them
const subtract = (num1,num2) => num1 - num2
// Make a function multiply that takes two arguments and multiplies them

const multiply = (num1, num2) => num1 * num2
  
// Make a function divide that takes two arguments and divides them
const divide = (num1, num2) => num1 / num2
  
// Make a function calculate that takes three arguments. Assume the two arguments are a number 
// ie num1, num2 and a function called operates (a callback).
function calculate (num1, num2, operates)
{
  // Make it so that when calculate is invoked, the callback "operates" on the numbers and returns the value.
  return operates(num1,num2)
}


// Call calculate 4 times, each time using one of the operation functions you wrote
console.log(calculate(6,3,add))
console.log(calculate(6,3,subtract))
console.log(calculate(6,3,multiply))
console.log(calculate(6,3,divide))

// Function definition placement
// Clean up this code, so that it works and has function definitions in the correct place

const bar = () => {
    console.log('bar here');
}


const foo = () => {
    console.log('foo here');  }

foo();
bar();

// Error reading

// What is meant by the error(s) this produces?

// foo();

// const foo ()=>{
//     console.log('hi');}

// ANSWER: SyntaxError: Missing initializer in const declaration
// This is because arrow functions are not hoisted, so the program is attempting to call the foo function
// before it has been declared. 
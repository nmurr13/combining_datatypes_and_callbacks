const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]

const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']



// Determine if every number is greater than or equal to 0

const isGreaterOrEqualToZero= nums.every(e => e >= 0);


// determine if every word shorter than 8 characters
const isShorterThanEightChar= panagram.every(e  => e.length< 8);


// Filter


// filter the array for numbers less than 4

const isLessThanFour= nums.filter(e => e < 4);

// filter words that have an even length
const isItEven= panagram.filter(e => e.length%2==0)

// Find

// Find the first value divisible by 5
const divisbleBy5= nums.find(e => e%5==0)

// find the first word that is longer than 5 characters
const firstWordLongerThan5 = panagram.find(e => e.length >5)

// Find Index

// find the index of the first number that is divisible by 3
const divisibleBy3 =nums.findIndex(e => e%3==0)

// find the index of the first word that is less than 2 characters long
const lessThan2Char= panagram.findIndex(e => e.length>2)

// For Each

// console.log each value of the nums array multiplied by 3
const valueTimes3= nums.forEach(element =>console.log(element *3))
// console.log each word with an exclamation point at the end of it
const exclamationPoint= panagram.forEach(element => console.log(element.find=="!"))

// Map
// make a new array of each number multiplied by 100
nums.map(element =>console.log(element *1000))
// make a new array of all the words in all uppercase
panagram.map(element =>console.log (element.toUpperCase()))


// DRY

// Answer: This stands for Don't Repeat Yourself, and it means that you should try and avoid repeating 
// information that is likely to change over time and instead use loops, classes, functions, etc to
// be able to manipulate those specific elements without affecting the rest of your code.

// KISS

// Answer: KISS stands for Keep it Simple, Stupid! and it to the fact that when it comes to code,
// the simplest way to achieve a result is the best one, in terms of effiency and also the ease it takes
// to understand and edit the code.

// Avoid creating a YAGNI

// Answer: Yagni stands for You aren't Going to Need it! and it means that you should not add code until you know
// you actually need it.

// Do the simplest thing that could possibly work

// Answer: This is basically a combination of KISS and YAGNI, and the name of this concept is also the literal
// meaning of this concept.

// Don't make me think

// Answer: Don't make me think means that a human should be able to read your code and understand it with ease,
// and if that is not the case, then you should KISS!

// Write code for the maintainer

// Answer: This concept refers to the fact that whether it is you or another person that doesn't know you that
// has to maintain the code you write in the future, you must write it with ease of maintenance and understanding 
//in mind, otherwise you can run into problems in the future.


// Single responsibility principle

// Answer: This concept means that each compontent of the code you write should only preform one simple
// task.

// Avoid premature optimization

// Answer: This means that you should not think about optimizing your code until the end, since there 
// are tradeoffs involved where one aspect of optimization can come at the expense of another.

// Separation of concerns

// Answer: Seperation of concerns means that you should manage different areas of functionality 
// in your code with seperate and specific blocks of code, instead of having more than one piece of the 
// software dealing with the same issues.

// Which ones surprise you (if any)?

// Answer: None of them surprise me, as they all seem to be common sense and very related to each other.

// Which one is currently giving you the most struggle?

// Answer: I guess all of them are equally difficult, not to grasp conceptually, but to make sure that
// your code is the simplest and best it can be requires a deep level of understanding, and a lot of practice.

// Commenting Code

// Comment each line of this code and describe what it is doing. 
// Feel free to run this code and add console.logs to help you figure it out:

// const f = l => {

    //This line definies a variable (f) that is equal to an arrow function with a parameter of (l)

//   let es = 0, p = 0, c = 1, n = 0

//   This line declares the variables es, p, c, and n and their related values.

//   while (c <= l) {

//  This line is the declaration of a while loop inside the l function which says that while c is less than or
//  equal to l it should continue to run.

//     n = c + p;

// This line is declaring that the variable n is equal to the sum of variables c and p.

//     [c, p] = [n, c]

//  This line says that c and p are equal and that n and c are equal.

//     es += (c % 2 === 0) ? c : 0

//  This line means that es is equal to es plus whatever follows it, which is this case a ternary operator. 
//  In parentheses it is the condition of the ternary operator, saying that the value of c must be an even number
//  because it divides by 2 with no remainder and then the question indicates that if this condition
//  is true the value of  c is used and if it is false the value of 0 is used. 


//   }

// This curly bracket closes off the while loop from the rest of the code.

//   return es

// This means return the value of es.

// }

// This curly bracket closes off the whole arrow function.

// console.log(f(55))

//  This line says to console log the value of 55 which will be the argument that is passed 
//  through the parameter l in the previously described arrow function function .

// At first we may strive for the shortest code possible. But we really should be striving for readable code that is easy to 
// maintain. Compare the same solution with more semantic variable names (feel free to use this one to help you figure out 
// what is happening in this function:

//     const f2 = (limit) => {
//       let evenSum = 0;
//       let previous = 0;
//       let current = 1;
//       while (current <= limit) {
//         let next = current + previous;
//         previous = current;
//         current = next;
//         if (current % 2 === 0) {
//           evenSum += current;
//         }
//       }
//       return evenSum;
//     }
    
    
//     console.log(f2(55))

//     Answer with comments:
          
//     In keeping with one of our programming principals (write code for the maintainer): What would have been a more semantic 
//     name for this function (hint: this is a problem we had for either lab or hw and is considered a classic ) - 
//     are there any other variable names or things that would make this code easier to read and understand?

//     Answer: This is the fibonacci lab, and it would maybe be good to name the variable f2 something that indicates
//     it as such.
    
//     If you started a new job and your project was to expand the functionality of this function 
//     by allowing a second argument 
//     and then based on that second argument, returning the sum of even or odd numbers, 
//     which code would you rather start working with f or f2?

//      Answer: You would rather start working with f2 because it is more semantic and therefore easier to 
//      understand.
    
//     Finally, the 'shorter' code style doesn't use semi-colons, except for the fourth line. 
//     Remove this semi-colon! Run the code, is this semi-colon necessary?

//     Answer: When I run it without the semi colon it breaks the code and says "Invalid left-hand side in assignment"
//     which means that it is necessary to terminate the statement.

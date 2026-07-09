/*let name = 'Nimal';
//console.log(name[1]); 

let name1 = 'B'; // This will not change the value of name because strings are immutable in JavaScript
console.log(name); // Output: Nimal 

//=====Immutable Strings in JavaScript===== 
let x = name.replace('N', 'V'); // This will create a new string with the replaced value
console.log(x); // Output: Vimal*/






/*let story = 'java script hrima lesi';

let pikedText = story.slice(0, 11); // This will extract the substring from index 0 to 10 (not including 10)
console.log(pikedText); 

let replacedText = story.replace('hrima', 'is'); // This will replace the first occurrence of 'hrima' with 'is'
console.log(replacedText);

let upperCaseText = story.toUpperCase(); // This will convert the entire string to uppercase
console.log(upperCaseText);*/  


/*-----ES6 Features-----*/

//let & const are block-scoped variables introduced in ES6. They provide better scoping rules compared to var, which is function-scoped.
/*let x = 10;
let y = 20;

if(true){
    let x = 30; // This x is block-scoped and will not affect the outer x
    let y = 40;
    console.log(x); // Output: 30
    console.log(y); // Output: 40
}
console.log(x); // Output: 10
console.log(y); // Output: 20

//Arrow functions are a concise way to write functions in ES6. They have a shorter syntax and do not have their own 'this' context.
let calculateSum = (a, b) => a + b; // This is an arrow function that takes two parameters and returns their sum
console.log(calculateSum(5, 10)); // Output: 15

//Template literals are a new way to create strings in ES6. They allow for multi-line strings and string interpolation using backticks (`) and ${} syntax.
let name = 'Nimal';
let age = 25;
let message = `My name is ${name} and I am ${age} years old.`;
console.log(message); // Output: My name is Nimal and I am 25 years old. */

  /*let age = 25;
  let name = 'Nimal';

  let student={
    age,
    name,
    printAge(){
        console.log(`my age is ${age}`);
    }
  };
  console.log(student.age); // Output: 25
  console.log(student.name);
  student.printAge(); // Output: my age is 25*/

  //--classes--
  class Student {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }   
}
let data = new Student('Nimal', 25);
console.log(data.name); // Output: Nimal
console.log(data.age); // Output: 25
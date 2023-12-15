// Variable declate with Const
// 1: Scope

/*
const number = 50;

function print() {
  const square = number * number;

  if (number < 60) {
    var largerNumber = 80;
    const anotherLargerNumber = 100;

    console.log(square);
  }

  console.log(largerNumber);
  console.log(anotherLargerNumber);
}

print();
// 2500
// 80
// ReferenceError: anotherLargerNumber is not defined
*/

// 2: Redeclartion and reassigning

// const number = 50;

// const number = 100;

// SyntaxError: Identifier 'number' has already been declared

// const num = 50;

// num = 100;

// TypeError: Assignment to constant variable

// 3: Hoist لہرانا, کس جگہ پر ڈیکلئیر کرنا ہے

/*
console.log(num);
// ReferenceError: Cannot access 'number' before initialization

const num = 50;
*/

/*
KEYWORD	SCOPE	                REDECLARATION & REASSIGNMENT	HOISTING
var   	Global, Local	                  yes & yes	yes,      with default value
let	    Global, Local, Block	           no & yes	yes,      without default value
const	  Global, Local, Block	           no & no	yes,      without default value
*/

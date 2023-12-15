// Certainly! Here's a prompt for you:

// Logic 1:
// Write a JavaScript function that takes an array of objects representing students, where each object has a name and score property. The function should sort the array of students based on their scores in descending order and then display the sorted array.

// Take your time to work on this, and let me know if you have any questions or need guidance!

// const StudentsInfo = [
//   {
//     name: "Ali",
//     score: 12,
//   },
//   {
//     name: "Ahmed",
//     score: 17,
//   },
//   {
//     name: "Musa",
//     score: 14,
//   },
//   {
//     name: "Hashir",
//     score: 12,
//   },
//   {
//     name: "Kareem",
//     score: 10,
//   },
// ];

// function Students(students) {
//   students.sort((a, b) => {
//     return b.score - a.score;
//   });
//   console.log(students);
// }

// Students(StudentsInfo);

// Logic 2:
// Write a function to sort an array of numbers in ascending order without using the built-in Array.prototype.sort() method. Implement a sorting algorithm such as Bubble Sort, Selection Sort, or Insertion Sort to achieve the desired result.

// const number = [40, 6, 51, 67, 24, 75, 89];
// let temp = [];

// function sortNumbers(num) {
//   for (let index = 0; index < num.length; index++) {
//     for (let j = index; j < num.length; j++) {
//       if (num[j] > num[index]) {
// Swap elements
//         let tempValue = num[index];
//         num[index] = num[j];
//         num[j] = tempValue;
//       }
//     }
// After the inner loop, the element at index is the maximum for the remaining unsorted portion
//     temp.push(num[index]);
//   }
// }

// sortNumbers(number);
// console.log(temp);

// Logic 3:
// An array is given where each element consists of two parts: the first part is an array of non-negative integers, and the second part is an array of negative integers. Your task is to sort this array in such a way that the non-negative integers are in ascending order, and the negative integers are in descending order.

const mixedArray = [5, -3, 8, -7, 2, -1, 9, -4, 0];

function SortArray(arr) {
  arr.sort((a, b) => {
    if (a > 0 && b > 0) {
      return a - b;
    } else {
      return b - a;
    }
  });
}

SortArray(mixedArray);
console.log(mixedArray);

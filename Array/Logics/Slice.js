/*
Logic 1:
Question:
Suppose you have an array numbers containing [1, 2, 3, 4, 5]. You want to create a new array selectedNumbers that includes only the elements from index 2 to index 4 (inclusive) from the numbers array. How would you use the slice method to achieve this?
*/

/*
Answer:
const number = [1, 2, 3, 4, 5];

const selectedNumbers = number.slice(2);
console.log(selectedNumbers);
*/

/*
Logic 2:
Question:
Suppose you have an array called data containing a large set of information. You want to create a paginated view, where each page contains a maximum of 10 items. How would you use the slice method to extract items for a specific page number?

For example, if data has 100 elements, how would you extract elements for page 3, considering each page has 10 items? Remember, you need to calculate the appropriate starting and ending indices for the slice method.
*/

/*
Answer:
const data = [
  { id: 1, name: "Ahmed", age: 25, city: "Karachi" },
  { id: 2, name: "Fatima", age: 30, city: "Lahore" },
  { id: 3, name: "Muhammad", age: 28, city: "Islamabad" },
  { id: 4, name: "Aisha", age: 22, city: "Rawalpindi" },
  { id: 5, name: "Omar", age: 35, city: "Faisalabad" },
  { id: 6, name: "Sana", age: 27, city: "Multan" },
  { id: 7, name: "Bilal", age: 32, city: "Quetta" },
  { id: 8, name: "Zainab", age: 29, city: "Peshawar" },
  { id: 9, name: "Ibrahim", age: 31, city: "Gujranwala" },
  { id: 10, name: "Ayesha", age: 26, city: "Sialkot" },
  { id: 11, name: "Nadir", age: 24, city: "Karachi" },
  { id: 12, name: "Sara", age: 29, city: "Lahore" },
  { id: 13, name: "Tariq", age: 33, city: "Islamabad" },
  { id: 14, name: "Farida", age: 28, city: "Rawalpindi" },
  { id: 15, name: "Kamran", age: 31, city: "Faisalabad" },
  { id: 16, name: "Hina", age: 27, city: "Multan" },
  { id: 17, name: "Asim", age: 34, city: "Quetta" },
  { id: 18, name: "Nida", age: 30, city: "Peshawar" },
  { id: 19, name: "Rizwan", age: 29, city: "Gujranwala" },
  { id: 20, name: "Samina", age: 28, city: "Sialkot" },
  { id: 21, name: "Ali", age: 26, city: "Karachi" },
  { id: 22, name: "Rukhsar", age: 29, city: "Lahore" },
  { id: 23, name: "Imran", age: 33, city: "Islamabad" },
  { id: 24, name: "Bushra", age: 28, city: "Rawalpindi" },
  { id: 25, name: "Khalid", age: 31, city: "Faisalabad" },
  { id: 26, name: "Maria", age: 27, city: "Multan" },
  { id: 27, name: "Waqar", age: 34, city: "Quetta" },
  { id: 28, name: "Saima", age: 30, city: "Peshawar" },
  { id: 29, name: "Asad", age: 29, city: "Gujranwala" },
  { id: 30, name: "Amina", age: 28, city: "Sialkot" },
  { id: 31, name: "Fahad", age: 26, city: "Karachi" },
  { id: 32, name: "Nazia", age: 29, city: "Lahore" },
  { id: 33, name: "Omer", age: 33, city: "Islamabad" },
  { id: 34, name: "Shabnam", age: 28, city: "Rawalpindi" },
  { id: 35, name: "Nasir", age: 31, city: "Faisalabad" },
  { id: 36, name: "Zeba", age: 27, city: "Multan" },
  { id: 37, name: "Haris", age: 34, city: "Quetta" },
  { id: 38, name: "Amna", age: 30, city: "Peshawar" },
  { id: 39, name: "Shahid", age: 29, city: "Gujranwala" },
  { id: 40, name: "Rabia", age: 28, city: "Sialkot" },
  { id: 41, name: "Taimoor", age: 26, city: "Karachi" },
  { id: 42, name: "Sadia", age: 29, city: "Lahore" },
  { id: 43, name: "Qasim", age: 33, city: "Islamabad" },
  { id: 44, name: "Fariha", age: 28, city: "Rawalpindi" },
  { id: 45, name: "Umair", age: 31, city: "Faisalabad" },
  { id: 46, name: "Zain", age: 27, city: "Multan" },
  { id: 47, name: "Sadaf", age: 34, city: "Quetta" },
  { id: 48, name: "Aliya", age: 30, city: "Peshawar" },
  { id: 49, name: "Noman", age: 29, city: "Gujranwala" },
  { id: 50, name: "Hira", age: 28, city: "Sialkot" },
  { id: 51, name: "Kamal", age: 26, city: "Karachi" },
  { id: 52, name: "Rabia", age: 29, city: "Lahore" },
  { id: 53, name: "Adeel", age: 33, city: "Islamabad" },
  { id: 54, name: "Sadia", age: 28, city: "Rawalpindi" },
  { id: 55, name: "Bilal", age: 31, city: "Faisalabad" },
  { id: 56, name: "Ayesha", age: 27, city: "Multan" },
  { id: 57, name: "Farhan", age: 34, city: "Quetta" },
  { id: 58, name: "Yasmin", age: 30, city: "Peshawar" },
  { id: 59, name: "Saad", age: 29, city: "Gujranwala" },
  { id: 60, name: "Zahra", age: 28, city: "Sialkot" },
  { id: 61, name: "Waleed", age: 26, city: "Karachi" },
  { id: 62, name: "Amina", age: 29, city: "Lahore" },
  { id: 63, name: "Rashid", age: 33, city: "Islamabad" },
  { id: 64, name: "Sumaira", age: 28, city: "Rawalpindi" },
  { id: 65, name: "Qaiser", age: 31, city: "Faisalabad" },
  { id: 66, name: "Sadia", age: 27, city: "Multan" },
  { id: 67, name: "Usman", age: 34, city: "Quetta" },
  { id: 68, name: "Hina", age: 30, city: "Peshawar" },
  { id: 69, name: "Tariq", age: 29, city: "Gujranwala" },
  { id: 70, name: "Ayesha", age: 28, city: "Sialkot" },
  { id: 71, name: "Khalid", age: 26, city: "Karachi" },
  { id: 72, name: "Rukhsar", age: 29, city: "Lahore" },
  { id: 73, name: "Imran", age: 33, city: "Islamabad" },
  { id: 74, name: "Bushra", age: 28, city: "Rawalpindi" },
  { id: 75, name: "Kamran", age: 31, city: "Faisalabad" },
  { id: 76, name: "Maria", age: 27, city: "Multan" },
  { id: 77, name: "Waqar", age: 34, city: "Quetta" },
  { id: 78, name: "Saima", age: 30, city: "Peshawar" },
  { id: 79, name: "Asad", age: 29, city: "Gujranwala" },
  { id: 80, name: "Amina", age: 28, city: "Sialkot" },
  { id: 81, name: "Fahad", age: 26, city: "Karachi" },
  { id: 82, name: "Nazia", age: 29, city: "Lahore" },
  { id: 83, name: "Omer", age: 33, city: "Islamabad" },
  { id: 84, name: "Shabnam", age: 28, city: "Rawalpindi" },
  { id: 85, name: "Nasir", age: 31, city: "Faisalabad" },
  { id: 86, name: "Zeba", age: 27, city: "Multan" },
  { id: 87, name: "Haris", age: 34, city: "Quetta" },
  { id: 88, name: "Amna", age: 30, city: "Peshawar" },
  { id: 89, name: "Shahid", age: 29, city: "Gujranwala" },
  { id: 90, name: "Rabia", age: 28, city: "Sialkot" },
  { id: 91, name: "Taimoor", age: 26, city: "Karachi" },
  { id: 92, name: "Sadia", age: 29, city: "Lahore" },
  { id: 93, name: "Qasim", age: 33, city: "Islamabad" },
  { id: 94, name: "Fariha", age: 28, city: "Rawalpindi" },
  { id: 95, name: "Umair", age: 31, city: "Faisalabad" },
  { id: 96, name: "Zain", age: 27, city: "Multan" },
  { id: 97, name: "Sadaf", age: 34, city: "Quetta" },
  { id: 98, name: "Aliya", age: 30, city: "Peshawar" },
  { id: 99, name: "Noman", age: 29, city: "Gujranwala" },
  { id: 100, name: "Hira", age: 28, city: "Sialkot" },
];

const page3 = data.slice(30, 40);
console.log(page3);
*/

/*
const itemsPerPage = 10;
const totalPages = Math.ceil(data.length / itemsPerPage);

Function to get items for a specific page
const getItemsForPage = (pageNumber) => {
  const startIndex = pageNumber - 1 * itemsPerPage;
  const endIndex = pageNumber * itemsPerPage;
  return data.slice(startIndex, endIndex);
};

Loop through pages and store items
const pages = [];
for (let i = 1; i <= totalPages; i++) {
  const itemsForPage = getItemsForPage(i);
  pages.push(itemsForPage);
}

console.log(pages);
*/

/*
Logic 3:
Question:
How can you create a new array named earlyBooks using the slice method that includes only the books from the beginning of the library array up to (but not including) the book with the publication year 870?
*/

/*
Answer:
const library = [
  {
    title: "Sahih Muslim",
    author: "Imam Muslim",
    publicationYear: 875,
    genre: "Hadith",
  },
  {
    title: "Jami` at-Tirmidhi",
    author: "Imam Tirmidhi",
    publicationYear: 884,
    genre: "Hadith",
  },
  {
    title: "Sahih al-Bukhari",
    author: "Imam Bukhari",
    publicationYear: 870,
    genre: "Hadith",
  },
  {
    title: "Sunan Abu Dawood",
    author: "Imam Abu Dawood",
    publicationYear: 817,
    genre: "Hadith",
  },
  {
    title: "Sunan Nasai",
    author: "Imam Nasai",
    publicationYear: 911,
    genre: "Hadith",
  },
  {
    title: "Sunan Ibn Majah",
    author: "Imam Ibn Majah",
    publicationYear: 824,
    genre: "Hadith",
  },
];

const earlyBooks = library.slice(
  0,
  library.findIndex((book) => book.publicationYear === 870)
);
const index = library.findIndex((book) => book.publicationYear === 870);
console.log(index);
*/

// Basic exercise 1
let tableSize = 10;

for (let i = 1; i <= tableSize; i++) {

    for (let j = 1; j <= tableSize; j++) {
        const product = i * j;
        console.log(`${j} x ${i} = ${product}\n`);
    }
    console.log(`\n`)
}

// Basic exercise 2 - 1.

let fullName: { fName: string; lName: string } = {
    fName: 'Chris',
    lName: 'Runda'
};

// Access the properties and print the full name to the browser
document.write(`Full Name: ${fullName.fName} ${fullName.lName}<br><br>`);

// Basic exercise 2 - 2.

let fullNameArray = Array(10).fill(fullName);

fullNameArray.forEach((nameObject, index) => {
    document.write(`<br>First Name #${++index}: ${nameObject.fName}`);
});
document.write(`<br><br>`);

// Basic exercise 2 - 3.

function printLastName() {
    for (let i = 0; i < 10; i++) {
      console.log(`${i + 1}: ${fullName.lName}`);
    }
  }
  
  setTimeout(printLastName, 5000);

//   Basic exercise 3

const names: string[] = ["Alice", "Bob", "Charlie", "David", "Eve"];

// 1. Print only the index of the elements
console.log("Indices:");
names.forEach((name, index) => {
  console.log(index);
});

// 2. Print only the values
console.log("\nValues:");
names.forEach((name) => {
  console.log(name);
});

// 3. Print both index and values
console.log("\nIndices and Values:");
names.forEach((name, index) => {
  console.log(`Index: ${index}, Value: ${name}`);
});
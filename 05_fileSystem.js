const fs = require('fs');

// fs.readFile('06_file.txt', 'utf-8', (err, data) => {
//     console.log(err, data);
// })

// const a = fs.readFileSync('06_file.txt')
//     console.log(a.toString());

// console.log("Finished reading file");

// fs.writeFile('07_file2.txt', "This is the data", () => {
//     console.log("written to the file");
// });

// console.log("Finished writing file");

const b = fs.writeFileSync('07_file2.txt', "This is the data2")
    console.log(b);


console.log("Finished writing file");
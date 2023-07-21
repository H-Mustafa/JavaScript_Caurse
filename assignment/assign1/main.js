// The First Assignment:
document.write("<h1>Elzero</h1>");
document.write(
  "<style>h1{color: blue;font-size: 80px;font-weight: bold;text-align: center;font-family: Arial}</style>"
);

// The Second Assignment:
console.log(
  "%cElzero %cWeb %cSchool",
  "color:red;font-size:40px;",
  "color:green;font-weight:bold;font-size:40px;",
  "background-color:blue;font-size:40px;"
);

// The Third Assignment
console.group("group 1");
console.log("Message One");
console.log("Message Two");
console.group("child Group");
console.log("Message One");
console.log("Message Two");
console.group("Grand Child Group");
console.log("Message One");
console.log("Message Two");
console.groupEnd();
console.groupEnd();
console.groupEnd();
console.group("Group 2");
console.log("Message One");
console.log("Message Two");
console.groupEnd("End Group 2");

// The Fourth Assignment
console.table(["Elzero","Ahmed","Sameh", "Gamal","Aya"])

// The Final Assignment 
// one
// console.log("Iam In Console");
// document.write("Iam In Page");

// sec
console.log() = function() {};
console.log("Iam In Console");
document.write() = function() {};
document.write("Iam In Page");
// ChatGPT helps Me :D
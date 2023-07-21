// بســـم اللـــه الرحمــن الرحيـــم

// The First Thing I Get
/*
  Output To Screen 
  - Window.alert() => بيطلع رسالة وقت تدخل الصفحة
  - document.write() => كتابة المحتوى داخل الصفحة 
  - - document => اللي هي الصفحة
  - console.log() => تطبع الرسالة تبعك بالكونسل

  Syntax 
*/
// window.alert("Hello From JS File");
document.write("<h1>This <span>Header</span></h1>");
console.log("Hello");

// The Sec Thing I Got
/*
  Console Methods 
  - log => مشان تطبع رسالة عادية
  - error => مشان يطلع بالكونسل ايرور مع تحديد سطر الموجود فيه 
  - table => بيعمل جدول داخل الكونسول

  web API
  هل الكونسول للجافاسكربت؟
  APIلا, الكونسول معمول من الـ 

  Styling Console
  - Directive %c

*/
console.log("Log");
console.error("ERROR");
console.table(["Hamzah", "Osama", "Batman"]);
// To Do Styling on Console
console.log(
  "Hello %cJs %cfile",
  "color:red; font-size: 1.1em",
  "color:green; font-size:1.2em"
);

// The Third Thing I Got
/*
  ES6 => Ecma Script => هاي شركة بتعمل معايير لكتابة السكرتب
*/
let myName = "Hamzah ";
var nickName = "Batman";
console.log("Hello " + myName + nickName);
// Console.group
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
console.groupEnd();

// The 4th Thing I Got
/*
  typeof => نوع الشيء اللي بعطيه اياه
  Data Types Intro 
  - String => نص او رسالة
  - Number => رقم
  مشان يتعرف عليه انه رقم لازم ما احط ""
  - Array => object => مصفوفة = قائمة
  - Object => موضوع
  - Boolean قيمة منطقية
  - undefiend => غير موجود
  - Null => القيمة الفاضية خالص
*/

console.log("Hamzah Alsamra");
console.log(typeof "Hamzah Alsamra");
console.log(typeof 5000);
console.log(typeof 500.98);
console.log(typeof [10, 12, 15]);
console.log(typeof ["HM", "MS", "AL"]);
console.log(typeof { name: "Hamzah", age: 17, country: "Sa" });
console.log(typeof true);
console.log(typeof false);
console.log(typeof undefined);
console.log(typeof null);

// 5th Variables Introdaction
/*
  variabales intro
  - what is variables? => متغير 
  - why we use variables? => حاوية لها اسم ونضع فيها بيانات
  - - Variables its a Named Container
  - Declare A Variables And Use => بنعلن عن متغير ومنستخدمه
  - Syntax ( Keyword | Variable Name | Assignment Operator | Variables Value)
  - variable without var 
  - Multiple Variables In The Same Line
  - Id And Global Variables
  - Loosely Typed vs Strongly Typed
  {اي اي دي موجود في الاتش تي ام ال رح يكون متغير بتقدر تستخدمه بالجافا}
*/
var user = "Bruce",
  age = 17;

console.log(user);
console.log(user);
console.log(age);
console.log(age);

// لتغير المحتوى
hello.innerHTML = "Option";

// 6th: Identifiers Name Conventions And Rules
/*
  Identifiers 
  - Name Conventions And Rules
  - - us er => not work
  - - 1user => not work => us1er => work => user1 => work
  - - _user => work => _user_Khali_mohammed_ => work
  - - $user => work => $user$khalid$mohammed$ => work
  - Reserved Words => الكلمات المحجوزة
  - - var
  - - if
  - - function
  - we use in javascript CamelCase:
  - - user name => userName 
*/

var $user = "Mohammed";
console.log($user);



// 7th: var, let, Const Conmpare
/*
  var
  - Redeclare ( YES ) => اعادة الاعلان
  - Access Bafore Declare ( UndeFiend )
  - Variable Scope Drama [Added To Widow] ( YES )
  - Block Or Function Scope
-----------------------------------------------
  let
  - Redeclare ( NO => ERROR )
  - Access Before Declare ( ERROR )
  - Variable Scope Drama ( NO )
  - Block Or Function Scope
-----------------------------------------------
  Const
  - Redeclare ( NO => ERROR )
  - Access Before Declare ( ERROR )
  - Variable Scope Drama ( NO )
  - Block Or Function Scope
*/

// Redeclare: اعادة الاعلان
var a = 1;
var a = 2;
console.log(a);
// // لو سويت اعادة اعلان للـ ليت رح يعطيك تنبيه انه ما بتقدر
// let b = 1;
// let b = 2;
// console.log(b);
// // لو سويت اعادة اعلان للـ ليت رح يعطيك تنبيه انه ما بتقدر
// const c = 1;
// const c = 2;
// console.log(b);



// 8th: String Syntax And Character Escape Sequences
/*
  String Syntax + Character Escape Squences
  \ Escape + Line Continue => الخط المايل هاد بيقول للبرنامج انه يعمل سكب للشيء المعين اللي بدك اياه
  \n => new line => كانه بتعمل انتر
*/
console.log("Elzero Web 'School'"); // لو حابب اميز كلمة السكول بين سينقل كوت
console.log('Elzero Web "School"'); // لو حابب اميز كلمة السكول بين دبل كوت
console.log("Elzero Web \"School\""); // لو حابب اميز كلمة السكول بين دبل كوت جوا اصلا دبل كوت
console.log("Elzero \\Web \"School\""); // لو بدي اكتب الخط المائل اصلا بحط السكب وبعده الخط المائل
console.log("Elzero \
Web \
School");
console.log("Elzero\nWeb\nSchool");



// 9th: Concatenation
/*
  Concatenation => عبارة عن نظرية بعلوم الكمبيوتر بتوصف ربط البيانات ببعضها = سلسلة
*/
let l = "We Love";
let j = "JaveScript";
document.write(l + " " + j);
console.log(l, j); // الكونسول رح يعتبرهم رسالتين ويحط من عنده رسالة



// 10th: Template Literals Template String
/*
  Template Literals (Template Strings)
*/
let te = "We Love";
let mp = "JavaScript";
let la = "And";
let li = "Programming";

console.log(te + " " + mp + " " + la + " " + li);
console.log(`${te} ${mp} ${la} ${li}`); // هاي النتيجة نفس اللي فوق لكن بطريقة جديدة
console.log(te + " " + mp + "\n" + la + " " + li);
console.log(te + " " + mp + "\n" + la + " " + li);
console.log(`${te} ${mp}
${la} ${li}`); // نفس النتيجة فوق بس بطريقة جديدة
console.log(`${te} "" '' \\ ${mp} ${la} ${li}`); // We Love "" '' \ JaveScript And Programming
console.log(`${te} "" '' \\ ${mp} ${100 * 50} ${li}`); // We Love "" '' \ JaveScript 5000 Programming

let title = "Batman is"
let desc = "Bruce Wayne And Do IT"
let markUp =`
<div class="parent">
  <h3>${title}</h3>
  <p>${desc}</p>
</div>
`;
document.write(markUp);




// 11th: Variable And Concatenation "(Challenge)"
/*
  ===========================================
  == Variables And Concatenation Challenge ==
  ===========================================
  
  [1] Create 3 Variables [Title, Description, Date];
  -- All In One Statement
  -- Variables Name Most Be Two Words
  -- Title Content Is "Elzero"
  -- Description Content is "Elzero Web School"
  -- Date Content Is "25/10"
  [2] Create Variabels Contains Div And This Div Contains
  -- H3 For Title
  -- P For Paragraph
  -- Span For Time
  [3] Add This Card To 4 Page Times
  [4] Use Template Literals For Concatenation

  Extra 
  - Repeat
*/

let theTitle = "Elzero",
    desCription = "Elzero Web School"
    dateTime = "25/10"
    cardHtml =`
<div class="card">
  <h2>Hello ${theTitle}</h2>
  <p>${desCription}</p>
  <span>${dateTime}</span>
</div>`;
document.write(cardHtml.repeat(4));




//--------------------------------------------------
// 12th: Arithmetic Operators
/*
  Arithmetic Operators
  + Addition => الجمع
  - Subtraction => الطرح
  * Multipliction => الضرب
  / Division => القسمة
  ** Exponentiation (ES7) => الاس
  % Modulus (Division Remainder) => باقي القسمة
  ++ Increment [ Post / Pre ]
  -- Decrement [ Post / Pre ]
*/
console.log(10 + 20); // 30 => Numbers
console.log(10 + "Osama"); // 10Osama => String

console.log(10 - 20); // -10 => Numbers
console.log(10 - "Osama"); // NaN => Not a Number 
console.log(typeof NaN); // Number :)

console.log(10 * 20); // 200 => Numbers
console.log(10 * -20); // -200 => Numbers

console.log(20 / 5); // 4 => Numbers
console.log(20 / 3); // 6.66666667 => Numbers

console.log(2 ** 4); // 16 => Numbers

console.log(10 % 2); // 0 => There Is No Modulus
console.log(11 % 2); // 1 => Remove 1
console.log(35 / 2); // 17.5 => ليس رقم صحيح 
console.log(35 % 2); // 1 => Remove 1


// ++ Increment [ Post | Pre ]:
let num1 = 1;
console.log(num1++); // 1 => Increment Post => انه بيطبع بعدين بيزود 
console.log(num1); // 2

let num2 = 1;
console.log(++num2); // 2 => Increment Pre => انه بيزود بعدين بيطبع
console.log(num2); // 2
// -- Decrement [ Post | Pre ]:
let num3 = 1;
console.log(num3--); // 1 => Decrement Post => انه بيطبع بعدين بنقص 
console.log(num3); // 0

let num4 = 1;
console.log(--num4); // 0 => Decrement Pre => انه بنقص بعدين بيطبع
console.log(num4); // 0




//--------------------------------------------------
// 13th: Unary Plus And Negation Operators
/*
  - + Unary Plus [Return Number If Its Not Number]
  - - Unary Negation [Return Number If Its Not Number + Negats It]
  Tests
  - Normal Number
  - String Number
  - String Negative Number
  - String Text
  - Float
  - Hexademcimal Numeral System => 0xFF => هاد نظام ارقام ابحث عنه لو بدك
  - Null 
  - False
  - True 
*/
// [1]: + Unary Plus
console.log(+100); // 100
console.log(+"100"); // 100
console.log(+"-100"); // -100
console.log(+"Osama"); // NaN
console.log(+"15.5"); // 15.5
console.log(+0xff); // 255
console.log(+null); // 0 => cuz its empty
console.log(+false); // 0
console.log(+true); // 1

// [-]: - Unary Negation
console.log(-100); // -100
console.log(-"100"); // -100
console.log(-"-100"); // 100
console.log(-"Osama"); // NaN
console.log(-"15.5"); // 15.5
console.log(-0xff); // 255
console.log(-null); // 0 => cuz its empty
console.log(-false); // 0
console.log(-true); // 1

//--------------------------------------------------
// 13th: Type Coercion
/*
  Type Coercion (Type Casting)
  - +
  - -
  - "" - 2
  - false - true
*/
var y = "10";
var k = 20;
var t = true; 
console.log(y + k); // 1020 = String
console.log(+y + k); // 30
console.log(Number(y) + k); // 30
console.log(y - k); // -10
console.log("" - 2); // -2 => 0 - 2 
console.log(false - true); // -1 => 0 - 1 
console.log(k + t); // 21 => 20 + 1
console.log(y + k + t); // 1020true
console.log(+y + k + t); // 31




//--------------------------------------------------
// 14th: Assignment Operators
/*
  Assignment Operators
*/
var C = 10;

C = C + 20; // 30
C = C + 70; // 100
C += 100; // 200 => C = C + 100;
C -= 50; // 150 => C = C - 50;
C /= 50; // 3 => C = C / 50;
C *= 4; // 12 => C = C * 4; 

console.log(C);


//--------------------------------------------------
// 15th: Operator Challenge 
/* Challenge 01 */
let p = 10;
let m = "20";
let n = 80;

console.log(++p + +m++ + +n++ - +p++); // 11 + 20 + 80 - 11 = 100
/*
[++p]
  - Value: 11
  - Explain: Pre Increment
  [+]
  - Explain: Addition Operator
  
  [+m++]
  - Value: 20
  - Explain: Unary Plus, post Increment
  [+]
  - Explain: Addition Operator
  
  [+n++]
  - Value: 80
  - Explain: Unary Plus but There Is No Effect Cuz Alredy Number, post Increment
  [-]
  - Explain: Subtraction Operator
  
  [+p++]
  - Value: 11
  - Explain: Unary Plus but There Is No Effect Cuz Alredy Number, post Increment
  
  = 100
*/

console.log(++p + -m + +n++ - -p++ + +p); // 11 + -20 + 80 - -11 + 12 = 94
/*
  [++p]
  - Value: 13
  - Explain: Pre Increment
  [+]
  - Explain: Addition Operator
  
  [-m]
  - Value: -21
  - Explain: Unary Negation
  [+]
  - Explain: Addition Operator
  
  [+n++]
  - Value: 81
  - Explain: Unary Plus, post Increment
  [-]
  - Explain: Subtraction Operator
  
  [-p++]
  - Value: -13
  - Explain: Unary Negation, post Increment
  [+]
  - Explain: Addition Operator
  
  [+p]
  - Value: 14
  - Explain: Unary Plus
  
  = 100
*/

console.log(--n + +m + --p * +m++ - +m * p + --p - +true);
// p = 14, m = 21, n = 82
/*
  [--n]
  - Value: 81
  - Explain: Pre Decrment
  [+]
  - Explain: Addition Operator

  [+m]
  - Value: 21
  - Explain: Unary Plus
  [+]
  - Explain: Addition Operator

  [--p]
  - Value: 13
  - Explain: Pre Decrment
  [*]
  - Explain: Multipliction Operator

  [+m++]
  - Value: 21
  - Explain: Unary Plus, Post Decrment
  [-]
  - Explain: Subtraction Operator
  
  [+m]
  - Value: 22
  - Explain: Unary Plus
  [*]
  - Explain: Multiplication Operator

  [p]
  - Value: 13
  - Explain: Nothing Change Just Print The P 
  [+]
  - Explain: Addition Operator

  [--p]
  - Value: 12
  - Explain: Pre Decrment
  [-]
  - Explain: Subtraction Operator

  [+true]
  - Value: 1
  - Explain: Unary Plus

  = 100
*/

/* Challenge 02 */
let d = "-100";
let e = "20";
let f = 30;
let g = true; // 1

// Only Use Variables Value
// Do Not Use Variables Twice

console.log(-d * e); // 2000
console.log(++g * ++e + ++f + -d); // 173





//--------------------------------------------------
// 16th: Number
/**
  Number => هاد اداة باللغة بتساعدك تحول السترينج لرقم
  - Double precision
  - Syntactic sugar "_" => انه اضيف شوية اشياء بتخلي الكود احلى بحيث انه يكون مفهوم
  - e => بعد فيها الاصفار
  - **
  - With Decimal
  - Number + BigInt => عدد صحيح كبيير 
  - Number Min Value
  - Number Max Value
*/
console.log(1000000);
console.log(1_000_000);
console.log(1e6); // يعني بدي ست اصفار
console.log(10 ** 6); // 1.000.000
console.log(1000000.000); // 1.000.000

console.log(Number("100"));
console.log(Number.MAX_SAFE_INTEGER); // انه بيعطيك اكبر رقم باللغة امن يعني ما بيعطيك رقم غريب
console.log(Number.MAX_VALUE); // يعني هاد اخر رقم رح توصله باللغة
console.log(Number.MAX_VALUE + 2448640684); // هاد يعني انه ما بتقدر تضيف عليه لانه اخر رقم باللغة
console.log(Number.MIN_SAFE_INTEGER + 2448640684); // بيعطيك اصغر قيمة امنة باللغة





//--------------------------------------------------
// 17th: Number Methods
/*
  Number Methods
  - Two Dots To Call A Methods
  - toString() => ارجع الرقم للسترينج
  - toFixed() => بتتحكم بعرض الارقام اللي بالاصفار
  - parseInt() => يتم تحليل البيانات وبيطبع الرقم الصحيح
  -- parseInt => parse = تحليل = Int => Integer = الارقام الصحيحة
  - parseFloat() => يتم تحليل البيانات وبيطبع الرقم حتى لو مو صحيح
  - isInteger() [ES6] => بقولك اذا الرقم صحيح او لا عن طريق الترو وفولس
  - isNaN() [ES6] => بقولك اذا مو رقم 
*/

console.log((100).toString()); // بيطبع الرقم كسترينج
console.log(100..toString()); // بيطبع سترينج بس بدون اقواص وبتحط النقطتين مشان تفهمه انه الرقم خلص ومافيه كسور

console.log(100.565654684.toFixed(2)); // هيك بقوله انه من بعد المية اعرض رقمين 

console.log(Number("100 Osama")); // NaN 
console.log(+"100 Osama"); // NaN 
console.log(parseInt("100 Osama")); // يتم تحليل البيانات وبيطبع الرقم فقط
console.log(parseInt("Osama 100 Osama")); // NaN => الاداة مش بالذكاء اللي يسمح تحط اول شيء اسم
console.log(parseInt("100.500 Osama")); // 100 => رح يطبع العدد الصحيح

console.log(parseFloat("100.500 Osama")); // 100.500 => رح يطبع العدد كامل

console.log(Number.isInteger("100")); // False
console.log(Number.isInteger(100.500)); // False
console.log(Number.isInteger(100)); // True

console.log(Number.isNaN("Hamzah")); // False
console.log(Number.isNaN("Hamzah" / 20)); // True





//--------------------------------------------------
// 18th: Math Object
/**
  Math Object
  - round() => بيقرب الرقم اذا كان .5 بيزيد اذا اقل من النص بيقرب للصفر وعندك الامثلة
  - ceil() => بيقربه لاعلى قيمة
  - - يعني سقف
  - floor() => بيقربه لاقل قيمة
  - min() => بيجيب اعلى رقم موجود بالقيم
  - max() => بيجيب أقل رقم موجود بالقيم
  - pow() => اس
  - - pow = power
  - random() => بيطلعلك رقم عشوائي
  - trunc [ES6] => يعني بتشيل الكسور وهيك ماعاد فيه تقريب للارقام
  - - truncate = اقتطاع
*/

console.log(Math.round(99.2)); // 99
console.log(Math.round(99.5)); // 100

console.log(Math.ceil(99.2)); // 100

console.log(Math.floor(99.9)); // 99

console.log(Math.max(10, 50, 100, -100, 90, 20)); // 100 => بيجيب اعلى رقم موجود بالقيم
console.log(Math.min(10, 50, 100, -100, 90, 20)); // -100 => بيجيب اقل رقم موجود بالقيم

console.log(Math.pow(2, 4)); // 2 ** 4 => يعني كانك عم تقول اثنين اس اربعة

console.log(Math.random());

console.log(Math.trunc(99.5)); // 99 => يعني بتشيل الكسور من الاساس وماعاد فيه تقريب ولا حاجة



//--------------------------------------------------
// 19th: Number Challenge

let NumCh = 1_00;
let NumChb = 2_00.5;
let NumChc = 1e2;
let NumChd = 2.4;

// Find Smallest Number In All Variables And Return Integer
console.log(Number.parseInt(Math.min(NumCh, NumChb, NumChc, NumChd)));

// Use Variables a + d One Time To Get The Needed Output
console.log(Math.pow(NumCh, Math.floor(NumChd))); // 10000

// Get Integer "2" From d Variables With 4 Methods
console.log(Math.floor(NumChd));
console.log(Math.round(NumChd));
console.log(Number.parseInt(NumChd));
console.log(Math.trunc(NumChd));

// Use Variables b + d To Get This Values
console.log((Math.floor(NumChb) / Math.ceil(NumChd)).toFixed(2)); // 66.67 => String
console.log(Math.ceil(NumChb) / Math.ceil(NumChd)); // 67 => Number
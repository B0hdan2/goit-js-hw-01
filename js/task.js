// let client = prompt('2 + 2 * 2' ) ;
// const max = '6';


// while ( client !== max) {
//     client = prompt('2 + 2 * 2' );
// }
// alert('правильно! дякую вам за вашу роботу ви найкращі ❤️');

// const start = 6;
// const end = 17;
// let number;

// for (let i = start; i <= end; i += 1){

//   number = i;

// if(number % 5 === 0){
//   console.log(number);
//   break;
// };

// };


// function findNumber(start, end, divisor) {
  
//     for(let i = start; i <= end; i ++){
//       if(i % divisor === 0){
//         return i;
//       };
//     };
//   };
  
//   console.log(findNumber(2, 6, 5));
//   console.log(findNumber(8, 17, 3));
//   console.log(findNumber(6, 9, 4));
//   console.log(findNumber(16, 35, 7));

// function getFileName(file) {

// const indexIsPoint = file.indexOf('.');


// if(indexIsPoint > 0){
// console.log( file.slice(0,indexIsPoint));

// }else{

//     console.log( file);
// };

// };
//   getFileName("styles.css");
//   getFileName("app.js");
//   getFileName("app");
//   getFileName("index.js");
//   getFileName("index.html");
//   getFileName("index.css");
//   getFileName("index");


// function createFileName(name, ext) {
//     return `${name.trim()}.${ext}`
//   }
// console.log(createFileName(" order ", "txt"))  
// console.log(createFileName("report ", "csv"))  
// console.log(createFileName(" presentation", "xml"))  




// Використовуючи конструкцію if..else, напишіть код,
// що запитує: ‘Яка “офіційна” назва JavaScript ?’ Якщо відвідувач вводить “ECMAScript”, виведіть “Правильно!”,
//  в іншому випадку — виведіть: “Ви не знаєте ? ECMAScript!”
// function askTestName (){
// const name = prompt("Яка “офіційна” назва JavaScript ").toLowerCase();

// return 'ECMAScript'.toLowerCase() === name ?  "Правильно!": 'Ви не знаєте ? ECMAScript!';

// };

// console.log(askTestName())

// Написати скрипт, який перевіряє чи введене число через prompt потрапляє в діапазон від 55 до 99 включно.
// Якщо так, вивести в консоль "Число потрапляє в діапазон".
// Якщо ні, вивести в консоль "Число не потрапляє в діапазон".
// function askTest (){
// const meassege  = prompt("очікую число");

// return meassege >= 55  && meassege <=99 ? "Число потрапляє в діапазон" : "Число не потрапляє в діапазон";

// if ( meassege >= 55  && meassege <=99 ){
//     return "Число потрапляє в діапазон"
// }else{
//     return"Число не потрапляє в діапазон"
// }
// };

// console.log(askTest())

// Є 3 вікові групи : діти (0-16), дорослі(17-60), пенсіонери (61-100).
// До якої групи відноситься Максим, якщо йому 55 років.Назву групи вивести на екран.
// function askTest (){
//     const ageGroups  = prompt('ваш вік')
//     if(ageGroups >= 0 && ageGroups <= 16){
//     alert('діти')
//     }else if(ageGroups >= 17 && ageGroups <= 60){
//     alert('дорослі')
//     }else if(ageGroups >= 61 && ageGroups <= 100){
//     alert('пенсіонери')
//     }
//     };

//     console.log(askTest())

// Якщо ваше ім’я містить більше 4 букв і прізвище більше 5, то виведіть на екран число, яке дорівнює сумі букв імені і прізвища.
// Якщо умова не виконується - вивести “неможливо виконати умову”.
// Наприклад: “Віктор Сташко” Віктор - 6 літер, Сташко - 6 літер. Виводимо 12.
// Використовувати вбудований метод length.
// function askTest (){
//     const name  = prompt('імя');
//     const lastName  = prompt('прізвище');

//     return name.length > 4 && lastName.length > 5 ? name.length + lastName.length :  'неможливо виконати умову';

//     };

//     console.log(askTest());




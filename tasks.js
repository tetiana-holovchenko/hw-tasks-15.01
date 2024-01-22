//1.  Ви прийшли в Макдональдз з трьома друзями.
//Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
//Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
//то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
//то виводити в консоль текст "Ми йдемо в інше кафе"
// (Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних)


const hamburger = 3; 
const fries = 1;

if (hamburger >= 4 && fries) {
    console.log ('Ми поїли');
}
else {
    console.log ('Ми йдемо в інше кафе');
}




//2. Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
//Результат виводити в консоль.


let price = 1901;    // хз надо ли добавить else если число вне диапазона что выводить в консоль?

if(price >= 1000 && price <= 1900) {
    console.log ('true');
}


//3.  Напишіть конструкцію if, щоб перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно.
// Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
// Результат виводити в консоль.



let price = 1500;    // работает

if (price >= 1000 && price <= 1900) {
    console.log (price + ' ціна товару знаходиться між 1000 та 1900 включно');
}
else{
    console.log (price + ' ціна товару не знаходиться між 1000 та 1900 включно');
}
 



let price = 100;    // работает c !

if (!(price >= 1000 && !price <= 1900)) {
    console.log ( price + ' ціна товару не знаходиться між 1000 та 1900 включно');
}
else{
    console.log ( price + ' ціна товару знаходиться між 1000 та 1900 включно');
}



//4. За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
// Результат виводити в консоль.



let season = [
    'winter',
    'spring',
    'summer',
    'autumn'
];

let currentSeason = 3;

if (currentSeason === 0) {
    console.log('It is ' + season[0]);
}
else if (currentSeason === 1) {
    console.log('It is ' + season[1]);
}
else if (currentSeason === 2) {
    console.log('It is ' + season[2]);
}
else if (currentSeason === 3) {
    console.log('It is ' + season[3]);
}


//5. Задано 3 числа (a, b, c), які не рівні між собою.
//    Визначити середнє мід цими трьома числами
//    (не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням) використовуючи оператор if-else.
//    Використати вкладені оператори if
//    Результат виводити в консоль.


//if (a !== b && b !== c && a !== c) {


let a = 6;
let b = 3;
let c = 10;

if (a !== b) {
    if (b !== c) {
        if (a !== c) {
            let maxNum = Math.max(a, b, c);
            let minNum = Math.min(a, b, c);

            let middleNum = a + b + c - maxNum - minNum;

            console.log('Среднее число: ' + middleNum);
        } else {
            console.log('Числа не должны быть равными');
        }
    } else {
        console.log('Числа не должны быть равными');
    }
} else {
    console.log('Числа не должны быть равными');
}



//6. Задано номер дня тижня.
// За заданим номером вивести назву дня тижня використовуючи switch.
// Результат виводити в консоль.


    let weekDay = 5;

    switch (weekDay) {
        case 1:
          console.log('Monday');
          break;
        case 2:
          console.log('Tuesday');
          break;
        case 3:
            console.log('Wednesday');
            break;  
        case 4:
            console.log('Thursday');
            break;
        case 5:
            console.log('Friday');
            break;
        case 6:
            console.log('Saturday');
            break;
        case 7:
            console.log('Sunday');
            break;
        }



//7. За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
//Математичні операції для обчислення: "+", "-", "*", "/".
//Результат виводити в консоль.




let par = '+';
num1 = 2;
num2 = 3;

switch (par) {
    case '+':
      console.log( num1 + num2 );
      break;
    case '-':
        console.log( num1 - num2 );
        break;
    case '*':
        console.log( num1 * num2 );
        break;
    case '/':
      console.log( num1 / num2 );
      break;
}


//13.*  Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова.

let word = "JavaScript";
let result = word.replace(/[aeiou]/ig, '');

console.log(result);



// 8. Використовуючи цикл for перемістити значення від 1 до 5 у масив myArray.

let myArray = [1, 2, 3, 4]
for(let i = 0; i < myArray.length; i++){
    console.log(myArray[i]);
}


// 9.  Напишіть 2 цикли.
//   За допомогою першого передайте парні числа від 1 до 9 у myArray за допомогою циклу for.
//   За допомогою другого передайте непарні числа від 1 до 9 у myArray за допомогою циклу for. 

let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9] //четные
for(let i = 0; i < myArray.length; i++){
    if (myArray[i] % 2 === 0) {
    console.log(myArray[i]);
}
}


let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9] //не четные
for(let i = 0; i < myArray.length; i++){
    if (myArray[i] % 2 !== 0) {
    console.log(myArray[i]);
}
}


// 10. Оголоcіть та ініціалізуйте змінну total = 0.
// Використовуйте цикл for, щоб додати значення кожного елемента масиву myArr до підсумку.
// const myArr = [2, 3, 4, 5, 6];

const myArr = [2, 3, 4, 5, 6];
let total = 0;
for(let i = 0; i < myArr.length; i++){
    total += myArr[i];
}

console.log(total);


// 11. Напишіть код, котрий виведе в консоль кожен піделемент в arr по одному.

// const arr = [ [1, 2], [3, 4], [5, 6] ];

//Console output:
//1
//2
//3
//4
//5
//6

const arr = [ [1, 2], [3, 4], [5, 6] ];
const flatArr = arr.flat();
for (let i = 0; i < flatArr.length; i++) {
    console.log(flatArr[i]);
}




//12. Доповніть код нижче, так щоб в консоль повертався результат множення усіх чисел у підмасивах arr.
 //   Використайте для цього вкладені цикли for.

   // Наприклад:
   // const arr = [[1], [2], [3]]  >  console.log(product) має повернути 6
   // const arr = [[1, 2], [3, 4], [5, 6, 7]]  >  console.log(product) має повернути 5040
   // const arr = [[5, 1], [0.2, 4, 0.5], [3, 9]]  >  console.log(product) має повернути 54

   



   const arr = [[1, 2], [3, 4], [5, 6, 7]];
let product = 1;

for (const subArray of arr) {
    let subArrayProduct = 1;

    for (const number of subArray) {
        subArrayProduct *= number;
    }

    product *= subArrayProduct;
}

console.log(product);






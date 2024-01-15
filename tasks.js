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

//14.*  Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
// так щоб в консоль виводився результат обчислень з правильним закінченням.
// Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,032 кілометра і т.д.



let m = 101000;
let distanceKm = m * 0.001;

if (distanceKm === 1.5) {
    console.log(distanceKm + ' кілометра');
}
else if (distanceKm % 1 !==0) {    // дроби
    console.log(distanceKm + ' кілометра');
}
else if (distanceKm % 10 === 1) {  // если единица
    console.log(distanceKm + ' кілометр');
}
else if ([2, 3, 4].includes(distanceKm % 10)) { //заканчивается на 2,3,4 
    console.log(distanceKm + ' кілометри');
}
else {
 console.log(distanceKm + ' кілометрів');
}

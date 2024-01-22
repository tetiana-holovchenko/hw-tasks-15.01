//1.
const hamburger = 4;
const fries = 4;

const checkMeal = (hamburgerQuantity, friesQuantity) => {
    if (hamburgerQuantity >= 4 && friesQuantity >= 1) {
        console.log('Ми поїли');
    } else {
        console.log('Ми йдемо в інше кафе');
    }
};

checkMeal(hamburger, fries);



//2.

let price = 1901;

const checkPrice = (price) => {
    if (price >= 1000 && price <= 1900) {
        console.log('true');
    } else {
        console.log('false');
    }
};

checkPrice(price);

//3. 

let price = 1500;   

const checkPrice = (price) => {
if (price >= 1000 && price <= 1900) {
    console.log (price + ' ціна товару знаходиться між 1000 та 1900 включно');
}
else{
    console.log (price + ' ціна товару не знаходиться між 1000 та 1900 включно');
}
};
checkPrice(price);


let price = 100;    // работает c !

const checkPrice = (price) => {
if (!(price >= 1000 && !price <= 1900)) {
    console.log ( price + ' ціна товару не знаходиться між 1000 та 1900 включно');
}
else{
    console.log ( price + ' ціна товару знаходиться між 1000 та 1900 включно');
}
};
checkPrice(price);


//4.

let season = [
    'winter',
    'spring',
    'summer',
    'autumn'
];

let currentSeason = 3;

function pickSeason(currentSeason) {
    if (currentSeason >= 0 && currentSeason < season.length) {
        console.log('It is ' + season[currentSeason]);
    } else {
        console.log('Invalid season number');
    }
}

pickSeason(currentSeason);



//5.

let a = 6;
let b = 3;
let c = 10;

function compare (a, b, c) 
    {
        if (a !== b && b !== c && a !== c) {
            let middleNum = a + b + c - Math.max(a, b, c) - Math.min(a, b, c);
            console.log('Среднее число: ' + middleNum);
        } else {
            console.log('Числа не должны быть равными');
        }
    }

compare (a, b, c);

//6.
let weekDay = 5;
function chooseweekDay (weekDay) {

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
};
chooseweekDay (weekDay);


//7.

let par = '+';
let num1 = 2;
let num2 = 3;

function operation(par, num1, num2) {
    switch (par) {
        case '+':
            console.log(num1 + num2);
            break;
        case '-':
            console.log(num1 - num2);
            break;
        case '*':
            console.log(num1 * num2);
            break;
        case '/':
            console.log(num1 / num2);
            break;
        default:
            console.log('Invalid operator');
    }
}

operation(par, num1, num2);


//13.
function removeVowels(word) {
    return word.replace(/[aeiou]/ig, '');
}

let word = "JavaScript";
let result = removeVowels(word);

console.log(result);


//8.
let myArray = [1, 2, 3, 4];

function printArrayValues(myArray) {
    for (let i = 0; i < myArray.length; i++) {
        console.log(myArray[i]);
    }
}

printArrayValues(myArray);


// 9.

let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9] //четные

function evenNumbers (myArray) {
for(let i = 0; i < myArray.length; i++){
    if (myArray[i] % 2 === 0) {
    console.log(myArray[i]);
}
}
};
evenNumbers (myArray)


let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9] //не четные

function oddNumbers (myArray) {
for(let i = 0; i < myArray.length; i++){
    if (myArray[i] % 2 !== 0) {
    console.log(myArray[i]);
}
}
};
oddNumbers (myArray)


// 10.

const myArr = [2, 3, 4, 5, 6];
let total = 0;

function totalSum (myArr, total) {
for(let i = 0; i < myArr.length; i++){
    total += myArr[i];
}

console.log(total);
}
totalSum (myArr, total)




// 11.

const arr = [ [1, 2], [3, 4], [5, 6] ];
const flatArr = arr.flat();

function eachElement(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

eachElement(flatArr);




// 12

const arr = [[1, 2], [3, 4], [5, 6, 7]];
let product = 1;


function multiplication(arr) {
for (const subArray of arr) {
    let subArrayProduct = 1;

    for (const number of subArray) {
        subArrayProduct *= number;
    }

    product *= subArrayProduct;
}

console.log(product);
}
multiplication(arr)
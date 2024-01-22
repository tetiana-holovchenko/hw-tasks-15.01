//14.*  Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
// так щоб в консоль виводився результат обчислень з правильним закінченням.
// Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,032 кілометра і т.д.



let m = 1.5;
let distanceKm = m * 0.001;

if (m === 1500 && distanceKm === 1.5) {
    console.log(m + ' метрів це ' + distanceKm + ' кілометра'); //  1.5 для км
} else if (m === 1.5 && distanceKm === 0.0015) {
    console.log(m + ' метра це ' + distanceKm + ' кілометрів'); // 1.5 для м


} else if (m % 1 !== 0 && distanceKm % 1 !== 0) {    // дроби в метрах и км  +
    console.log(m + ' метра це ' + distanceKm + ' кілометра');
} else if (m % 1 === 0 && distanceKm % 1 !== 0) {    // дроби ток в км, в м целое число +
    console.log(m + ' метрів це ' + distanceKm + ' кілометра');
} else if (m % 1 === 0 && distanceKm % 10 === 1) {    // если единица в км + в м любое цел число +
    console.log(m + ' метів це ' + distanceKm + ' кілометр');

} else if ([2, 3, 4].includes(m % 10) && distanceKm % 1 !== 0) { //заканчивается на 2,3,4 
    console.log(m + ' метра це ' + distanceKm + ' кілометра');


} else {
    console.log(m + ' метрів це ' + distanceKm + ' кілометрів');
}
// Сколько всего заработает человек за год, с такими условиями? Сложить траты и доходы в отдельные переменные `spending_total` `income_total` измеряется в процентах
// No_1

let money = 25000;

let spending_total;
let income_total;

let spending1 = 4;
let spending2 = 12;

let income1 = 8;
let income2 = 14;

spending_total = spending1 + spending2; // 16
income_total = income1 + income2; // 22

console.log(spending_total, 'сумов');
console.log(income_total, 'сума');

money - spending_total;
money + income_total;

let total;
total = money;

console.log(total, 'сум')

/* ------------------------------------- */

// Рассказать о себе при помощи переменных (мини-сочинение) (возраст надо вычислить)
// No_2

let firstName = 'Diyor';
let surName = 'Abdurahmanov';
let year = 2021;
let born = 2004;
let yearsOld = 17;
let isMarried = false;
console.log(year - born);

console.log(`Всем привет, меня зовут ${firstName} ${surName}. Мне ${yearsOld} лет. Женат - ${isMarried}.`);

// Вывести в консоль "Всем привет, меня зовут ... . Я родился в ... "
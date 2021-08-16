'use strict';

/* 1) Создать переменную numberOfFilms и в неё поместить от поьзователя ответ на вопрос "Сколько фильмов вы уже посмотрели?" */
let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", " ");
console.log(numberOfFilms);

/* 2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передаётся ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false */

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
/*  3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"  */

if (personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count < 30) {
    alert("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
    alert("Вы киноман");
} else {
    alert("Произошла ошибка");
}
/* Задайте пользователю по два раза вопросы: 
    - "Один из последних просмотренных фильмов?"
    - "На сколько его оцените?"
Ответы стоит поместить в отдельные переменные 
Записать ответы в объкт movies в формате:
    movies: {
        'logan': "8.1"
    } 
    +) Автоматизировать вопросы пользователю про фильмы при помощи цикла
    +) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять*/


    for (let i = 0; i < 2; i++) {
        let a = prompt("Один из последних просмотренных фильмов?", " ");
        let b = +prompt("На сколько его оцените?", " ");

        if (a != null && b != null && a != '' && b != '' && a.length < 50 && b > 0) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }


 // Потренироваться и переписать цикл еще двумя способами
 // Первый способ

/* let i = 0;

while (i < 2) {
    let a = prompt("Один из последних просмотренных фильмов?", " ");
        let b = +prompt("На сколько его оцените?", " ");
        i++;

        if (a != null && b != null && a != '' && b != '' && a.length < 50 && b > 0) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
} */

//Второй способ

/* let i = 0;
do {
    let a = prompt("Один из последних просмотренных фильмов?", " ");
    let b = +prompt("На сколько его оцените?", " ");
    i++;

    if (a != null && b != null && a != '' && b != '' && a.length < 50 && b > 0) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}
while (i < 2); */

console.log(personalMovieDB);
console.log(personalMovieDB.movies); 



// Тренируемся по свойствам и методам строк и чисел
let str = "test";
console.log(str.toUpperCase());
console.log(str);

// indexOf() method
let fruit = "Some fruit";
console.log(fruit.indexOf("fox"));
console.log(fruit.indexOf("fruit"));

//меняем строки using slice(), substring(), substr() methods
let logg = "Hello World";
console.log(logg.substr(6, 5));

// using Math methods
let figure = 12.8;
console.log(Math.floor(figure));

// using parseInt() and parseFloat()
let test = "12.2px";
console.log(parseInt(test));
console.log(parseFloat(test));

let numb = 20;
function showFirstMessage(text) {
    console.log(text);
    let numb = 90;
}
showFirstMessage("Hello World");
console.log(numb);

function calc(a, b) {
    return (a + b);
}
console.log(calc(-5, 6));


function ret() {
    let num = 50;
    return num;
}
const anotherNum = ret();
console.log(anotherNum);

const logger = function() {
console.log("Helo");
};
logger();

const calcul = (a, b) => {
    return (a + b);
};
console.log(calcul(5, 7));




let num = 50;

/* Пример использования условий
if (num < 49) {
    console.log("Error");
} else if (num > 100) {
    console.log("Too much");
} else {
    console.log("Ok!");
} */

// пример тернарного оператора
(num === 50) ? console.log("Error") : console.log("Ok!");

// пример swith
switch (num) {
    case 49:
        console.log("Неправда");
        break;
    case 100:
        console.log("Не совсем");
        break;
    case 50:
        console.log("В точку!");
        break;
    default:
        console.log("не в этот раз");
        break;
}

/* while (num < 55) {
    console.log(num);
    num++;
} */

/* do {
    console.log(num);
    num++;
}
while (num < 55); */

/* for (let i = 1; i < 8; i++) {
    console.log(i);
} */

for (let i = 1; i < 10; i++) {
    if (i === 6) {
        continue;
    }
    console.log(i);
}


// Код возьмите из предыдущего домашнего задания
'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", " ");
    
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", " ");
    }
}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
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
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count < 30) {
        alert("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
        alert("Вы киноман");
    } else {
        alert("Произошла ошибка");
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);
    
function writeYourGenres() {
    let counter = 1;
    for (let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${counter}`, "");
        counter++;
    }
}

writeYourGenres();

//Callback function examples
function first() {
    //do something
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

function learnJS(lang, callback) {
    console.log(`I am learning ${lang}`);
    callback();
}

/* function done() {
    console.log("I have watched this lesson");
}
learnJS("Javascript", done); */

//Using Anonymous Function
learnJS("JavaScript", function() {
    console.log("I have watched this lesson");
});

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

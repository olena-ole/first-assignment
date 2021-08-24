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

//Arrays, array methods
const arr = [1, 2, 3];
//arr.pop();
//arr.push(10);
//arr.unshift(67);
//arr.shift();
//console.log(arr);

//Перебираем массив
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// for of
for (let value of arr) {
    console.log(value);
}

//Избегаем ошибки
const aye = [4, 8, 9, 6];
aye[99] = 8;
console.log(aye.length);
console.log(aye);

//Using for.Each();
const apic = [1, 3, 6, 9, 8];
apic.forEach(function(item, i, apic) {
    console.log(`${i}: ${item} в массиве ${apic}`);
});

//Using split() and join() methods
const strr = prompt("Введите любимые продукты через запятую", "");
const products = strr.split(", ");
console.log(products);
console.log(products.join("; "));

//Using sort() method for arrays with string values inside
const someArray = ["qqq", "bbb", "aaa"];
someArray.sort();
console.log(someArray);

//Using sort() method for arrays with numbers inside
const numberArray = [2, 13, 26, 8, 10];
console.log(numberArray.sort(compareNum));

function compareNum(a, b) {
    return a - b;
}

//Objects, object methods, object destructuring
const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log("Test");
    }
};

options.makeTest();

//Destructuring Objects
const {border, bg} = options.colors;
console.log(border);
console.log(bg);

/* deleting key:value 
delete options.name;
console.log(options); */

//Перебираем свойства объекта с помощью for in
for (let key in options) {
    if (typeof(options[key]) === "object") {
        for (let i in options[key]) {
        console.log(`Свойство ${i} имеет значение ${options[key][i]}`); 
        }
    } else {
    console.log(`Свойство ${key} имеет значение ${options[key]}`);    
    } 
}

//Используем счётчик, чтобы узнать сколько свойств в объекте
let counter = 0;
for (let key in options) {
    counter++;
}
console.log(counter);

// Используем Oblect.keys(), чтобы узнать сколько свойств в объекте
console.log(Object.keys(options));
console.log(Object.keys(options).length);
console.log(Object.keys(options["colors"]));
console.log(Object.keys(options["colors"]).length);
console.log(Object.keys(options.colors).length);
console.log(Object.keys(options.colors));


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

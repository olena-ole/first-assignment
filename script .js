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

// Передача по ссылке или по значению

//Работаем с примитивными данными
let a = 5,
    b = a;
b = b + 5;
console.log(b); //10
console.log(a); //5

//Работаем с объектами
const obj = {
    a: 5,
    b: 1
};

const copy = obj;
copy.a = 10;
console.log(copy); //{ a: 10, b: 1 }
console.log(obj); //{ a: 10, b: 1 }

//Создаем ПОВЕРХНОСТНУЮ копию объекта с помощью цикла
function coppy(mainObj) {
    let objCopy = {};

    let key; //как вариант, можно объявить переменную здесь
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
} 

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = coppy(numbers);
newNumbers.a = 10;
newNumbers.c.x = 10;
console.log(newNumbers); //{ a: 10, b: 5, c: { x: 10, y: 4 } }
console.log(numbers); //{ a: 2, b: 5, c: { x: 10, y: 4 } }

// Object.assign() method
const add = {
    d: 17, 
    e: 20
};

console.log(Object.assign(numbers, add)); //{ a: 2, b: 5, c: { x: 10, y: 4 }, d: 17, e: 20 }
console.log(numbers); //{ a: 2, b: 5, c: { x: 10, y: 4 }, d: 17, e: 20 }

//Используем Object.assign() method для создания ПОВЕРХНОСТНОЙ копии объекта
const clone = Object.assign({}, add);
clone.d = 20;
console.log(add); //{ d: 17, e: 20 }
console.log(clone); //{ d: 20, e: 20 }

//Используем slice() method для создания ПОВЕРХНОСТНОЙ копии массива
const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();
newArray[1] = 'phrase';
console.log(newArray); //[ 'a', 'phrase', 'c' ]
console.log(oldArray); //[ 'a', 'b', 'c' ]

//spread operaror
const video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'livejournal', 'blogger'],
    internet = [...video, ...blogs, 'vk', 'fb'];
console.log(internet); // ['youtube', 'vimeo', 'rutube', 'wordpress', 'livejournal', 'blogger', 'vk', 'fb']

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 4, 7];
log(...num);

//Создаем копию массива с помощью оператора spread
const array = ['a', 'b'];
const newAarray = [...array];
newAarray[1] = "c";
console.log(array); //[ 'a', 'b' ]
console.log(newAarray); //[ 'a', 'c' ]

//Создаем копию объекта с помощью оператора spread
const q = {
    one: 1,
    two: 2
};
const newQ = {...q};
newQ.one = 10;
console.log(newQ); //{ one: 10, two: 2 }
console.log(q); //{ one: 1, two: 2 }

'use strict';

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false, 

    start: function() {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", " ");
        
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", " ");
        }
    },

    rememberMyFilms: function() {
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
    },

    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            alert("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count < 30) {
            alert("Вы классический зритель");
        } else if (personalMovieDB.count > 30) {
            alert("Вы киноман");
        } else {
            alert("Произошла ошибка");
        }
    },

    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },

    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    
    writeYourGenres: function() {
        for (let i = 0; i < 3; i++) {
            let genres = prompt(`Ваш любимый жанр под номером ${i + 1}`, "");
            if (genres == '' || genres == null) {
                console.log("You entered wrong data, please, try again");
                i--;
            } else {
                personalMovieDB.genres[i] = genres;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Your favourite genre #${i + 1} is ${item}`);
        });
    }

    /* writeYourGenres: function() {
        for (let i = 1; i < 2; i++) {
            //null causes bug because toLowerCase cannot be applied
            let genres = prompt("Перечислите ваши любимые жанры через запятую").toLowerCase();
            if (genres == null || genres == "") {
                console.log("Пожалуйста, введите корректные данные");
                i--;
            } else {
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort();
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Your favourite genre #${i + 1} is ${item}`);
        });
    } */

    /* writeYourGenres: function() {
        let counter = 1;
        for (let i = 0; i < 3; i++) {
            personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${counter}`, "");
            while (personalMovieDB.genres[i] == '' || personalMovieDB.genres[i] == null) {
                personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${counter}`, "");
            }
            counter++;
        }
        let myArray = personalMovieDB.genres;
        myArray.forEach(function(item, i, myArray) {
            console.log(`Любимый жанр #${i+1} - это ${item}`);
        });
    }, */

    /* toggleVisibleMyDB: function() {
        if (personalMovieDB.privat === false) {
            personalMovieDB.privat = true;
        } else {
            personalMovieDB.privat = false;
        }
    } */
};
personalMovieDB.writeYourGenres();

//JS Interview Tasks
//1
/* let x = 5;
alert(x++); //5
alert(++x); //6 */

//2 console.log([] + false - null + true); //NaN
console.log([] + false); //false
console.log(typeof([] + false)); //string (an empty array becomes an empty string - '')
console.log([] + false - null); //NaN
console.log("string" - null); //NaN
console.log([] + false - null + true); //NaN
console.log([] + false + true); //falsetrue
console.log(typeof([] + false + true)); //string

//3 последовательное присваивание
/* let y = 1;
let x = y = 2;
alert(x); //2 */

//4 Чему равна сумма [ ] + 1 + 2?
console.log([] + 1 + 2); //12 ([] becomes '')

//5 Что выведет этот код: alert( "1"[0] )?
alert("1"[0]); //1
console.log(typeof('1'[0])); //string
alert("1"[1]); //undefined

//6 Чему равно 2 && 1 && null && 0 && undefined ?
// && запинается на false и срабатывает как return
console.log(2 && 1 && null && 0 && undefined); // null
console.log(2 && 1); //1
console.log(2 && 1 && 0); //0
console.log(2 && 1 && undefined); //undefined
console.log(2 && 7); //7

//7 Есть ли разница между выражениями? !!(a && b) и (a && b)?
console.log(!!(1 && 2) === (1 && 2)); //false
console.log(!!(1 && 2)); //true
console.log(1 && 2); //2
console.log(true === 2); //false

//8 Что выведет этот код: alert( null || 2 && 3 || 4 ); ?
alert( null || 2 && 3 || 4 ); //3

//9 a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?
/* let a = [1, 2, 3],
    b = [1, 2, 3];
console.log(a == b); //false
console.log(a === b); */

//10 Что выведет этот код: alert(+"Infinity"); ?
alert(+"Infinity"); //Infinity
console.log(typeof(+"Infinity")); //number

//11 Верно ли сравнение: "Ёжик" > "яблоко" ?
console.log("Ёжик" > "яблоко"); //false (using Unicode)

//12 Чему равно 0 || "" || 2 || undefined || true || falsе ?
console.log(0 || "" || 2 || undefined || true || falsе); //2

//JS Dynamic Typing
//To String
//1 (old and rarely used way)
console.log(typeof(String(null)));//string
console.log(typeof(String(4)));//string

//2 concatenation
console.log(typeof(5 + '')); //string
console.log(typeof(null + '')); //string

const numb = 5;
console.log("https://fb.com/catalog/" + numb); //https://fb.com/catalog/5

const fontSize = 26 + "px";
console.log(fontSize); //26px

//To Number
//1 (old and rarely used way)
console.log(typeof(Number("9"))); //number

//2) Unary plus (+)
console.log(typeof(+"9")); //number

//3) Using parseInt
console.log(parseInt("15px", 10)); //15

//To boolean
// 0, null, '', undefined, NaN - are always false
// [], {}, ' ', integers and everything else - are always true
//1) Often used in practice
let switcher = null;
if (switcher) {
    console.log("...Working");
}
switcher = 1;
if (switcher) {
    console.log("...Working");
}              //...Working

//2) Using Boolean
console.log(typeof(Boolean("4"))); // boolean

//3) Using !! + string/number (almost never used)
console.log(typeof(!!"4")); // boolean
console.log(!!4); //true
console.log(!!"4"); //true


//JS principles
let str = 'some';
let strObj = new String(str);
console.log(typeof(str)); //string
console.log(typeof(strObj)); //object
console.dir([1, 2, 3]); //go to browser

//OOP
const soldier = {
    health: 400,
    armour: 100, 
    sayHello: function() {
        console.log("Hello");
    }
};

const john = Object.create(soldier); //modern way, often used
john.sayHello(); //Hello
/* 
const john = {
    health: 100
};

//john.__proto__ = soldier; //we don't use this anymore, it's deprecated
Object.setPrototypeOf(john, soldier); //modern way, used in dynamics
console.log(john); //{ health: 100 }
console.log(john.armour); //100
john.sayHello(); //Hello 
*/


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

'use strict';
/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить от поьзователя ответ на вопрос "Сколько фильмов вы уже посмотрели?"

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передаётся ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы: 
    - "Один из последних просмотренных фильмов?"
    - "На сколько его оцените?"
Ответы стоит поместить в отдельные переменные 
Записать ответы в объкт movies в формате:
    movies: {
        'logan': "8.1"
    }

Проверить, чтобы вмё работало без ошибок в консоли*/

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
console.log();
/* 3) Задайте пользователю по два раза вопросы: 
    - "Один из последних просмотренных фильмов?"
    - "На сколько его оцените?"
Ответы стоит поместить в отдельные переменные 
Записать ответы в объкт movies в формате:
    movies: {
        'logan': "8.1"
    } */
let firstFilm = prompt("Один из последних просмотренных фильмов?", " ");
let firstFilmRating = +prompt("На сколько его оцените?", " ");
let secondFilm = prompt("Один из последних просмотренных фильмов?", " ");
let secondFilmRating = +prompt("На сколько его оцените?", " ");

personalMovieDB.movies[firstFilm] = firstFilmRating;
personalMovieDB.movies[secondFilm] = secondFilmRating;

console.log(personalMovieDB);
console.log(personalMovieDB.movies);

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
/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/



// Код возьмите из предыдущего домашнего задания
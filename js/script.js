/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

"use strict";
/* 
const movieDB = {
		movies: [
			"Логан",
			"Лига справедливости",
			"Ла-ла лэнд",
			"Одержимость",
			"Скотт Пилигрим против...",
		],
		removeAd: () => {
			adBlocks.forEach((item) => {
				item.remove();
			});
		},
		changeGanre: () => {
			promoGanre.textContent = "драма";
		},
		chengePromoImg: () => {
			promoPoster.style.backgroundImage = "url(../img/bg.jpg)";
		},
		changePromoFilms: () => {
			// ? Его
			promoListUl.innerHTML = "";
			movieDB.movies.sort();
			movieDB.movies.forEach((film, i) => {
				promoListUl.innerHTML += `<li class="promo__interactive-item">
						${i + 1}. ${film}
						<div class="delete"></div>
					</li>`;
			});
			// ? Мое
			// for (let i = 0; i < promoListFilms.length; i++) {
			// 	promoListFilms[i].innerHTML = `${i + 1}. ${
			// 		movieDB.movies[i]
			// 	} <div class="delete"></div>`;
			// 	// domListElement.textContent = `${i + 1}. ${movieDB.movies[i]}`;
			// 	// domListElement.insertAdjacentHTML(
			// 	// 	"beforeend",
			// 	// 	'<div class="delete"></div>'
			// 	// );
			// }
		},
	},
	adBlocks = document.querySelectorAll(".promo__adv > img"),
	promoPoster = document.querySelector("div.promo__bg"),
	promoGanre = promoPoster.querySelector(".promo__genre"),
	promoListFilms = document.querySelectorAll(".promo__interactive-item"),
	promoListUl = document.querySelector(".promo__interactive-list");
movieDB.removeAd();
movieDB.changeGanre();
movieDB.chengePromoImg();
movieDB.changePromoFilms();
 */
/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

document.addEventListener("DOMContentLoaded", () => {
	const movieDB = {
			movies: [
				"Логан",
				"Лига справедливости",
				"Ла-ла лэнд",
				"Одержимость",
				"Скотт Пилигрим против...",
			],
			removeAd: () => {
				adBlocks.forEach((item) => {
					item.remove();
				});
			},
			changeGanre: () => {
				promoGanre.textContent = "драма";
			},
			chengePromoImg: () => {
				promoPoster.style.backgroundImage = "url(../img/bg.jpg)";
			},
			addMovieFromInput: () => {
				imputAddMovie.parentElement.lastElementChild.addEventListener(
					"click",
					(e) => {
						e.preventDefault(); // ? отмена событий по умолчанию
						if (addLikeFilm.checked) {
							console.log("Добавляем любимый фильм");
						}
						movieDB.movies.push(imputAddMovie.value);
						movieDB.changePromoFilms();
					}
				);
			},
			changePromoFilms: () => {
				// ? Его
				promoListUl.innerHTML = "";
				movieDB.movies.sort();
				movieDB.movies.forEach((film, i) => {
					if (film.length > 20) {
						film = film.slice(0, 20) + "...";
					}
					promoListUl.innerHTML += `<li class="promo__interactive-item">
				${i + 1}. ${film}
				<div class="delete"></div>
			</li>`;
					//
				});
				movieDB.delFilmItem();
				// ? Мое
				// for (let i = 0; i < promoListFilms.length; i++) {
				// 	promoListFilms[i].innerHTML = `${i + 1}. ${
				// 		movieDB.movies[i]
				// 	} <div class="delete"></div>`;
				// 	// domListElement.textContent = `${i + 1}. ${movieDB.movies[i]}`;
				// 	// domListElement.insertAdjacentHTML(
				// 	// 	"beforeend",
				// 	// 	'<div class="delete"></div>'
				// 	// );
				// }
			},
			delFilmItem: () => {
				const delButtons = document.querySelectorAll(".delete");
				delButtons.forEach((btn, i) => {
					btn.addEventListener("click", () => {
						movieDB.movies.splice(i, 1);
						btn.parentElement.remove();
						movieDB.changePromoFilms();
					});
				});
			},
		},
		adBlocks = document.querySelectorAll(".promo__adv > img"),
		promoPoster = document.querySelector("div.promo__bg"),
		promoGanre = promoPoster.querySelector(".promo__genre"),
		promoListFilms = document.querySelectorAll(".promo__interactive-item"),
		promoListUl = document.querySelector(".promo__interactive-list"),
		imputAddMovie = document.querySelector(".adding__input"),
		addLikeFilm = document.querySelector(".add input[type=checkbox]");

	movieDB.removeAd();
	movieDB.changeGanre();
	movieDB.chengePromoImg();
	movieDB.addMovieFromInput();
	movieDB.changePromoFilms();
});

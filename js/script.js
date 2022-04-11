/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

"use strict";

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

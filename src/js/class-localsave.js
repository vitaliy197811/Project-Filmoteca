import { Paginations } from './class-pagination';

export class LocalSave extends Paginations {
  constructor() {
    super();
  }
  // ***************стартует всю логику *******************************************
  lokalStart = () => {
    this.start();
    this.getLocalThema(); //проверим сохраненную тему
    this.getLocalLanguage(); //проверяем на каком языке была вкладка
    this.getLocalInputText(); //проверим искал ли он кино или нет
    this.getLibraryTrue(); //проверяем был ли пользователь в библиотеке или на стартовой странице
    this.getArreyWatched(); //провеерим какие фильмы сохранены в просмотреных
    this.getArreyQueue(); //проверим какие фильмы сохранены в отложеных
    this.getLocalCurrentPage(); //проверяем страницу на которой находился пользователь
    if (this.libraryTrue) {
      //наконец стартуем
      this.paginationLibrarySave(this.libraryTrueBt); //проверяем в какой кнопке мы
    } else {
      this.paginationStart(this.searchQuery);
    }
  };
  // *********************запись данных в локалку********************************
  // Додаємо дані в локалку з інпуту
  setLocalInput = () => {
    localStorage.setItem('search-input-text', this.searchQuery);
  };
  // Додаємо дані в локалку з мови
  setLocalLanguage = () => {
    localStorage.setItem('language', this.curentLanguage);
  };
  //  Додаємо дані про тему в локалку
  setLocalThema = () => {
    localStorage.setItem('thema', JSON.stringify(this.refs.themaBt.hasAttribute('checked')));
  };
  // Записую в локалку дані про фільм перглянуті
  setFilmWached = () => {
    localStorage.setItem('wached-film', JSON.stringify(this.arrWatched));
  };
  // Записую в локалку дані про фільм додані в чергу
  setFilmQueue = () => {
    localStorage.setItem('queue-film', JSON.stringify(this.arrQueue));
  };
  // метод записывает где находиться пользователь. тру либо фолс - library
  setLibraryTrue = argument => {
    localStorage.setItem('is-library', JSON.stringify(argument));
    this.libraryTrue = argument;
  };
  setHeaderWatchedBtnTrue = argument => {
    this.libraryTrueBt = argument;
    localStorage.setItem('is-watched-btn', JSON.stringify(argument));
  };

  // *******************чтение локалки*********************************************
  getHeaderBtnTrue = () => {
    const WatchedBtnTrue = localStorage.getItem('is-watched-btn'); //проверим на какой кнопке был пользователь
    if (WatchedBtnTrue) {
      this.libraryTrueBt = JSON.parse(WatchedBtnTrue); // тру или фолс
      if (this.libraryTrueBt) {
        console.log('пагінація переглянуті');
        this.onWatchedClick();
        // ТУТ НЕ ЗНАЮ яку функцію додати щоб рендорилась та сама сторінка що і при кліку на кнопку
        // this.paginationLibrarySave(true);
      } else {
        console.log('пагінація додати до перегляду');
        // this.currentPage = 1;
        this.onQueueClick();
        // ТУТ НЕ ЗНАЮ яку функцію додати щоб рендорилась та сама сторінка що і при кліку на кнопку
        // this.paginationLibrarySave(false);
      }
    }
  };

  getArreyWatched = () => {
    const arreyWatched = localStorage.getItem('wached-film');
    if (arreyWatched) {
      this.arrWatched = JSON.parse(arreyWatched);
    }
  };
  getArreyQueue = () => {
    const arreyQueue = localStorage.getItem('queue-film');
    if (arreyQueue) {
      this.arrQueue = JSON.parse(arreyQueue);
    }
  };

  getLibraryTrue = () => {
    const libraryIsTrue = localStorage.getItem('is-library'); // проверим были ли мы в библиотеке
    if (libraryIsTrue) {
      this.libraryTrue = JSON.parse(libraryIsTrue);
      if (this.libraryTrue) {
        // тру или фалс
        this.getHeaderBtnTrue(); //запустим проверку выбраных библиотек только если мы были в библиотеке
        this.onLibraryClick(); // отрисуем страницу библиотеки
      }
    }
  };
  // Функція получаємо дані з локалки для інпуту
  getLocalInputText = () => {
    const inputText = localStorage.getItem('search-input-text');
    if (inputText) {
      this.refs.inputFilm.value = inputText;
      this.searchQuery = inputText;
      this.paginationStart(inputText);
    }
  };
  // Получаємо дані з локалки для мови
  getLocalLanguage = () => {
    const selectLanguage = localStorage.getItem('language');
    if (selectLanguage) {
      this.curentLanguage = selectLanguage;
      if (this.curentLanguage === 'en') {
        this.onEnClick();
      } else {
        this.onUaClick();
      }
    } else {
      this.onEnClick();
    }
  };

  // Получаємо дані з локалки для теми
  getLocalThema = () => {
    const selectThema = localStorage.getItem('thema');
    if (selectThema) {
      if (selectThema === 'true') this.onThemaClick();
    }
  };

  // дані для сторінки
  getLocalCurrentPage = () => {
    const currentPage = localStorage.getItem('currentPage');
    if (currentPage) {
      this.currentPage = JSON.parse(currentPage);
    }
  };
}

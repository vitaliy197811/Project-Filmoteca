export class Film {
  constructor() {
    this.film = '';
    this.films = [];
    this.libraryTrue = false; // проверим находиться ли позьзователь в библиотеке?
    this.libraryTrueBt = true; //проверим находился ли пользователь в просмотреных или в отложеных
    this.arrQueue = [];
    this.arrWatched = [];
    this.itemsPerPage = 20; //проверка количества страниц
    this.refs = {
      // это объект ссылок к DOM элементам сверстаным статически(не динамически)
      body: document.querySelector('.js-body'),
      upScroll: document.querySelector('#scrollup'),
      // *******************хедер************************
      inputFilm: document.querySelector('#inputname'),
      logo: document.querySelector('.js-logo'),
      homeBt: document.querySelector('.js-home'),
      libraryBt: document.querySelector('.js-library'),
      watchedBt: document.querySelector('.js-watched'),
      queueBt: document.querySelector('.js-queue'),
      blokLibrary: document.querySelector('.js-blok-library'),
      blokSearch: document.querySelector('.js-blok-search'),
      blokBtnHeader: document.querySelector('.js-blok-btnheader'),
      languageBt: document.querySelector('.js-language'),
      enBox: document.querySelector('.js-en'),
      uaBox: document.querySelector('.js-ua'),
      themaBt: document.querySelector('.js-thema'),
      textErrorSearch: document.querySelector('.js-error-search'),
      imgSon: document.querySelector('.js-son'),
      imgMoon: document.querySelector('.js-moon'),
      textThema: document.querySelector('.js-thema'),
      logoLang: document.querySelector('.js-logo-leng'),
      header: document.querySelector('.header'),
      notification: document.querySelector('.notification'),
      notificationText: document.querySelector('.notification-text'),
      //=======================pender*******************************
      //==================================
      // translate_footer
      footer: document.querySelector('.footer'),
      footerTextСopyrightOne: document.querySelector('.footer-text-one'),
      footerTextСopyrightTwo: document.querySelector('.footer-text-two'),
      footerTextСopyrightThree: document.querySelector('.footer-text-block'),
      footerTextСopyrightFour: document.querySelector('.footer__link'),

      headerWathedBtn: document.querySelector('.js-watched-header'),
      headerQueueBtn: document.querySelector('.js-queue-header'),
      genres: document.querySelector('.film-card__film-item'),
      // ======================= посилання на статичні елементи модалки
      voteTitle: document.querySelector('.js-vote'),
      popularityTitle: document.querySelector('.js-popularity'),
      originalTitle: document.querySelector('.js-title'),
      genreTitle: document.querySelector('.js-genre'),
      aboutTitle: document.querySelector('.js-about'),

      // logo: document.querySelector('.js-logo'),
      //===================рендер-модалка
      renderBox: document.querySelector('#render'),
      modalWatchedBt: document.querySelector('.js-watched-modal'),
      modalQueueBt: document.querySelector('.js-queue-modal'),
      backdropCardFilm: document.querySelector('#backdropFilmCard'),
      youtubeImg: document.querySelector('.youtube-img'),
      // модалка з одним фільмом
      aboutApi: document.querySelector('.js-about__api'),
      aboutLang: document.querySelector('.js-about__leng'),
      // контейнер для пагинации
      containerPagination: document.querySelector('#tui-pagination-container'),
      prewiuModalka: document.querySelector('.js-prewiu-img'),
      closeModalInfoBtn: document.querySelector('.js-close-modal-info'),

      // ========= поля для заміни на модалці фільму ========
      modalImage: document.querySelector('.js-current-film-poster'),
      modalRate: document.querySelector('.js-current-film-rate'),
      modalVotes: document.querySelector('.js-current-film-votes'),
      modalName: document.querySelector('.js-current-film-name'),
      modalPopularity: document.querySelector('.js-current-film-popul'),
      modalTitle: document.querySelector('.js-current-film-title'),
      modalGanre: document.querySelector('.js-current-film-ganre'),
      backgroundModalThema: document.querySelector('.js-modal-film__full-info'),

      //***************** модалка для трейлера********************
      bakgroundVideo: document.querySelector('.js-modal-youtube__box'),
      modalVideo: document.querySelector('.js-modal-youtube__frame'),
      closeModalYoutubeBtn: document.querySelector('.js-close-modal-treiler'),
      backdropVideo: document.querySelector('.js-modal-youtube__backdrop'),

      // prew: document.querySelector('.js-prewiu-img'),
      // *******************подвал и модалка с командой************
      ourTeam: document.querySelector('.js-our-team'),
      backdropFooter: document.querySelector('#js-backdrop-footer'),
      closeFooterBt: document.querySelector('.js-close-footer'),
      bakgroundFooter: document.querySelector('.js-footer-bakground'),
      bakgroundComandCard: document.querySelectorAll('.comand__card'),

      // ******************* Загрузчик ************
      loader: document.querySelector('.spin-wrapper'),
    };
  }
  // проверочный метод который я запустил в самом индексе сквозь все классы чтоб убедиться что все настроено
  start() {
    console.log('start film!');
  }
  getRefs = () => {
    return this.refs;
  };
}

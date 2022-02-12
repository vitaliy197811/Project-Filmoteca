import { Render } from './class-render';
import Pagination from 'tui-pagination';

export class Paginations extends Render {
  constructor() {
    super();
  }

  // этот метод для отрисовки нашей библиотеки
  paginationLibrarySave = argumentWatch => {
    // console.log(argumentWatch);
    if (argumentWatch === true) {
      this.totalPages = this.arrWatched.length;
    } else {
      this.totalPages = this.arrQueue.length;
    }
    if (this.totalPages < 10) {
      this.refs.containerPagination.classList.add('visually-hidden');
      this.currentPage = 1;
      // this.currentPage = 1;
    } else if (this.totalPages >= 10) {
      this.refs.containerPagination.classList.remove('visually-hidden');
    }

    this.itemsPerPage = 9;

    this.buildPagination();
    this.renderFilmsCardById(argumentWatch);
  };

  // этот метод для отрисовки домашней странички
  paginationStart = async isSerch => {
    try {
      let respons = null;
      if (isSerch) {
        respons = await this.fetchSearchFilms();
      } else {
        respons = await this.fetchPopularFilms();
      }

      if (this.totalPages < 20) {
        this.refs.containerPagination.classList.add('visually-hidden');
      }
      if (this.totalPages > 20) {
        this.refs.containerPagination.classList.remove('visually-hidden');
      }
      this.renderFilmsCardMarkup(respons);
      this.itemsPerPage = 20;
      this.buildPagination();
    } catch (error) {
      alert('Sorry, something went wrong');
    }
  };

  // ************это просто фреймворк***********
  buildPagination = async () => {
    const optionPagin = {
      totalItems: this.totalPages,
      itemsPerPage: this.itemsPerPage,
      visiblePages: 5,
      page: this.currentPage,
      centerAlign: true,
      firstItemClassName: 'tui-first-child',
      lastItemClassName: 'tui-last-child',
      template: {
        page: '<a href="#" class="tui-page-btn">{{page}}</a>',
        currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
        moveButton:
          '<a href="#" class="tui-page-btn tui-{{type}}">' +
          '<span class="tui-ico-{{type}}">{{type}}</span>' +
          '</a>',
        disabledMoveButton:
          '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
          '<span class="tui-ico-{{type}}">{{type}}</span>' +
          '</span>',
        moreButton:
          '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
          '<span class="tui-ico-ellip">...</span>' +
          '</a>',
      },
    };

    this.pagination = new Pagination(this.refs.containerPagination, optionPagin);

    this.pagination.on('afterMove', async evt => {
      this.currentPage = evt.page;
      // console.log(this.currentPage);
      this.setCurrentPage();
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });

      if (this.libraryTrue === true) {
        this.paginationLibrarySave(this.libraryTrueBt);
      } else if (this.searchQuery == null) {
        this.paginationStart(false);
      } else {
        this.paginationStart(true);
      }
    });
  };
  // Зберігаєм в локалку вибрану сторінку
  setCurrentPage = () => {
    localStorage.setItem('currentPage', JSON.stringify(this.currentPage));
  };
}

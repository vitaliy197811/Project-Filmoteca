import { Thema } from './class-thems';

export class Fetch extends Thema {
  constructor() {
    super();
    this.BASE_URL = 'https://api.themoviedb.org/3/';
    this.API_KEY = 'c4ff5df06d9c3bc212d0ff99e5222626';
    // this.BASE_IMG_URL = 'https://image.tmdb.org/t/p/w300';
    this.BASE_IMG_URL = 'https://image.tmdb.org/t/p/w440_and_h660_face';
    this.currentPage = 1;
    this.searchQuery = null; // это поисковое слово
    this.adult = false;
    this.totalPages = 1;
    this.ganresList = '';
  }

  //films for first page
  async fetchPopularFilms() {
    const parametrs = {
      api_key: this.API_KEY,
      page: this.currentPage,
      language: this.curentLanguage,
      adult: this.adult,
    };
    const meta = new URLSearchParams(parametrs);

    this.loaderShow();
    const results = await fetch(`${this.BASE_URL}trending/movie/week?${meta}`);
    const data = await results.json();
    this.loaderHide();

    this.totalPages = data.total_results;
    return data.results;
  }

  // get genres list
  async fetchGenresList() {
    const parametrs = {
      api_key: this.API_KEY,
      language: this.curentLanguage,
    };

    const meta = new URLSearchParams(parametrs);

    this.loaderShow();
    const results = await fetch(`${this.BASE_URL}genre/movie/list?${meta}`);
    const data = await results.json();
    this.loaderHide();

    this.ganresList = data.genres;
    // console.log(this.ganresList);
    return data.genres;
  }

  //films search by name
  async fetchSearchFilms() {
    const parametrs = {
      api_key: this.API_KEY,
      page: this.currentPage,
      language: this.curentLanguage,
      query: this.searchQuery,
      include_adult: this.adult,
    };
    const meta = new URLSearchParams(parametrs);

    this.loaderShow();
    const results = await fetch(`${this.BASE_URL}search/movie?${meta}`);
    const data = await results.json();
    this.loaderHide();

    this.totalPages = data.total_results;

    return data.results;
  }

  //Info about film and video
  async fetchFilmsInfo(id) {
    const parametrs = {
      api_key: this.API_KEY,
      language: this.curentLanguage,
    };
    const meta = new URLSearchParams(parametrs);

    this.loaderShow();
    const result = await fetch(`${this.BASE_URL}/movie/${id}?${meta}&append_to_response=videos`);
    const data = await result.json();
    this.loaderHide();

    return data;
  }

  getTotalPages = () => {
    return this.totalPages;
  };

  loaderShow = () => {
    this.refs.loader.classList.remove('visually-hidden');
  };
  loaderHide = () => {
    this.refs.loader.classList.add('visually-hidden');
  };
}

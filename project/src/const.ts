export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOW',
}

export enum AppRoute {
  Login = '/login',
  MyList = '/mylist',
  FilmsList = '/films',
  AddReview = '/review',
  Player = '/player',
  FilmDetails = 'filmsDetails',
  FilmReviews = 'filmsReviews',
  NotFoundPage = 'notFoundPage',
}

export enum FilmCardInfo {
  Overview = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews'
}

export enum APIRoute {
  Films = '/films',
  Comments = '/comments',
  Login = '/login',
}

export enum NameSpace {
  FilmList = 'filmList',
  FilmCard = 'filmCard',
  PageInfo = 'dataPage'
}

export function makeFilmRatingDescription(rating: number): string {
  if (rating >= 0 && rating < 3) {
    return 'Bad';
  } else if (rating >= 3 && rating < 5) {
    return 'Normal';
  } else if (rating >= 5 && rating < 8) {
    return 'Good';
  } else if (rating >= 8 && rating < 10) {
    return 'Very good';
  } else if (rating === 10) {
    return 'Awesome';
  } else {
    return 'our scale can\'t decide if he\'s great or incredibly terrible';
  }
}

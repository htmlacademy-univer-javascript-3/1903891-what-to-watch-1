import {Film} from '../types/film';
import Grindelwald from '../img/fantastic-beasts-the-crimes-of-grindelwald.jpg';
import HotelPoster from '../img/the-grand-budapest-hotel-poster.jpg';
import Hotel from '../img/bg-the-grand-budapest-hotel.jpg';

export const films: Film[] = [
  {
    id: 1,
    backgroundImage: `${Hotel}`,
    backgroundColor: '#ffffff',
    rating: 8.9,
    scoresCount: 240,
    runTime: 99,
    'isFavorite': false,
    filmCardInfo: {
      name: 'The Grand Budapest Hotel',
      posterImage: `${HotelPoster}`,
      previewImage: `${Hotel}`,
      videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
      previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
      description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.',
      director: 'Wes Anderson',
      starring: [
        'Bill Murray'
      ],
      genre: 'Comedy',
      released: 2014
    },
  },
  {
    id: 2,
    backgroundImage: `${Hotel}`,
    backgroundColor: '#ffffff',
    rating: 9,
    scoresCount: 242,
    runTime: 9,
    'isFavorite': false,
    filmCardInfo: {
      name: 'Budapest Hotel',
      posterImage: `${Grindelwald}`,
      previewImage: `${Grindelwald}`,
      videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
      previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
      description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.',
      director: 'Wes',
      starring: [
        'Bill Murray'
      ],
      genre: 'Comedy',
      released: 2014
    },
  },
  {
    id: 3,
    backgroundImage: `${Hotel}`,
    backgroundColor: '#ffffff',
    rating: 8.9,
    scoresCount: 240,
    runTime: 99,
    isFavorite: true,
    filmCardInfo: {
      name: 'Hotel',
      posterImage: `${HotelPoster}`,
      previewImage: `${Hotel}`,
      videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
      previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
      description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.',
      director: 'Wes Anderson',
      starring: [
        'Bill Murray'
      ],
      genre: 'Drama',
      released: 2002
    },
  },
  {
    id: 4,
    backgroundImage: `${Hotel}`,
    backgroundColor: '#ffffff',
    rating: 8,
    scoresCount: 240,
    runTime: 99,
    'isFavorite': false,
    filmCardInfo: {
      name: 'Budapest',
      posterImage: `${HotelPoster}`,
      previewImage: `${Hotel}`,
      videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
      previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
      description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.',
      director: 'Wes',
      starring: [
        'Murray'
      ],
      genre: 'Comedy',
      released: 2004
    },
  },
];

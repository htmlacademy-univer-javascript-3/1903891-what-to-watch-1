import {Film} from '../types/film';
import Grindelwald from '../img/fantastic-beasts-the-crimes-of-grindelwald.jpg';
import HotelPoster from '../img/the-grand-budapest-hotel-poster.jpg';
import Hotel from '../img/bg-the-grand-budapest-hotel.jpg';
import Macbeth from '../img/macbeth.jpg';

export const FILMS: Film[] = [
  {
    id: 1,
    backgroundImage: `${Hotel}`,
    backgroundColor: '#ffffff',
    rating: 8.9,
    scoresCount: 240,
    runTime: 99,
    isFavorite: false,
    filmCardInfo: {
      name: 'The Grand Budapest Hotel',
      posterImage: `${HotelPoster}`,
      previewImage: `${Hotel}`,
      videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
      previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
      description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.',
      director: 'Wes Anderson',
      starring: [
        'Bill Murray',
        'Edward Norton'
      ],
      genre: 'Comedy',
      released: 2014
    },
  },
  {
    id: 2,
    backgroundImage: `${Hotel}`,
    backgroundColor: '#ffffff',
    rating: 1,
    scoresCount: 242,
    runTime: 9,
    'isFavorite': true,
    filmCardInfo: {
      name: 'Budapest Hotel',
      posterImage: `${Grindelwald}`,
      previewImage: `${Grindelwald}`,
      videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
      previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
      description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.',
      director: 'Wes',
      starring: [
        'Bill Murray',
        'Willem Dafoe',
        'Saoirse Ronan'
      ],
      genre: 'Comedy',
      released: 1915
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
      genre: 'Roman',
      released: 2004
    },
  },
  {
    id: 5,
    backgroundImage: `${Hotel}`,
    backgroundColor: '#ffffff',
    rating: 8.9,
    scoresCount: 240,
    runTime: 99,
    isFavorite: false,
    filmCardInfo: {
      name: 'The Grand Budapest Hotel',
      posterImage: `${Macbeth}`,
      previewImage: `${Macbeth}`,
      videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
      previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
      description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.',
      director: 'Wes Anderson',
      starring: [
        'Bill Murray',
        'Edward Norton'
      ],
      genre: 'Comedy',
      released: 2014
    },
  },
  {
    id: 6,
    backgroundImage: `${Hotel}`,
    backgroundColor: '#ffffff',
    rating: 1,
    scoresCount: 242,
    runTime: 9,
    'isFavorite': true,
    filmCardInfo: {
      name: 'Budapest Hotel',
      posterImage: `${Grindelwald}`,
      previewImage: `${Grindelwald}`,
      videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
      previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
      description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.',
      director: 'Wes',
      starring: [
        'Bill Murray',
        'Willem Dafoe',
        'Saoirse Ronan'
      ],
      genre: 'Comedy',
      released: 1915
    },
  },
  {
    id: 7,
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
    id: 8,
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
      genre: 'Roman',
      released: 2004
    },
  },
  {
    id: 9,
    backgroundImage: `${Hotel}`,
    backgroundColor: '#ffffff',
    rating: 8.9,
    scoresCount: 240,
    runTime: 99,
    isFavorite: false,
    filmCardInfo: {
      name: 'The Grand Budapest Hotel',
      posterImage: `${HotelPoster}`,
      previewImage: `${Hotel}`,
      videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
      previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
      description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.',
      director: 'Wes Anderson',
      starring: [
        'Bill Murray',
        'Edward Norton'
      ],
      genre: 'Comedy',
      released: 2014
    },
  },
  {
    id: 10,
    backgroundImage: `${Hotel}`,
    backgroundColor: '#ffffff',
    rating: 1,
    scoresCount: 242,
    runTime: 9,
    'isFavorite': true,
    filmCardInfo: {
      name: 'Budapest Hotel',
      posterImage: `${Grindelwald}`,
      previewImage: `${Grindelwald}`,
      videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
      previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
      description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.',
      director: 'Wes',
      starring: [
        'Bill Murray',
        'Willem Dafoe',
        'Saoirse Ronan'
      ],
      genre: 'Comedy',
      released: 1915
    },
  },
  {
    id: 11,
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
    id: 12,
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
      genre: 'Roman',
      released: 2004
    },
  },
  {
    id: 13,
    backgroundImage: `${Hotel}`,
    backgroundColor: '#ffffff',
    rating: 8.9,
    scoresCount: 240,
    runTime: 99,
    isFavorite: false,
    filmCardInfo: {
      name: 'The Grand Budapest Hotel',
      posterImage: `${HotelPoster}`,
      previewImage: `${Hotel}`,
      videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
      previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
      description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.',
      director: 'Wes Anderson',
      starring: [
        'Bill Murray',
        'Edward Norton'
      ],
      genre: 'Comedy',
      released: 2014
    },
  },
  {
    id: 14,
    backgroundImage: `${Hotel}`,
    backgroundColor: '#ffffff',
    rating: 1,
    scoresCount: 242,
    runTime: 9,
    'isFavorite': true,
    filmCardInfo: {
      name: 'Budapest Hotel',
      posterImage: `${Grindelwald}`,
      previewImage: `${Grindelwald}`,
      videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
      previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
      description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.',
      director: 'Wes',
      starring: [
        'Bill Murray',
        'Willem Dafoe',
        'Saoirse Ronan'
      ],
      genre: 'Comedy',
      released: 1915
    },
  },
  {
    id: 15,
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
    id: 116,
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
      genre: 'Roman',
      released: 2004
    },
  },
  {
    id: 16,
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
      genre: 'Roman',
      released: 2004
    },
  },
];

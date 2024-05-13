import { Offer } from './mock/offer';

const CITIES = ['Amsterdam', 'Paris', 'London', 'Stockholm', 'Warsaw', 'Berlin', 'Athens'];
const POINT_TYPES = ['taxi', 'flight', 'bus', 'train', 'ship', 'drive', 'check-in', 'sightseeing', 'restaurant'];
const DESCRIPTION = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra.';

const OFFERS = new Map([
  ['taxi', [new Offer('Order Uber', 40), new Offer('Switch to comfort', 35), new Offer('Trip with a dog', 55), new Offer('Drive fast', 60), new Offer('Text communication only', 10), new Offer('Add luggage', 90)]],
  ['bus', [new Offer('Trip with a cat', 45), new Offer('Book tickets', 30), new Offer('Add luggage', 85), new Offer('Reclining seat', 55)]],
  ['train', [new Offer('Book tickets', 40), new Offer('Add luggage', 75), new Offer('Reclining seat', 80)]],
  ['ship', [new Offer('Trip with a pet', 100), new Offer('Add big luggage', 105), new Offer('Book tickets', 60), new Offer('Sleeping place', 150), new Offer('Add breakfast', 120)]],
  ['drive', [new Offer('Rent a car', 100), new Offer('Trip with a pet', 80), new Offer('Add luggage', 40)]],
  ['flight', [new Offer('Reclining seat', 200), new Offer('Add breakfast', 190), new Offer('Add luggage', 105), new Offer('Flight with a pet', 120)]],
  ['check-in', [new Offer('Book tickets', 45), new Offer('Add luggage', 75), new Offer('Add breakfast', 110)]],
  ['sightseeing', [new Offer('Lunch in city', 150), new Offer('Choose a speaker', 200), new Offer('To see a secret place', 120)]],
  ['restaurant', [new Offer('Table for two', 105), new Offer('Book a table', 55), new Offer('Italian cuisine', 35), new Offer('Japanese cuisine', 65)]],
]);

const PRICE = {
  MIN: 1,
  MAX: 1000
};

const QUANTITIES = {
  offersCount: 5,
  destinationsCount: 5,
  pointsCount: 5
};

const POINT_EMPTY = {
  basePrice: 0,
  dateFrom: null,
  dateTo: null,
  destination: null,
  isFavorite: false,
  offers: [],
  type: 'flight'
};

const MODE = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING',
};

const SORT_TYPE = {
  DAY: 'day',
  EVENT: 'event',
  TIME: 'time',
  PRICE: 'price',
  OFFERS: 'offers'
};

export { CITIES, POINT_TYPES as TYPES, DESCRIPTION, PRICE, POINT_EMPTY, QUANTITIES, MODE, SORT_TYPE, OFFERS };

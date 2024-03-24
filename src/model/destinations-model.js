import { getRandomArrayElement } from '../utils';

export default class DestinationsModel {
  constructor(service) {
    this.service = service;
    this.destinations = this.service.getDestinations();
  }

  get() {
    return this.destinations;
  }

  getById(id) {
    return this.destinations.find((destination) => destination.id === id);
  }

  getRandomDestination() {
    return getRandomArrayElement(this.destinations);
  }
}

import { Injectable } from '@angular/core';

@Injectable()
export class GeolocationService {
  options = {
    enableHighAccuracy: true,
    timeout: 20000,
    maximumAge: 0
  };
  constructor() { }
  getLocation() {
    if (navigator.geolocation) {
      return navigator.geolocation.getCurrentPosition(
         this.callbackPosition, this.noGeolocation, this.options);
    } else {
      alert('no geolocation');
    }
  }
  callbackPosition(position: Position) {
    alert(`latitudide ${position.coords.latitude} longitudine ${position.coords.longitude}`);
  }
  noGeolocation(error: PositionError) {
    alert(error.message);
  }
}

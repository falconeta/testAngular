import { Injectable } from '@angular/core';
import { Element } from '../models/element';
@Injectable()
export class ElementService {
  elemento: Element;
  incrementa = 30;
  constructor() {
    this.elemento = new Element();
    this.elemento.image = new Image;
    this.elemento.image.src = './../../assets/mario-sprite.bmp';
    this.elemento.id = 0;
    this.elemento.x = 0;
    this.elemento.y = 0;
  }
  incrementaX() {
    this.elemento.x += this.incrementa;
  }
  incrementaY() {
    this.elemento.y += this.incrementa;
  }
  decrementaY() {
    this.elemento.y -= this.incrementa;
  }
  decrementaX() {
    this.elemento.x -= this.incrementa;
  }
}

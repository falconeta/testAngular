import { Component, ViewChild, ElementRef, AfterViewInit, Input, HostListener } from '@angular/core';
import { ElementService } from '../services/element.service';
import { Element } from '../models/element';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements AfterViewInit {
  @ViewChild('canvas') public canvas: ElementRef;
  ngCanvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  ctx2: CanvasRenderingContext2D;
  disable = true;
  mario: Element;
  constructor(private elemento: ElementService) {
  }

  ngAfterViewInit() {
    this.mario = this.elemento.elemento;
    this.ngCanvas = this.canvas.nativeElement;
    this.ctx = this.ngCanvas.getContext('2d');
    this.ctx2 = this.ngCanvas.getContext('2d');
  }
  createElement() {
    this.ctx.drawImage(this.mario.image, this.mario.x, this.mario.y);
    this.disable = false;
  }
  moveLeft() {
    this.ctx.clearRect(this.mario.x, this.mario.y, this.mario.image.width, this.mario.image.height);
    this.mario.x !== 0 ? this.elemento.decrementaX() : this.mario.x = 0;
    this.ctx.drawImage(this.mario.image, this.mario.x, this.mario.y);
  }
  moveRight() {
    this.ctx.clearRect(this.mario.x, this.mario.y, this.mario.image.width, this.mario.image.height);
    this.mario.x !== this.ngCanvas.width - this.mario.image.width ?
    this.elemento.incrementaX() : this.mario.x = this.ngCanvas.width - this.mario.image.width;
    this.ctx.drawImage(this.mario.image, this.mario.x, this.mario.y);
  }
  moveUp() {
    this.ctx.clearRect(this.mario.x, this.mario.y, this.mario.image.width, this.mario.image.height);
    this.mario.y !== 0 ? this.elemento.decrementaY() : this.mario.y = 0;
    this.ctx.drawImage(this.mario.image, this.mario.x, this.mario.y);
  }
  moveDown() {
    this.ctx.clearRect(this.mario.x, this.mario.y, this.mario.image.width, this.mario.image.height);
    this.mario.y !== this.ngCanvas.height - this.mario.image.width ?
    this.elemento.incrementaY() : this.mario.y = this.ngCanvas.height - this.mario.image.width;
    this.ctx.drawImage(this.mario.image, this.mario.x, this.mario.y);
  }
  spara() {
    // this.ctx2.fillRect(this.mario.x + this.mario.image.width, this.mario.y + this.mario.image.height / 2, 10, 10);
    let i = this.mario.x + this.mario.image.width;
    const cursor = setInterval(() => {
      if (i < this.ngCanvas.width) {
        this.ctx2.clearRect(i, this.mario.y, 10, 10);
        i++;
        this.ctx2.fillRect(i, this.mario.y, 10, 10);
      } else {
        clearInterval(cursor);
      }
    }, 1);
  }
  // evento getione spostamento con tastiera
  @HostListener('document:keyup', ['$event'])
  onKeyUp(ev: KeyboardEvent) {
    switch (ev.key) {
      case 'd':
      this.moveRight();
      break;
      case 'a':
      this.moveLeft();
      break;
      case 'w':
      this.moveUp();
      break;
      case 's':
      this.moveDown();
      break;
      case ' ':
      this.spara();
      break;
    }
  }
}

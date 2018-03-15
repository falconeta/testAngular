import { Component, ViewChild, OnInit, ElementRef, AfterViewInit, Input, HostListener } from '@angular/core';
import { ElementService } from '../services/element.service';
import { Element } from '../models/element';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  @ViewChild('canvas') public canvas: ElementRef;
  ngCanvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  disable = true;
  mario: Element;
  constructor(private elemento: ElementService) {
  }

  ngOnInit() {
    this.mario = this.elemento.elemento;
    this.ngCanvas = this.canvas.nativeElement;
    this.ctx = this.ngCanvas.getContext('2d');
    // this.ctx.drawImage(this.mario.image, 30, 0, 20, 20, this.mario.x, this.mario.y, 20, 20);
  }
  createElement() {
    this.ctx.drawImage(this.mario.image, 209, 0, 30, 30, this.mario.x, this.mario.y, 30, 30);
    this.disable = false;
  }
  moveLeft() {
    this.ctx.clearRect(this.mario.x, this.mario.y, this.mario.image.width, this.mario.image.height);
    this.mario.x !== 0 ? this.elemento.decrementaX() : this.mario.x = 0;
    this.ctx.drawImage(this.mario.image, 209, 0, 30, 30, this.mario.x, this.mario.y, 30, 30);
    console.log(this.mario.x);
  }
  moveRight() {
    this.ctx.clearRect(this.mario.x, this.mario.y, this.mario.image.width, this.mario.image.height);
    if (this.mario.x < this.ngCanvas.width - 30) {this.elemento.incrementaX(); }
    this.ctx.drawImage(this.mario.image, 209, 0, 30, 30, this.mario.x, this.mario.y, 30, 30);
    console.log(this.mario.x);
  }
  moveUp() {
    this.ctx.clearRect(this.mario.x, this.mario.y, this.mario.image.width, this.mario.image.height);
    this.mario.y !== 0 ? this.elemento.decrementaY() : this.mario.y = 0;
    this.ctx.drawImage(this.mario.image, 209, 0, 30, 30, this.mario.x, this.mario.y, 30, 30);
  }
  moveDown() {
    this.ctx.clearRect(this.mario.x, this.mario.y, this.mario.image.width, this.mario.image.height);
    if (this.mario.y < this.ngCanvas.height - 30) {this.elemento.incrementaY(); }
    this.ctx.drawImage(this.mario.image, 209, 0, 30, 30, this.mario.x, this.mario.y, 30, 30);
    console.log(this.mario.y);
  }
  spara() {
    let x = this.mario.x + 20;
    const y = this.mario.y + 10;
    const cursor = setInterval(() => {
      if (x < this.ngCanvas.width) {
        this.ctx.clearRect(x, y, 10, 10);
        x++;
        this.ctx.fillRect(x, y, 5, 3);
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
      case 'p':
      this.spara();
      break;
    }
  }
}

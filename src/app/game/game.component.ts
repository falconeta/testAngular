import { Component, ViewChild, ElementRef, AfterViewInit, Input } from '@angular/core';
import { ElementService } from '../services/element.service';
import { Element } from '../models/element';

@Component({
  selector: 'app-game',
  // tslint:disable-next-line:max-line-length
  // template: '<canvas #canvas></canvas> <button #button routerLink="">indietro</button> ',
  templateUrl: './game.component.html',
  styles: ['canvas { border: 1px solid #000; }']
})
export class GameComponent implements AfterViewInit {
  @ViewChild('canvas') public canvas: ElementRef;
  @Input() public width = 500;
  @Input() public height = 500;
  ngCanvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  disable = true;
  mario: Element;
  constructor(private elemento: ElementService) {
  }

  ngAfterViewInit() {
    this.mario = this.elemento.elemento;
    this.ngCanvas = this.canvas.nativeElement;
    this.ngCanvas.width = this.width;
    this.ngCanvas.height = this.height;
    this.ctx = this.ngCanvas.getContext('2d');
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
    this.mario.x !== this.width - this.mario.image.width ? this.elemento.incrementaX() : this.mario.x = this.width - this.mario.image.width;
    this.ctx.drawImage(this.mario.image, this.mario.x, this.mario.y);
  }
  moveUp() {
    this.ctx.clearRect(this.mario.x, this.mario.y, this.mario.image.width, this.mario.image.height);
    this.mario.y !== 0 ? this.elemento.decrementaY() : this.mario.y = 0;
    this.ctx.drawImage(this.mario.image, this.mario.x, this.mario.y);
  }
  moveDown() {
    this.ctx.clearRect(this.mario.x, this.mario.y, this.mario.image.width, this.mario.image.height);
    this.mario.y !== this.height - this.mario.image.width ?
    this.elemento.incrementaY() : this.mario.y = this.height - this.mario.image.width;
    this.ctx.drawImage(this.mario.image, this.mario.x, this.mario.y);
  }

}

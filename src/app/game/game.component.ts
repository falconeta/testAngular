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
  x = this.width / 2;
  y = this.height / 2;
  image: HTMLImageElement = new Image();
  constructor(private elemento: ElementService) {
  }

  ngAfterViewInit() {
    this.mario = this.elemento.elemento;
    this.ngCanvas = this.canvas.nativeElement;
    this.ngCanvas.width = this.width;
    this.ngCanvas.height = this.height;
    this.ctx = this.ngCanvas.getContext('2d');
    this.image.src = './../../assets/mario.bmp';
  }

  createElement() {
    this.ctx.drawImage(this.image, this.x, this.y);
    alert(this.image.width);
    this.disable = false;
  }
  moveLeft() {
    this.ctx.clearRect(this.x, this.y, this.image.width, this.image.height);
    this.x !== 0 ? this.x -= 50 : this.x = 0;
    this.ctx.drawImage(this.image, this.x, this.y);
  }
  moveRight() {
    this.ctx.clearRect(this.x, this.y, this.image.width, this.image.height);
    this.x !== this.width - this.image.width ? this.x += 50 : this.x = this.width - this.image.width;
    this.ctx.drawImage(this.image, this.x, this.y);
  }
  moveUp() {
    this.ctx.clearRect(this.x, this.y, this.image.width, this.image.height);
    this.y !== 0 ? this.y += - this.image.width : this.y = 0;
    this.ctx.drawImage(this.image, this.x, this.y);
  }
  moveDown() {
    this.ctx.clearRect(this.x, this.y, this.image.width, this.image.height);
    this.y !== this.height - this.image.width ? this.y += 50 : this.y = this.height - this.image.width;
    this.ctx.drawImage(this.image, this.x, this.y);
  }

}

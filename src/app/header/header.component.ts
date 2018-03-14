import { Component, OnInit } from '@angular/core';
import { ReadWriteService } from '../services/read-write.service';
import { Modello } from '../models/modello';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // nome = 'Ciao!';
  // numero = 0;
  // attivaDisattiva = true;
  modello: Modello;
  array: string[];
  cursor;
  constructor(private servizioModello: ReadWriteService) {
    this.array = ['pippo', 'pluto', 'topolino', 'cane', 'gatto']; }
  ngOnInit() {
    this.modello = this.servizioModello.getModello();
    this.cursor = setInterval(() => {
      this.modello.numero === 10 ? clearInterval(this.cursor) : this.modello.numero++;
    }, 1000);
  }
  modificaBoolean() {
    this.modello.veroFalso ? this.modello.veroFalso = false : this.modello.veroFalso = true;
  }
}

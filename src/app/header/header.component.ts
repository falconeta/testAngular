import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  nome = 'Ciao!';
  numero = 0;
  attivaDisattiva = true;
  array: string[];
  cursor;
  constructor() {
    this.array = ['pippo', 'pluto', 'topolino', 'cane', 'gatto']; }
  ngOnInit() {
    this.cursor = setInterval(() => {
      this.numero === 10 ? clearInterval(this.cursor) : this.numero++;
    }, 1000);
  }
  modificaBoolean() {
    this.attivaDisattiva ? this.attivaDisattiva = false : this.attivaDisattiva = true;
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  nome = 'ciao';
  numero = 10;
  attivaDisattiva = true;
  array: string[];
  constructor() {
    this.array = ['pippo', 'pluto', 'topolino', 'cane', 'gatto']; }
  ngOnInit() {
  }
  modificaBoolean() {
    this.attivaDisattiva ? this.attivaDisattiva = false : this.attivaDisattiva = true;
  }
}

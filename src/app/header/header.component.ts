import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ReadWriteService } from '../services/read-write.service';
import { Modello } from '../models/modello';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  modello: Modello;
 @Output() exportModel = new EventEmitter<Modello>();
  array: string[];
  cursor;
  constructor(private servizioModello: ReadWriteService) {
    this.array = ['pippo', 'pluto', 'topolino', 'cane', 'gatto']; }
  ngOnInit() {
    this.servizioModello.getModello().subscribe(modello => {
      this.modello = modello;
      this.exportModel.emit(this.modello); // emette output
      this.cursor = setInterval(() => {
        this.modello.numero === 10 ? clearInterval(this.cursor) : this.modello.numero++;
      }, 1000);
    });
  }
  modificaBoolean() {
    this.modello.veroFalso ? this.modello.veroFalso = false : this.modello.veroFalso = true;
  }
}

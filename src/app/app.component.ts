import { Component } from '@angular/core';
import { Modello } from './models/modello';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  modelloArrivato: Modello;
  esporta(modello: Modello) {
    this.modelloArrivato = modello;
  }
}

import { Injectable } from '@angular/core';
import { Modello } from '../models/modello';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ReadWriteService {
   modello: Modello = new Modello();
  constructor() {
    this.modello.id = 1;
    this.modello.nome = 'Mario';
    this.modello.numeroPost = 0;
    this.modello.veroFalso = false;
   }
   setModello(id: number, nome: string, numero: number, valore: boolean): void {
    this.modello.id = id;
    this.modello.nome = nome;
    this.modello.numeroPost = numero;
    this.modello.veroFalso = valore;
   }
   getModello(): Observable<Modello> {
    return of(this.modello);
   }
}

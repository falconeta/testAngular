import { Injectable } from '@angular/core';
import { Modello } from '../models/modello';

@Injectable()
export class ReadWriteService {
  private modello: Modello;
  constructor() {
    this.modello.nome = '';
    this.modello.numero = 0;
    this.modello.veroFalso = false;
   }
   setModello(nome: string, numero: number, valore: boolean): void {
    this.modello.nome = nome;
    this.modello.numero = numero;
    this.modello.veroFalso = valore;
   }
   getModello(): Modello {
    return this.modello;
   }
}

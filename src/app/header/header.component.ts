import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ReadWriteService } from '../services/read-write.service';
import { Modello } from '../models/modello';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  modello: Modello;
 @Output() exportModel = new EventEmitter<Modello>();
  array: string[];
  messages: string[];
  constructor(private messaggi: MessageService, private servizioModello: ReadWriteService) {
    this.array = ['pippo', 'pluto', 'topolino', 'cane', 'gatto']; }
  ngOnInit() {
    this.messaggi.addMessage(`sono nell'onInit di Header`);
    this.messages = this.messaggi.getMessage();
    this.servizioModello.getModello().subscribe(modello => {
      this.modello = modello;
      this.exportModel.emit(this.modello); // emette output
    });
  }
  modificaBoolean() {
    this.modello.veroFalso ? this.modello.veroFalso = false : this.modello.veroFalso = true;
  }
}

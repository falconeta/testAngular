import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Modello } from '../models/modello';
import { MessageService } from '../services/message.service';
import { ReadWriteService } from '../services/read-write.service';
import { AggiungiAggregatoService } from '../services/aggiungi-aggregato.service';
import { Aggregato } from '../models/aggregato';
import { Post } from '../models/post';
import { RequestService } from '../services/request.service';
declare const $: any;
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  // @Input() model: Modello;
  messages: string[];
  model: Modello;
  aggreggato: Aggregato = new Aggregato();
  constructor(private request: RequestService,
    private servizioAggregato: AggiungiAggregatoService,
    private modello: ReadWriteService, private messaggi: MessageService) {
     }

  ngOnInit() {
    this.messages = this.messaggi.getMessage();
    this.modello.getModello().subscribe(modello => this.model = modello);
    this.servizioAggregato.addAggregato(this.model.id);
    this.aggreggato = this.servizioAggregato.getAggregato();
    // console.log(this.aggreggato);
  }
  visualizzaPost() {
    // console.log('sono in visualizzaPost');
    $('#MiaModale').modal();
  }
  faiQualcosa() {
    alert('ciao');
  }
}

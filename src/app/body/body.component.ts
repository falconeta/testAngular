import { Component, OnInit, Input, Output } from '@angular/core';
import { Modello } from '../models/modello';
import { MessageService } from '../services/message.service';
import { ReadWriteService } from '../services/read-write.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  // @Input() model: Modello;
  messages: string[];
  model: Modello;
  // @Output() text;
  constructor(private modello: ReadWriteService, private messaggi: MessageService) { }

  ngOnInit() {
    this.messages = this.messaggi.getMessage();
    this.modello.getModello().subscribe(modello => this.model = modello);
    console.log(this.model);
  }

}

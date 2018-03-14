import { Component, OnInit, Input, Output } from '@angular/core';
import { Modello } from '../models/modello';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  @Input() model: Modello;
  messages: string[];
  // @Output() text;
  constructor(private messaggi: MessageService) { }

  ngOnInit() {
    this.messages = this.messaggi.getMessage();
    console.log(this.model);
  }

}

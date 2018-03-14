import { Component, OnInit, Input, Output } from '@angular/core';
import { Modello } from '../models/modello';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  @Input() model: Modello;
  // @Output() text;
  constructor() { }

  ngOnInit() {
    console.log(this.model);
  }

}

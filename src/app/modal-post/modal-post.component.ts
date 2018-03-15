import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
declare const $: any;
@Component({
  selector: 'app-modal-post',
  templateUrl: './modal-post.component.html',
  styleUrls: ['./modal-post.component.css']
})
export class ModalPostComponent implements OnInit {
  @Input() modalId: string;
  @Input() modalHeader: string;
  @Output() confirm: EventEmitter<any>;
  constructor() {
    this.confirm = new EventEmitter();
  }

  ngOnInit() {
  }
  conferma() {
    this.confirm.emit();
    $('#' + this.modalId).modal('toggle');
  }
  cancel() {
    $('#' + this.modalId).modal('toggle');
  }

}

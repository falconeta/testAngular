import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
  private messages: string[] = [];
  constructor() { }
  getMessage(): string[] {
    return this.messages;
  }
  addMessage(message: string) {
    this.messages.push(message);
  }
}

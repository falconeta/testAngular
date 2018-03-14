import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ReadWriteService } from '../services/read-write.service';
import { Modello } from '../models/modello';
import { MessageService } from '../services/message.service';
import { RequestService } from '../services/request.service';
import { Post } from '../models/post';
import { Comment } from '../models/comment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  modello: Modello;
 @Output() exportModel = new EventEmitter<Modello>();
  post: Post[];
  comments: Comment[];
  commentUser: Comment[];
  array: string[];
  messages: string[];
  constructor(private servizioChiamata: RequestService, private messaggi: MessageService, private servizioModello: ReadWriteService) {
    this.array = ['pippo', 'pluto', 'topolino', 'cane', 'gatto']; }
  ngOnInit() {
    this.messaggi.addMessage(`sono nell'onInit di Header`);
    this.messages = this.messaggi.getMessage();
    this.servizioModello.getModello().subscribe(modello => {
      this.modello = modello;
      this.servizioChiamata.getPostUser(this.modello.id).subscribe(posts => {
        this.post = posts;
        this.modello.numeroPost = this.post.length;
      });
      this.servizioChiamata.getComment().subscribe(comments => {
        this.comments = comments;
        this.calcoloCommentiPostUser();
      });
      this.exportModel.emit(this.modello); // emette output
    });
  }
  private calcoloCommentiPostUser() {
    for (const post of this.post) {
      this.commentUser = this.comments.filter(comment => comment.postId === post.id);
      this.modello.numeroCommenti += this.commentUser.length;
    }
  }

  modificaBoolean() {
    this.modello.veroFalso ? this.modello.veroFalso = false : this.modello.veroFalso = true;
  }
}

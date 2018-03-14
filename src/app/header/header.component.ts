import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ReadWriteService } from '../services/read-write.service';
import { Modello } from '../models/modello';
import { MessageService } from '../services/message.service';
import { RequestService } from '../services/request.service';
// import { Post } from '../models/post';
import { Comment } from '../models/comment';
import { Album } from '../models/album';
import { Foto } from '../models/foto';

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
  constructor(private servizioChiamata: RequestService, private messaggi: MessageService, private servizioModello: ReadWriteService) {
    this.array = ['pippo', 'pluto', 'topolino', 'cane', 'gatto']; }
  ngOnInit() {
    this.messaggi.addMessage(`sono nell'onInit di Header`);
    this.messages = this.messaggi.getMessage();
    this.servizioModello.getModello().subscribe(modello => {
      this.modello = modello;
      this.servizioChiamata.getPostUser(this.modello.id).subscribe(posts => {
        this.modello.post = posts;
        this.modello.numeroPost = this.modello.post.length;
      });
      this.servizioChiamata.getComment().subscribe(comments => {
        this.calcoloCommentiPostUser(comments);
      });
      this.servizioChiamata.getAlbumUser(this.modello.id).subscribe(album => {
        this.modello.album = album;
        this.modello.numeroAlbum = this.modello.album.length;
      });
      this.servizioChiamata.getFoto().subscribe(foto => {
        this.calcoloFotoAlbumUser(foto);
      });
      this.exportModel.emit(this.modello); // emette output
    });
  }
  private calcoloFotoAlbumUser(foto) {
    for (const album of this.modello.album) {
      this.modello.foto = foto.filter(fotoSingola => fotoSingola.albumId === album.id);
      this.modello.numeroFoto += this.modello.foto.length;
    }
  }

  private calcoloCommentiPostUser(comments) {
    for (const post of this.modello.post) {
      this.modello.commenti = comments.filter(comment => comment.postId === post.id);
      this.modello.numeroCommenti += this.modello.commenti.length;
    }
  }

  modificaBoolean() {
    this.modello.veroFalso ? this.modello.veroFalso = false : this.modello.veroFalso = true;
  }
}

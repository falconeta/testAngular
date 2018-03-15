import { Injectable } from '@angular/core';
import { Aggregato } from '../models/aggregato';
import { RequestService } from './request.service';
import { Foto } from '../models/foto';
import { Comment } from '../models/comment';
@Injectable()
export class AggiungiAggregatoService {
  aggregato: Aggregato = new Aggregato();
  foto: Foto[];
  commenti: Comment[];
  constructor(private request: RequestService) { }
  addAggregato(id: number) {
    this.request.getUser(id).subscribe(user => {
      this.aggregato.user = user;
    });
    this.addPhotosAlbum(id);
    this.addPostComment(id);
  }
  getAggregato(): Aggregato {
    return this.aggregato;
  }
  private addPostComment(id: number) {
    this.request.getComment().subscribe(commenti => {
      this.commenti = commenti;
      this.request.getPostUser(id).subscribe(post => {
        this.aggregato.post = post;
        this.aggregato.post.forEach((value, index, array) => {
          array[index].comment = this.commenti.filter(commento => commento.postId === value.id);
        });
      });
    });
  }

  private addPhotosAlbum(id: number) {
    this.request.getFoto().subscribe(foto => {
      this.foto = foto;
      this.request.getAlbumUser(id).subscribe(albums => {
        this.aggregato.album = albums;
        this.aggregato.album.forEach((album, index, array) => {
          array[index].foto = this.foto.filter(fotoSingola => fotoSingola.albumId === array[index].id);
        });
      });
    });
  }
}

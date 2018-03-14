import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post';
import { Comment } from '../models/comment';
import { Observable } from 'rxjs/Observable';
import { Album } from '../models/album';
import { Foto } from '../models/foto';

@Injectable()
export class RequestService {
  private url = 'https://jsonplaceholder.typicode.com/';
  constructor(private http: HttpClient) { }
  getPostUser(idUser): Observable<Post[] > {
    return this.http.get<Post[]>(`${this.url}posts/?userId=${idUser}`);
  }

  getComment(): Observable<Comment[] > {
    return this.http.get<Comment[]>(`${this.url}comments`);
  }
  getAlbumUser(idUser): Observable<Album[] > {
    return this.http.get<Album[]>(`${this.url}albums/?userId=${idUser}`);
  }
  getFoto(): Observable<Foto[] > {
    return this.http.get<Foto[]>(`${this.url}photos`);
  }
}

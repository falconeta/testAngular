import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post';
import { Comment } from '../models/comment';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RequestService {
  url = 'https://jsonplaceholder.typicode.com/';
  constructor(private http: HttpClient) { }
  getPostUser(idUser): Observable<Post[] > {
    return this.http.get<Post[]>(this.url + 'posts/?userId=' + idUser);
  }

  getComment(): Observable<Comment[] > {
    return this.http.get<Comment[]>(this.url + 'comments');
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post';

@Injectable()
export class RequestService {
  url = 'https://jsonplaceholder.typicode.com/posts/';
  constructor(private http: HttpClient) { }
  getPostUser(idUser)  {
    return this.http.get<Post>(this.url + 'posts?userId=' + idUser);
  }
}

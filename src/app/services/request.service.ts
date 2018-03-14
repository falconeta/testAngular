import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Post } from '../models/post';
import { Comment } from '../models/comment';
import { Observable } from 'rxjs/Observable';
import { Album } from '../models/album';
import { Foto } from '../models/foto';
import { User } from '../models/user';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

@Injectable()
export class RequestService {
  private url = 'https://jsonplaceholder.typicode.com/';
  constructor(private http: HttpClient) { }
  getUser(id): Observable<User > {
    return this.http.get<User>(`${this.url}users/${id}`);
  }
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
  addPost(post: Post): Observable<any> {
    return this.http.post<Post>('https://jsonlaceholder.typicode.com/' + 'posts/', post).pipe(
      catchError((val => of(`I caught: ${val}`))));
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an ErrorObservable with a user-facing error message
    return new ErrorObservable(
      'Something bad happened; please try again later.');
  }
}

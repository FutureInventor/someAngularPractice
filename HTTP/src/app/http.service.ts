import { Injectable } from '@angular/core';
import { Post } from './app.component';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Array<Post>>{
    return this.http.get<Array<Post>>('https://jsonplaceholder.typicode.com/posts');
  }
  getPost(id: string): Observable<HttpResponse<Response>>{
    return this.http.get<Response>('https://jsonplaceholder.typicode.com/posts/' + id,
      { observe: 'response' });
  }
  getPostByUser(userId: string): Observable<Array<Post>>{
    const param = new HttpParams().set('userId', userId + '');
    return this.http.get<Array<Post>>('https://jsonplaceholder.typicode.com/posts/', {params: param});
  }
  addPost(post: Post): Observable<Post>{
    return this.http.post('https://jsonplaceholder.typicode.com/posts', post);
  }
  updatePost(post: Post): Observable<Post>{
    return this.http.put('https://jsonplaceholder.typicode.com/posts/' + post.id, post);
  }
  deletePost(id: string){
    return this.http.delete<Post>('https://jsonplaceholder.typicode.com/posts/' + id);
  }
  changePost(post: Post){
    return this.http.patch('https://jsonplaceholder.typicode.com/posts/' + post.id, post);
  }
}

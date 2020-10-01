import { Observable } from 'rxjs';
import { HttpService } from 'src/app/http.service';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private httpService: HttpService){}

  allPost$: Observable<Array<Post>>;

  getPosts(){
    this.allPost$ = this.httpService.getPosts();
  }
  getPost(id: HTMLInputElement){
    this.httpService.getPost(id.value).subscribe(post => {
      console.log(post);
    });
  }
  getPostByUser(userId: HTMLInputElement){
    this.httpService.getPostByUser(userId.value).subscribe(posts => {
      console.log(posts);
    });
  }
  addPost(){
    const post: Post = ({
      userId: 1,
      id: null,
      title: 'Mój post',
      body: 'My first post!'
    });
    this.httpService.addPost(post).subscribe(post => {
      console.log(post);
    });
  }
  updatePost(){
    const p: Post = ({
      userId: 1,
      id: 1,
      title: 'Update Post',
      body: 'New thread'
    });
    this.httpService.updatePost(p).subscribe(post => {
      console.log(post);
    });
  }
  deletePost(id: HTMLInputElement){
    this.httpService.deletePost(id.value).subscribe(posts => {
      console.log(posts);
    });
    }
  changePost(){
    const p: Post = ({
      id: 1,
      body: 'Zmiana wpisu'
    });
    this.httpService.changePost(p).subscribe(post => {
      console.log(post);
    });
  }
}
export interface Post {
    userId?: number;
    id?: number;
    title?: string;
    body?: string;
  }

import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestService } from '../services/request.service';
import { User } from '../models/user';
import { Post } from '../models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  user: User = new User();
  post: Post = new Post();
  error: string;
  @Input() id: number;
  constructor(private servizioRichiesta: RequestService, private route: ActivatedRoute) {}

  ngOnInit() {
    // const id = +this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.servizioRichiesta.getUser(this.id).subscribe(user => {
      this.user = user;
      this.post.userId = this.user.id;
    });
  }
  send() {
    this.servizioRichiesta.addPost(this.post).subscribe(
      event => console.log(event),
      error => this.error = error.message,
      () => alert('va'));
  }
}

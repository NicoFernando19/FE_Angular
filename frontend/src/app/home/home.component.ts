import { Component, ComponentRef, OnInit, ViewChild } from '@angular/core';
import { PostComponent } from '../post/post.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @ViewChild('posted', { static: true }) posted: PostComponent;
  @ViewChild(PostComponent) postComp: ComponentRef<PostComponent>;
  constructor() {}

  ngOnInit(): void {}
  names: string;
  object: any;
  buttonClick() {
    this.posted.testFunction();
    console.log(this.names);
  }

  receiveName(value: any) {
    this.names = value;
    console.log(this.names);
  }

  receiveObject(obj: any) {
    this.object = obj;
    console.log(this.object.value);
  }
}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';

interface Data {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  @Output() nameEvent = new EventEmitter<string>();
  private dataURl = 'https://jsonplaceholder.typicode.com/posts';
  name = '';
  @Output() object = new EventEmitter();
  public dataList: Data[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.http.get(this.dataURl).subscribe((response) => {
      console.log(response);
    });
  }

  sendName() {
    console.log(this.name);
    this.nameEvent.emit(this.name);
  }

  testFunction(): void {
    this.sendName();
    console.log(this.name);

    console.log('thanks for calling me!');
  }

  onSubmit(f: NgForm) {
    console.log(f.value); // { first: '', last: '' }
    console.log(f.valid); // false
    console.log(f);
    this.object.emit(f);
  }
}

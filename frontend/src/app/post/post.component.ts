import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface Data {
  userId: number,
  id: number,
  title:string,
  body:string
}

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit {

  private dataURl = "https://jsonplaceholder.typicode.com/posts";
  
  public dataList: Data[] =  [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.http.get(this.dataURl).subscribe(response => {
      console.log(response);
    })
  }

}


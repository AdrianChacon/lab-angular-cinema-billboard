import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-my-movie',
  templateUrl: './my-movie.component.html',
  styleUrls: ['./my-movie.component.css']
})
export class MyMovieComponent implements OnInit {

  constructor(public router:ActivatedRoute) { }

  ngOnInit() {
  }

}

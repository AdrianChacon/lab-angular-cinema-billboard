import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from 'services/movies.services';

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css'],
  providers: [MoviesService]
})
export class MyHomeComponent implements OnInit {

  constructor(public router:Router, private allMovies:MoviesService) { }

  ngOnInit() {
  }
  
  listMovies:Array<any> = this.allMovies.getMovies();

}

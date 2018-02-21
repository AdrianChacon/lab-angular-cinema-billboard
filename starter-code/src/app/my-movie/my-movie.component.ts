import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from 'services/movies.services';

@Component({
  selector: 'app-my-movie',
  templateUrl: './my-movie.component.html',
  styleUrls: ['./my-movie.component.css'],
  providers: [MoviesService]
})
export class MyMovieComponent implements OnInit {
  filmId: Number;
  movieThatIWant: any;
  constructor(public router: ActivatedRoute, private allMovies: MoviesService, public routernormal: Router) {
    this.router.params.subscribe(p => {
      this.filmId = p.id;
      this.movieThatIWant = allMovies.getMovie(this.filmId);
    });
  }

  ngOnInit() {
  }

  goToHome(){
  this.routernormal.navigate(['/home'])
  }
}

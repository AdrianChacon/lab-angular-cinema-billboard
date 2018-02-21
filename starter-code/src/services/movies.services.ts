import { Injectable } from '@angular/core';
import movies from '../sample-movies'

export interface Movie {
    id: Number,
    title: String,
    poster: String,
    synopsis: String,
    genres: Array<String>,
    year: Number,
    director: String,
    actor: Array<String>,
    hours: Array<String>,
    room: Number
}

@Injectable()
export class MoviesService {
    private listOfMovies: Array<any> = movies
    constructor() {}
    
    getMovies() {
        return this.listOfMovies;
    }

    getMovie(id) {
        let encontrado = false;
        let i = 0;
        while (!encontrado) {
            if (this.listOfMovies[i].id == id)
                encontrado = !encontrado;
            else
                i++;
        }
        return this.listOfMovies[i]
    }
}
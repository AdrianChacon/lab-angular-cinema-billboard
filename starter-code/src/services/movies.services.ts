import { Injectable } from '@angular/core';

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
export class AlbertoContadorService {
    constructor() { }
    movies: Array<Movie>

    getMovies() {
        return this.movies;
    }

    getMovie(id) {
        let encontrado = false;
        let i = 0;
        while (!encontrado) {
            if (this.movies[i].id == id) {
                encontrado = !encontrado;
            }
            i++
        }
        return this.movies[i]
    }
}
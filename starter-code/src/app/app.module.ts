import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from './routes';
import { RouterModule } from '@angular/router'; 

import { AppComponent } from './app.component';
import { MyMovieComponent } from './my-movie/my-movie.component';
import { MyHomeComponent } from './my-home/my-home.component';

@NgModule({
  declarations: [
    AppComponent,
    MyMovieComponent,
    MyHomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)  // Configure the router module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

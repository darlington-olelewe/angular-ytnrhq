import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  // Add data elements for your name, the title, year released, rating, and imdb link of your favorite movie
  fullName:string = "Darlington Olelewe"
  favFlop = {
    title: "Black Panther",
    yearReleased: 2022,
    rating: 6.7,
    imdbLink: "https://www.imdb.com/title/tt9114286/?ref_=ext_shr_lnk",
  }
}

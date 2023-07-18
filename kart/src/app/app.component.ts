import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kart';
  
  kartlar = [
    {
      title: 'Ankara',
      imageURL: 'assets/ankara.jpg',
      username: 'ankara',
      content: 'Başkent'
    },

    {
      title: 'Bursa',
      imageURL: 'assets/bursa.jpg',
      username: 'bursa',
      content: 'Yeşil Bursa'
    },

    {
      title: 'Sakarya',
      imageURL: 'assets/sakarya.jpg',
      username: 'sakarya',
      content: 'Sapanca'
    }
  ]
}

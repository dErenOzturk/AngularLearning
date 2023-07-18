import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage = 0;
  images = [
    {
      title: 'Ankara',
      URL: 'assets/ankara.jpg'
    },
    {
      title: 'Bursa',
      URL: 'assets/bursa.jpg'
    },
    {
      title: 'Sakarya',
      URL: 'assets/sakarya.jpg'
    },
    {
      title: 'Çankırı',
      URL: 'assets/cankiri.jpeg'
    },
    {
      title: 'İstanbul',
      URL: 'assets/istanbul.jpg'
    },
    {
      title: 'Eskişehir',
      URL: 'assets/eskisehir.jpg'
    },
    {
      title: 'Samsun',
      URL: 'assets/samsun.jpg'
    },
    {
      title: 'İzmir',
      URL: 'assets/izmir.jpg'
    },
  ]

  PageIndex(index:number){
    return Math.abs(this.currentPage - index) < 5;
  }
  /*
  changePage(number:number){
    this.currentPage = number;
  }
  Fonksiyon olmadan da yapabiliriz, .html sayfasında örneği var.*/
}

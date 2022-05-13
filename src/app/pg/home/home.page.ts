import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  slidesFeed = {
    grabCursor: "true",
    autoplay:{
      delay: 5500,
      disableOnInteraction: false
    },
    speed: 2500,
    loop: true
  };

  slidesBarbeiro = {
    loop: true,
    autoplay:{
      delay: 5000,
      disableOnInteraction: false
    },
    speed: 2500

  }

  constructor() { }

  ngOnInit() {
  }

  
}

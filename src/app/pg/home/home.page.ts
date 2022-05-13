import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  slidesFeed = {
    grabCursor: "true",
    effect: 'creative',
    creativeEffect:{ /* efeito criativo */
      prev: {
        shadow: true,
        translate: [0, 0, -400]
      },
      next: {
        translate: ['100%', 0, 0]
      }
    }, //fim efeito criativo
    autoplay:{
      delay: 2500,
      disableOnInteraction: false
    },
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

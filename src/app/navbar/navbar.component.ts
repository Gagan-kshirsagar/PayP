import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  change(){

    const visibility = document.querySelector(".primary-navigation")?.getAttribute("data-visible");

    if(visibility === "false"){

      document.querySelector(".primary-navigation")?.setAttribute("data-visible", "true");
      document.querySelector(".mobile-nav-toggle")?.setAttribute("aria-expanded", "true");

    }
    else if(visibility === "true"){

      document.querySelector(".primary-navigation")?.setAttribute("data-visible","false");
      document.querySelector(".mobile-nav-toggle")?.setAttribute("aria-expanded", "false");
    }
  }

}


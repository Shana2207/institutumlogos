import { Component, OnInit, HostListener } from '@angular/core';
@HostListener('window:scroll', ['$event'])
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  nav1=false;
  cambiarNav(){
    this.nav1 = !this.nav1;
  }
  
  onWindowScroll() {
    let element = document.querySelector('.header') as HTMLElement;
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('nav-mod');
    } else {
      element.classList.remove('nav-mod');
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}

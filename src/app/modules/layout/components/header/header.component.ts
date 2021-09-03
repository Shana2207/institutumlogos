import { Component, OnInit } from '@angular/core';

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
  
  constructor() { }

  ngOnInit(): void {
  }

}

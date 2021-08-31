import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  colapsable1 = false;
  colapsable2 = false;
  colapsable3 = false;

  constructor() { }

  ngOnInit(): void {
  }

}

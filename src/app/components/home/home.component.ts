import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cheminImage: any="../assets/img/bib2.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}

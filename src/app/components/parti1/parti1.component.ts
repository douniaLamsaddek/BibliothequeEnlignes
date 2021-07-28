import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parti1',
  templateUrl: './parti1.component.html',
  styleUrls: ['./parti1.component.css']
})
export class Parti1Component implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  agrandire(event){
    event.target.style.width="210px";
    event.target.style.height="50px";  
    event.target.style.background="burlywood";  
    event.target.style.color="black";  


  }
  minimiser(event){
    event.target.style.width="190px";
    event.target.style.height="45px";  
    event.target.style.background="black";  
    event.target.style.color="white"; 
  }

}

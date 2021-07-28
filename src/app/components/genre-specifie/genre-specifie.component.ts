import { Component, OnInit } from '@angular/core';
import { DonneesFormulaireService } from 'src/app/services/donnees-formulaire.service';
import {Livre} from 'src/app/livre';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-genre-specifie',
  templateUrl: './genre-specifie.component.html',
  styleUrls: ['./genre-specifie.component.css']
})
export class GenreSpecifieComponent implements OnInit {
  livres:Livre[];
  nomGenre:string;
  constructor(private Donnes:DonneesFormulaireService,private routeActive:ActivatedRoute) { }

  ngOnInit(): void {
    this.nomGenre =this.routeActive.snapshot.params['id'];
    this.Donnes.GetLivresGenre(this.nomGenre)
    .subscribe((dat:Livre[])=>{
      this.livres=dat;
      console.log('string4');
      console.log(dat);
      console.log(this.livres);
    });
    console.log('string2');
    console.log(this.livres);
    console.log('string5');
  }
}

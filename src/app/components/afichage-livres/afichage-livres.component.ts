import { Component, OnInit } from '@angular/core';
import { DonneesFormulaireService } from 'src/app/services/donnees-formulaire.service';
import {Livre} from 'src/app/livre';

@Component({
  selector: 'app-afichage-livres',
  templateUrl: './afichage-livres.component.html',
  styleUrls: ['./afichage-livres.component.css']
})
export class AfichageLivresComponent implements OnInit {
  livres:Livre[];
  constructor(private Donnes:DonneesFormulaireService) { }

  ngOnInit(): void {
    this.Donnes.GetLivres().subscribe((data:Livre[])=>{
      this.livres=data;
      console.log(this.livres);
    });
    
  }

}

import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { DonneesFormulaireService } from 'src/app/services/donnees-formulaire.service';
import {Livre} from 'src/app/livre';

@Component({
  selector: 'app-formulaire-chercher-livre',
  templateUrl: './formulaire-chercher-livre.component.html',
  styleUrls: ['./formulaire-chercher-livre.component.css']
})
export class FormulaireChercherLivreComponent implements OnInit {
  cheminImage: any="../assets/img/bib2.jpg";
  OfrirForm: FormGroup;
  livres:Livre[];
  constructor(private fb:FormBuilder,private DonnesFormulaire: DonneesFormulaireService){ }

  ngOnInit(): void {
    this.OfrirForm=this.fb.group({
      nomLivre:['',Validators.required],
      nomAuteur:['',Validators.required],
    });
  }

  onSubmit(){

    console.log(this.OfrirForm.value);//retourne un objet
    this.DonnesFormulaire.GetLivreSpecifie(this.OfrirForm.value['nomLivre'],this.OfrirForm.value['nomAuteur'])
    .subscribe((data:Livre[])=>{
      this.livres=data;
      console.log(data);
      console.log('string1');
    });
    console.log('string2');
   console.log(this.livres); 
   console.log('string3');
  }

}

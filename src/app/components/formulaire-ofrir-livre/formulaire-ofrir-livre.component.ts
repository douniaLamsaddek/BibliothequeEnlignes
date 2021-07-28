import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import { DonneesFormulaireService } from 'src/app/services/donnees-formulaire.service';
import {Router} from '@angular/router';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-formulaire-ofrir-livre',
  templateUrl: './formulaire-ofrir-livre.component.html',
  styleUrls: ['./formulaire-ofrir-livre.component.css']
})
export class FormulaireOfrirLivreComponent implements OnInit {
  cheminImage: any="../assets/img/bib2.jpg";
  OfrirForm: FormGroup;
  fileSelected:File;
  formData: FormData = new FormData();
  constructor(private fb:FormBuilder,private DonnesFormulaire: DonneesFormulaireService,private router:Router) { }

  ngOnInit(): void {
    this.OfrirForm=this.fb.group({
      nomLivre:['',Validators.required],
      nomAuteur:['',Validators.required],
      LeLivre:[null]
    });
  }

  Uploads(event){
    this.fileSelected=event.target.files[0];
    this.OfrirForm.patchValue({
      LeLivre: this.fileSelected
    });
    console.log(this.fileSelected);
    console.log(this.OfrirForm.value['LeLivre']);

  }
  onSubmit(){
    this.formData.append('fichier', this.fileSelected, this.fileSelected.name);
    this.formData.append('nomLivre',this.OfrirForm.value['nomLivre']);
    this.formData.append('nomAuteur',this.OfrirForm.value['nomAuteur']);

    console.log(this.OfrirForm.value);//retourne un objet
    this.DonnesFormulaire.InsererLivres(this.formData)
    .subscribe(data => {this.router.navigate(['ofrir'])});
    
  }


}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Livre} from 'src/app/livre';


@Injectable({
  providedIn: 'root'
})
export class DonneesFormulaireService {

  
  constructor(private http: HttpClient) { }

  GetLivres(){
  
    return this.http.get<Livre[]>('http://localhost/projet-angular/getLivres.php');
  }

  InsererLivres(livre : FormData){

    return this.http.post('http://localhost/projet-angular/upload.php',livre);

  }
  GetLivresGenre(nomGenre:string){
  
    return this.http.get<Livre[]>(`http://localhost/projet-angular/getLivresGenre.php?id=${nomGenre}`);
  }
  GetLivreSpecifie(nomLivre:string,nomAuteur:string){
  
    return this.http.get<Livre[]>(`http://localhost/projet-angular/getLivresSpecifie.php?nom=${nomLivre}&Auteur=${nomAuteur}`);
  }
}
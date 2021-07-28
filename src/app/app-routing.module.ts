import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AfichageLivresComponent } from './components/afichage-livres/afichage-livres.component';
import { FormulaireChercherLivreComponent } from './components/formulaire-chercher-livre/formulaire-chercher-livre.component';
import { FormulaireOfrirLivreComponent } from './components/formulaire-ofrir-livre/formulaire-ofrir-livre.component';
//import { FormulaireOfrirLivreComponent } from './components/formulaire-ofrir-livre/formulaire-ofrir-livre.component';
import { GenreSpecifieComponent } from './components/genre-specifie/genre-specifie.component';
import { LectureLivreComponent } from './components/lecture-livre/lecture-livre.component';
//import { HomeComponent } from './components/home/home.component';

const routes: Routes = [

  {
    path:'',
    component:AfichageLivresComponent
  },
  {
    path:'chercher',
    component:FormulaireChercherLivreComponent
  },
  {
    path:'ofrir',
    component:FormulaireOfrirLivreComponent
  },
  {
    path:'Genre/:id',
    component:GenreSpecifieComponent
  },
  {
    path:'lectureLivre',
    component:LectureLivreComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

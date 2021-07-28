import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Parti1Component } from './components/parti1/parti1.component';
import { Parti2Component } from './components/parti2/parti2.component';
import { HomeComponent } from './components/home/home.component';
import { ReseauxSociauxComponent } from './components/reseaux-sociaux/reseaux-sociaux.component';
import { FormulaireChercherLivreComponent } from './components/formulaire-chercher-livre/formulaire-chercher-livre.component';
import { FormulaireOfrirLivreComponent } from './components/formulaire-ofrir-livre/formulaire-ofrir-livre.component';

import{RouterModule} from '@angular/router';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AfichageLivresComponent } from './components/afichage-livres/afichage-livres.component';

import { CommonModule } from "@angular/common";
import { GenreSpecifieComponent } from './components/genre-specifie/genre-specifie.component';
import { LectureLivreComponent } from './components/lecture-livre/lecture-livre.component';

@NgModule({
  declarations: [
    AppComponent,
    Parti1Component,
    Parti2Component,
    HomeComponent,
    ReseauxSociauxComponent,
    FormulaireChercherLivreComponent,
    FormulaireOfrirLivreComponent,
    AfichageLivresComponent,
    GenreSpecifieComponent,
    LectureLivreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

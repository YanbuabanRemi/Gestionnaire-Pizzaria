import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NouveauClientComponent } from './nouveau-client/nouveau-client.component';
import { PizzaComponent } from './pizza/pizza.component';
import { ListePizzaComponent } from './liste-pizza/liste-pizza.component';
import { CommandeComponent } from './commande/commande.component';
import { ListeCommandeComponent } from './liste-commande/liste-commande.component';
import { EnregistrementComponent } from './enregistrement/enregistrement.component';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { DataService } from './data.service';
import { TotalCommandeComponent } from './total-commande/total-commande.component';
import { TotalCommandeListeComponent } from './total-commande-liste/total-commande-liste.component';


const routes: Routes = [
  {path : "", component : EnregistrementComponent},
  {path : "enregistrementClient", component : EnregistrementComponent},
  {path : "totalCommandes", component : TotalCommandeListeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NouveauClientComponent,
    PizzaComponent,
    ListePizzaComponent,
    CommandeComponent,
    ListeCommandeComponent,
    EnregistrementComponent,
    MenuComponent,
    TotalCommandeComponent,
    TotalCommandeListeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

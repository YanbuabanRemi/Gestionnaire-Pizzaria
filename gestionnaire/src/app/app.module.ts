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

@NgModule({
  declarations: [
    AppComponent,
    NouveauClientComponent,
    PizzaComponent,
    ListePizzaComponent,
    CommandeComponent,
    ListeCommandeComponent,
    EnregistrementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

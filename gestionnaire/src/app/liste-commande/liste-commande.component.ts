import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-liste-commande',
  templateUrl: './liste-commande.component.html',
  styleUrls: ['./liste-commande.component.scss']
})
export class ListeCommandeComponent implements OnInit {

  listePizza = [];
  prixCommande ;
  nomClient;
  constructor(private data: DataService, private route: Router) {
    this.listePizza = this.data.listePizza;
  }

  ngOnInit() {
    if (this.listePizza != undefined) {
      this.prixCommande = 0
      for (let p of this.listePizza) {
        let x= +p.prix
        this.prixCommande += x ;
        console.log(this.prixCommande)
      }
    }
    
  }

  change = (event) => {
    this.nomClient = event.target.value
    console.log(this.nomClient)
  }
  
  addClientOnClick = () => {
    this.data.ajoutClient(this.nomClient, this.prixCommande)
    localStorage.removeItem('listeCommande')
    this.route.navigate(['totalCommandes'])
  }

}

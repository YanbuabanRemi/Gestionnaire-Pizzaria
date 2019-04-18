import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-liste-commande',
  templateUrl: './liste-commande.component.html',
  styleUrls: ['./liste-commande.component.scss']
})
export class ListeCommandeComponent implements OnInit {

  listePizza = [];
  prixCommande;
  constructor(private data: DataService) { 
    this.listePizza = this.data.listePizza;
  }

  ngOnInit() {
    // for(let p of this.listePizza){
    //   let price = parseInt(p.prix);
    //   this.prixCommande = price + this.prixCommande;
    //   console.log(this.prixCommande)
    // }
    
  }

  
}

import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { ListeCommandeComponent } from '../liste-commande/liste-commande.component';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss']
})
export class PizzaComponent implements OnInit {

  @Input() nom;
  @Input() prix;
  @Input() description;
  @Input() image;

  ListeCommande = [{
    nom : "",
    prix: "",
  }];
  

  addTOCart = () => {
    this.ListeCommande.push = ({nom: this.nom, prix: this.prix})
  }
  constructor() { 
    
  }

  ngOnInit() {
  }

}

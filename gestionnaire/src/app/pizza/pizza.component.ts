import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';


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

  listeCommande = [];

  constructor(private data: DataService) {
    
  }

  ngOnInit() {
  }

  addToCart = () => {
    this.listeCommande = this.data.getCommande();
    this.listeCommande.push({ nom: this.nom, prix: this.prix });
    localStorage.setItem('listeCommande', JSON.stringify(this.listeCommande));
    // this.data.emit();
    location.reload();
  }
}

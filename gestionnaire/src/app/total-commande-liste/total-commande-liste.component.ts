import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-total-commande-liste',
  templateUrl: './total-commande-liste.component.html',
  styleUrls: ['./total-commande-liste.component.scss']
})
export class TotalCommandeListeComponent implements OnInit {

  listeCommandes =  JSON.parse(localStorage.getItem('listeClient'));
  constructor() { }

  ngOnInit() {
  
  }

}

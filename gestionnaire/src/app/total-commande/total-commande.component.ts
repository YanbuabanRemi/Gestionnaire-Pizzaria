import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-total-commande',
  templateUrl: './total-commande.component.html',
  styleUrls: ['./total-commande.component.scss']
})
export class TotalCommandeComponent implements OnInit {

  @Input() nom;
  @Input() prix;
  

  constructor() { }

  ngOnInit() {

  }

  
}

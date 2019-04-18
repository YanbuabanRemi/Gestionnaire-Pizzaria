import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.scss']
})
export class CommandeComponent implements OnInit {


  @Input() nom;
  @Input() prix;
  constructor() { }

  ngOnInit() {
  }

  
}

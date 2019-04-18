import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-enregistrement',
  templateUrl: './enregistrement.component.html',
  styleUrls: ['./enregistrement.component.scss']
})
export class EnregistrementComponent implements OnInit {

  nomClient
  constructor() { }

  ngOnInit() {
  }

  change = (event) => {
    this.nomClient = event.target.value
  }
}

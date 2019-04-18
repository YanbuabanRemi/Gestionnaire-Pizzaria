import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  clients = [
    {
      nom : "",
      prix : "",
    }
  ];

  ajoutClient = (nom, prix) =>{
    this.clients.push(nom, prix);
    localStorage.setItem("ListeClient", JSON.stringify(this.clients)); 
  }

  constructor() { }
}

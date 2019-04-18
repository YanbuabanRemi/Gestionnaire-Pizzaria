import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable()
export class DataService {

  clients = [
    {
      nom : "",
      prix : "",
    }
  ];
  listePizza = JSON.parse(localStorage.getItem('listeCommande'));
  // listePizzaSubject = new Subject<any>();

  // emit = () => {
  //   this.listePizzaSubject.next(this.listePizza);
  // }

  ajoutClient = (nom, prix) =>{
    this.clients.push(nom, prix);
    localStorage.setItem("ListeClient", JSON.stringify(this.clients)); 
  }

  getCommande = () => {
     return (localStorage.getItem('listeCommande') != null)  ? JSON.parse(localStorage.getItem('listeCommande')) : [];
  }

  constructor() { }
}

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable()
export class DataService {

  clients = [];
  listePizza = JSON.parse(localStorage.getItem('listeCommande'));
  // listePizzaSubject = new Subject<any>();

  // emit = () => {
  //   this.listePizzaSubject.next(this.listePizza);
  // }

  ajoutClient = (prenom, prixtotal) =>{
    this.clients = this.getClient()
    this.clients.push({nom : prenom, prix: prixtotal});
    localStorage.setItem("listeClient", JSON.stringify(this.clients)); 
  }

  getCommande = () => {
     return (localStorage.getItem('listeCommande') != null)  ? JSON.parse(localStorage.getItem('listeCommande')) : [];
  }

  getClient = () => {
    return (localStorage.getItem('listeClient') != null)  ? JSON.parse(localStorage.getItem('listeClient')) : [];
  }

  constructor() { }
}

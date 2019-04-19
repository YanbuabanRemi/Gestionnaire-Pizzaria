import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-liste-pizza',
  templateUrl: './liste-pizza.component.html',
  styleUrls: ['./liste-pizza.component.scss']
})
export class ListePizzaComponent implements OnInit {

  pizzas = [
    {
      nom: "Margherita",
      description: "Concassé de tomates, mozzarella, feuilles de basilic",
      image: "https://medias.delarte.fr/media/sys_master/h8b/h6e/8808367357982.jpg",
      prix: 7
    },
    {
      nom: "Chèvre et miel",
      description: "Crème et miel, mozzarella, fromage de chèvre, speck* IGP (jambon fumé), roquette",
      image: "https://medias.delarte.fr/media/sys_master/hf7/h51/8808367489054.jpg",
      prix: 9
    },
    {
      nom: "Pomodoro e burrata",
      description: "Concassé de tomates, tomates cerise marinées, fromage italien râpé, roquette, burrata",
      image: "https://medias.delarte.fr/media/sys_master/h69/h2c/8808367554590.jpg",
      prix: 11
    },
    {
      nom: "Carbonara",
      description: "Sauce tomate, mozzarella, jambon**, œuf, crème, ciboulette",
      image: "https://medias.delarte.fr/media/sys_master/h02/h8b/8808368013342.jpg",
      prix: 10
    },
    {
      nom: "Végétarienne",
      description: "Concassé de tomates, mozzarella, carpaccio de courgette, tomates cerise marinées, olives noires",
      image: "https://medias.delarte.fr/media/sys_master/hc1/h50/8808368275486.jpg",
      prix: 7
    },
    {
      nom: "Calzone pollo ",
      description: "Crème mascarpone, sauce tomate, mozzarella, émincés de poulet**, scamorza fumée.",
      image: "https://medias.delarte.fr/media/sys_master/h6c/h3b/8808368341022.jpg",
      prix: 10
    }
  ]
  constructor(private data : DataService) {
    
  }

  ngOnInit() {
  }

}

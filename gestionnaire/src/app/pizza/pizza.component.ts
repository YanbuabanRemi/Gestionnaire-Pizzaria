import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss']
})
export class PizzaComponent implements OnInit {

  pizzas = [
    {
      nom: "Margherita",
      description: "Sauce tomate & mozzarella",
      image: "https://www.abeautifulplate.com/wp-content/uploads/2015/08/the-best-homemade-margherita-pizza-1-4.jpg",
      prix: "7"
    },
    {
      nom: "Orientale",
      description: "Sauce tomate, mozzarella, oignons, merguez, poivrons mélangés.",
      image: "https://cac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fcac.2F2018.2F09.2F25.2F5ad52111-03c7-44c1-89d4-34d5cc3bcf6a.2Ejpeg/750x562/quality/80/crop-from/center/pizza-orientale.jpeg",
      prix: "8"
    }
  ]
  constructor() { 
    
  }

  ngOnInit() {
  }

}

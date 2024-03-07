import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Pizza } from '../service/pizza.service';
import { PizzaSelectComponent } from '../pizza-select/pizza-select.component';

@Component({
  selector: 'app-pizza-block',
  standalone: true,
  imports: [CommonModule,PizzaSelectComponent],
  templateUrl: './pizza-block.component.html',
  styleUrl: './pizza-block.component.scss',
})
export class PizzaBlockComponent {
  filteredPizzas: Pizza[] = [
    {
      id: 0,
      name: 'Burger-Pizza',
      price: 40,
      imgUrl:
        'https://dodopizza-a.akamaihd.net/static/Img/Products/c84a4190f97d4364ad2b614bd0d26297_366x366.webp',
      counter: 0,
      category: 'new',
    },
    {
      id: 1,
      name: 'Curry Chicken',
      price: 35,
      imgUrl:
        'https://dodopizza-a.akamaihd.net/static/Img/Products/f88f70774bdc4a198379c2f53b42f48f_366x366.webp',
      counter: 0,
      category: 'grill',
    },
    {
      id: 2,
      name: 'Cheesy',
      price: 30,
      imgUrl:
        'https://dodopizza-a.akamaihd.net/static/Img/Products/e2393e247dc64ecbbf23c82243c0a399_366x366.webp',
      counter: 0,
      category: 'vegan',
    },
    {
      id: 3,
      name: 'Ham and cheese',
      price: 40,
      imgUrl:
        'https://dodopizza-a.akamaihd.net/static/Img/Products/3fe12c4bb05c470c9cb45fb423b7c049_366x366.webp',
      counter: 0,
      category: 'meat',
    },
    {
      id: 4,
      name: 'Pepperoni Fresh',
      price: 30,
      imgUrl:
        'https://dodopizza-a.akamaihd.net/static/Img/Products/525becd5f6d845ea9f83af0af7e44eea_366x366.webp',
      counter: 0,
      category: 'meat',
    },
    {
      id: 5,
      name: 'Double Chicken',
      price: 15,
      imgUrl:
        'https://dodopizza-a.akamaihd.net/static/Img/Products/f351d4358f134c31b5bed9093faf38e3_366x366.webp',
      counter: 0,
      category: 'grill',
    },
    {
      id: 6,
      name: 'Ham and mushrooms',
      price: 20,
      imgUrl:
        'https://dodopizza-a.akamaihd.net/static/Img/Products/be07674c38c54fd78f878a33988a4373_366x366.webp',
      counter: 0,
      category: 'meat',
    },
    {
      id: 7,
      name: 'Margarita',
      price: 20,
      imgUrl:
        'https://dodopizza-a.akamaihd.net/static/Img/Products/3f19abd29d2a477a960992ec2f30782c_366x366.webp',
      counter: 0,
      category: 'vegan',
    },
  ];
  pizzas: Pizza[] = [];


  // constructor(private pizzaService: PizzaService) {}

  ngOnInit(): void {
    this.getPizzas();
  }

  getPizzas() {
    return this.pizzas;
  }

  addCart(pizza: Pizza): void {
    console.log('Adding to cart:', pizza);
  }
}

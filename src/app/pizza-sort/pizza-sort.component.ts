import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
// import { PizzaService } from '../service/pizza.service';

@Component({
  selector: 'app-pizza-sort',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './pizza-sort.component.html',
  styleUrl: './pizza-sort.component.scss',
})
export class PizzaSortComponent {
  items: string[] = ['popularity', 'price', 'name'];
  isSelected: string = 'popularity';
  isOpen: boolean = false;

  // constructor(private pizzaService: PizzaService) {}

  toggleDropdown(): void {
    this.isOpen = !this.isOpen;
  }

  sortEverything(item: string): void {
    this.isSelected = item;
    this.isOpen = false;

    // if (item === 'price') {
    //   this.pizzaService.sortPizzas('price');
    // } else if (item === 'name') {
    //   this.pizzaService.sortPizzas('name');
    // } else if (item === 'popular') {
    //   this.pizzaService.getPizzas();
    // }
    this.toggleDropdown();
  }
}

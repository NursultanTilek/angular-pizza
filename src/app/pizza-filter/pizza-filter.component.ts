import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  standalone:true,
  selector: 'app-pizza-filter',
  templateUrl: './pizza-filter.component.html',
  styleUrls: ['./pizza-filter.component.scss'],
  imports:[CommonModule]
})

export class PizzaFilterComponent {
  categories: string[] = ['all', 'meat', 'vegan', 'grill', 'spicy', 'new'];
  isActive: string = 'all';
// 
  // constructor(private pizzaService: PizzaService) {}
  filterPizzas(category: string): void {
    this.isActive = category;
    // this.pizzaService.filterPizzas(category); 
  }
}

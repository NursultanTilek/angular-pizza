import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Pizza {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
  counter: number;
  category: 'all' | 'meat' | 'vegan' | 'spicy' | 'grill' | 'new';
  size?: 'small' | 'medium' | 'large';
  crust?: 'thin' | 'thick';
}

@Injectable({
  providedIn: 'root',
})
export class PizzaService {
  private PIZZA_API = 'https://65e6f91b53d564627a8d81d6.mockapi.io/api/pizzas';
  private pizzas: Pizza[] = [];
  private filteredPizzasSubject = new BehaviorSubject<Pizza[]>([]);
  public filteredPizzas$ = this.filteredPizzasSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadPizzas();
  }
  loadPizzas() {
    this.http.get<Pizza[]>(this.PIZZA_API).subscribe((pizzas) => {
      this.pizzas = pizzas;
      this.filteredPizzasSubject.next(this.pizzas);
    });
  }
  getPizzas(){
    return this.filteredPizzas$
  }
  sortPizzas(criteria: 'price' | 'name'): void {
    const sortedPizzas = this.filteredPizzasSubject.getValue().sort((a, b) => {
      if (criteria === 'price') {
        return a.price - b.price;
      } else if (criteria === 'name') {
        return a.name.localeCompare(b.name);
      }
      return 0;
    });
    this.filteredPizzasSubject.next(sortedPizzas);
  }
}

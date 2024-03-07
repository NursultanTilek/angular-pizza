import { Component } from '@angular/core';
import { PizzaFilterComponent } from '../pizza-filter/pizza-filter.component';
import { PizzaSortComponent } from '../pizza-sort/pizza-sort.component';
import { PizzaBlockComponent } from '../pizza-block/pizza-block.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PizzaFilterComponent,PizzaSortComponent,PizzaBlockComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
}

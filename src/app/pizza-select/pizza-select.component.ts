import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pizza-select',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pizza-select.component.html',
  styleUrl: './pizza-select.component.scss'
})
export class PizzaSelectComponent {
  crustOptions = ['traditional', 'thin'];
  sizeOptions = ['26 cm.', '30 см.', '40 см.'];
  selectedCrust = 'traditional';
  selectedSize = '30 см.';
  
  selectCrust(crust: string) {
    this.selectedCrust = crust;
  }

  selectSize(size: string) {
    this.selectedSize = size;
  }

}

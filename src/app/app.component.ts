import { Component, inject } from '@angular/core';
import { ProductsService } from './api/products.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'New Angular features!'

  private readonly productsServices = inject(ProductsService);

  products$ = this.productsServices.getAllProducts();
}

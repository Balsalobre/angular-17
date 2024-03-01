import { Component, ElementRef, afterNextRender, afterRender, computed, viewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  productImage = viewChild.required<ElementRef<HTMLImageElement>>('productImage');
  imageSrc = computed(() => this.productImage()?.nativeElement.src);

  constructor() {
    afterRender(() => {
      console.log('Product Image afterRender src', this.productImage()?.nativeElement.src);
    });

    afterNextRender(() => {
      console.log('Product Image afterNextRender src', this.productImage()?.nativeElement.src);
    });
  }
}

import { Routes } from '@angular/router';

export const mainRoutes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full',
  },
  {
    path: 'products',
    loadComponent: () =>
      import('./domain/products/products.component').then(
        (c) => c.ProductsComponent
      ),
  },
  {
    path: 'cart',
    loadComponent: () =>
      import('./domain/cart/cart.component').then((c) => c.CartComponent),
  },
  { path: '**', redirectTo: 'products' }
];

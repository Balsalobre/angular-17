import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

export type Product = {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private readonly API_URL = 'https://fakestoreapi.com';
  private readonly _http = inject(HttpClient);

  getAllProducts(): Observable<Product[]> {
    return this._http.get<Product[]>(`${this.API_URL}/products`);
  }
}

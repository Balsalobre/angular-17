import { Component, computed, input } from '@angular/core';

type User = { name: string; email: string; items: { ammount: number; price: number }[] };

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  template: `
    <div>User name: {{ user().name }} with email: {{ user().email }}</div>
    <p>Cart Total: {{ totalCart() }}</p>
  `,
  styleUrl: './user.component.scss',
})
export class UserComponent {
  user = input.required<User>();
  totalCart = computed(() => this.user().items.reduce((acc, item) => acc + item.ammount * item.price, 0));

}

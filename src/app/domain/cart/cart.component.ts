import { Component, Signal, computed, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { BehaviorSubject } from 'rxjs';

type User = { name: string; email: string; items: { ammount: number; price: number }[] };

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  user = new BehaviorSubject<User>({ name: 'Carlos', email: 'cbotest@gmail.com', items: [] });
  userSignal: Signal<User> = toSignal(this.user, { requireSync: true });
  test = signal<String>('testSignal');

  userChanging = computed(() => {
    console.log('User Changing', this.userSignal());
  });

  totalCart = computed(() => this.userSignal().items.reduce((acc, item) => acc + item.ammount * item.price, 0));

  addItem() {
    this.user.next({ ...this.user.value, items: [...this.user.value.items, { ammount: 1, price: 100 }] });
  }
  
}

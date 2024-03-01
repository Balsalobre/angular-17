import { CommonModule } from '@angular/common';
import { Component, Signal, computed } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { BehaviorSubject, Observable, interval, map, scan, take } from 'rxjs';

type User = { name: string; email: string; items: { ammount: number; price: number }[] };

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  // timer: Observable<number> = interval(1000);
  // timerSignal: Signal<number> = toSignal(this.timer, { initialValue: 0 });

  user = new BehaviorSubject<User>({ name: 'Carlos', email: 'cbotest@gmail.com', items: [] });
  userSignal: Signal<User> = toSignal(this.user, { requireSync: true });

  userChanging = computed(() => {
    console.log('User Changing', this.userSignal());
  });

  userEmail = computed(() => this.userSignal().email);
  totalCart = computed(() => this.userSignal().items.reduce((acc, item) => acc + item.ammount * item.price, 0));

  addItem() {
    this.user.next({ ...this.user.value, items: [...this.user.value.items, { ammount: 1, price: 100 }] });
    // NOOO --> this.timer.subscribe((value) => console.log('Timer', value));
  }
}

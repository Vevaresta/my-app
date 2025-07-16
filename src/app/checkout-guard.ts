import { inject } from '@angular/core';
import { CanDeactivateFn } from '@angular/router';
import { CartService } from './cart-service';

export const checkoutGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  
  const cartService = inject(CartService);
  
  if (cartService.cart) {
      const confirmation = confirm(
        "You have pending items in your card. Do you want to continue?"
      );
      return confirmation;

  }
  return true;
};

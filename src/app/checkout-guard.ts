import { CanDeactivateFn } from '@angular/router';

export const checkoutGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  const confirmation = confirm(
    "You have pending items in your card. Do you want to continue?"
  );
  return confirmation;
};

import { Payment } from './Payment';

interface CreditCardPayment extends Payment {
  creditCardPayment(): void;
}

export { CreditCardPayment };

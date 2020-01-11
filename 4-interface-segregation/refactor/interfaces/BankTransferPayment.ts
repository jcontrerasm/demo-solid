import { Payment } from './Payment';

interface BankTransferPayment extends Payment {
  bankTransferPayment(): void;
}

export { BankTransferPayment };

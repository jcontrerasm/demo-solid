import { Payment } from './interfaces/Payment';

class BankTransfer implements Payment {

  public calculatePayment() {}

  public creditCardPayment() {
    // No se necesita.
  }

  public bankTransferPayment() {}

  public cashPayment() {
    // No se necesita.
  }
}

export { BankTransfer };

import { Payment } from './interfaces/Payment';

class Mastercard implements Payment {

  public calculatePayment() {}

  public creditCardPayment() {}

  public bankTransferPayment() {
    // No se necesita.
  }

  public cashPayment() {
    // No se necesita.
  }
}

export { Mastercard };

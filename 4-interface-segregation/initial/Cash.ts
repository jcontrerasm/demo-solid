import { Payment } from './interfaces/Payment';

class Cash implements Payment {

  public calculatePayment() {}

  public creditCardPayment() {
    // No se necesita.
  }

  public bankTransferPayment() {
     // No se necesita.
  }

  public cashPayment() {}
}

export { Cash };

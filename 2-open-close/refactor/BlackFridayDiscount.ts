import { Discount } from './Discount';

class BlackFridayDiscount implements Discount {

  public apply(price: number): number {
    return price * 0.4;
  }
}

export { BlackFridayDiscount };

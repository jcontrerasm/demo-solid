import { Discount } from './Discount';

class GoldDiscount implements Discount {

  public apply(price: number): number {
    return price * 0.2;
  }
}

export { GoldDiscount };

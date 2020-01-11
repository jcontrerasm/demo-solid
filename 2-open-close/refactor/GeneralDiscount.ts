import { Discount } from './Discount';

class GeneralDiscount implements Discount {

  public apply(price: number): number {
    return price * 0.5;
  }
}

export { GeneralDiscount };

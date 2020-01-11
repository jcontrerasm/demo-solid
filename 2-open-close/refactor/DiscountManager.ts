import { Discount } from './Discount';

class DiscountManager {

  public apply(price: number, discount: Discount): number {
    return discount.apply(price);
  }
}

export { DiscountManager };

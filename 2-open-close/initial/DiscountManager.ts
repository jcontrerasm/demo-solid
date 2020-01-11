import { Discount } from './Discount';
import { GoldDiscount } from './GoldDiscount';
import { BlackFridayDiscount } from './BlackFridayDiscount';

class DiscountManager {

  public apply(price: number, discount: Discount): number {
    return discount.apply(price);
  }

  public applyGold(price: number, discount: GoldDiscount): number {
    return discount.apply(price);
  }

  public applyBlackFriday(price: number, discount: BlackFridayDiscount): number {
    return discount.apply(price);
  }
}

export { DiscountManager };

import { CartItem } from "../shared/types";

export const  calcTotalPrice = (items: CartItem[]) => {
return items.reduce((sum, item) => {
    return sum + item.price * item.count;
  }, 0);
}
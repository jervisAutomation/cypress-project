import { BasePage } from "./BasePage";
import { HomePageSelectors } from "../Selectors/HomePageSelectors";

export class HomePage extends BasePage {
  addToCart(productToAddToCart: string){
    if(productToAddToCart === 'Sauce Labs Backpack'){
        this.click(HomePageSelectors.addToCartSauceLabsBackpackbutton);
    }
  }
  validateProductButton(button: string){
    if(button === 'Remove Sauce Labs Backpack button'){
        this.validateElement(HomePageSelectors.removeToCartSauceLabskBackpackButton);
    }
  }
}
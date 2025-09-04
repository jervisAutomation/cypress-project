import { HomePageSelectors } from "../Selectors/HomePageSelectors";

export class HomePage {
  addToCart(productToAddToCart: string){
    if(productToAddToCart === 'Sauce Labs Backpack'){
        HomePageSelectors.addToCartSauceLabsBackpackbutton().click();
    }
  }
  validateProductButton(button: string){
    if(button === 'Remove Sauce Labs Backpack button'){
        HomePageSelectors.removeToCartSauceLabskBackpackButton().should('be.visible').should('be.enabled');
    }
  }
}
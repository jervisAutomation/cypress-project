import { BasePage } from "./BasePage";
import { HomePageSelectors } from "../Selectors/HomePageSelectors";

export class HomePage extends BasePage {
  
  addToCart(productToAddToCart: string){
    if(productToAddToCart === 'Sauce Labs Backpack'){
        this.clickElement(HomePageSelectors.addToCartSauceLabsBackpackbutton);
    }
  }
  validateProductButton(button: string){
    if(button === 'Remove Sauce Labs Backpack button'){
        this.validateElement(HomePageSelectors.removeToCartSauceLabskBackpackButton);
    }
  }
   getSelector(selectorKey: string): () => Cypress.Chainable {
    const selector = HomePageSelectors[selectorKey as keyof typeof HomePageSelectors];
    if (!selector) {
      throw new Error(`Selector "${selectorKey}" not found in HomePageSelectors`);
    }
    return selector;
  }
}
export const homePage = new HomePage();
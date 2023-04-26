import CookiesPopupPage from '../Pages/CookiesPopupPage';

class HomePage{
    elements ={
        ibizaBtn : () => cy.xpath("//seat-car-selector-list-item/main/div[contains(@class, 'text')]", { timeout: 10000 })
    }

    GotoMainPage(){
        cy.visit('https://configurador.seat.es');
        CookiesPopupPage.CheckPopUp();
    }

    SelectCar(carBrand){
        this.elements.ibizaBtn().contains(carBrand).click();
    }
}
module.exports = new HomePage();
require('cypress-xpath')
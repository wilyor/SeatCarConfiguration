class CarDetailPage{
    elements ={
        carTitle : () =>cy.get('seat-headline-button-back > div > strong'),
        startcustomizationBtn : () =>cy.get('seat-carline-item > main > seat-button').eq(0)
    }

    CheckCarTitle(carBrand){
        this.elements.carTitle().should('have.text', carBrand);
    }

    StartCustomization(){
        this.elements.startcustomizationBtn().click({force: true});
    }
}
module.exports = new CarDetailPage();
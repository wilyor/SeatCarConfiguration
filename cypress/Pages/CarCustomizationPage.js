class CarCustomizationPage
{
    elements ={
        customizedPartTitle : () =>cy.get('section > header > seat-configuration-header > seat-headline-menu > seat-headline'),
        finishCustomizationBtn : () =>cy.get('footer seat-button')
    }

    CheckPartTitle(part){
        this.elements.customizedPartTitle().should('have.text', part);
    }

    Continue(){
        this.elements.finishCustomizationBtn().click({force: true});
    }
}
module.exports = new CarCustomizationPage();
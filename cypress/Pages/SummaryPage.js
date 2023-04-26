class SummaryPage{
    elements ={
        pagetitle : () => cy.get('seat-headline-button-back > div > strong'),
        configurationKey : () => cy.get('configuration-key'),
        totalPriceLbl : () => cy.get('seat-price-details')
    }

    CheckPageTitle(title){
        this.elements.pagetitle().should('have.text', title);
    }

    CheckConfigurationKeyExists(){
        this.elements.configurationKey().should('not.to.be.empty');
    }

    CheckPrice(label, price){
        this.elements.totalPriceLbl().contains(label).parent().next().should('have.text', price);
    }

}
module.exports = new SummaryPage();
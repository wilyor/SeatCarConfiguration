class CookiesPopupPage{

    CheckPopUp(){
        cy.wait(2000);
        cy.get('body').then($body => {
            if ($body.find("#onetrust-accept-btn-handler", { timeout: 10000 }).length > 0) {
              cy.get('#onetrust-accept-btn-handler').click();
            }
        });
    }
}
module.exports = new CookiesPopupPage();
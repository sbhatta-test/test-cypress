// cy.screenshot()
it("Add product to cart ", () => {
cy.screenshot()
 cy.visit(
   "https://ecommerce-playground.lambdatest.io/index.php?route=account/login"
 );
 cy.get('[id="input-email"]').type("lambdatest@yopmail.com");
 cy.get('[id="input-password"]').type("lambdatest");
 cy.get('[type="submit"]').eq(0).click();
 cy.get('[name="search"]').eq(0).type("VAIO");
 cy.get('[type="submit"]').eq(0).click();
 cy.contains("Sony VAIO").click();
 cy.get('[title="Buy now"]').click()
 cy.get('#checkout-cart').contains("Sony VAIO")
 cy.screenshot()
// / cy.get('a[href*="SONY VAIO"]').click()
});


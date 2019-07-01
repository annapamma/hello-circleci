context('Check Button Messages', () => {
  beforeEach(() => {
    cy.visit('localhost:5000/')
  });

  it("h3 inner text starts as 'Hello World!'", () => {
    cy.get('#message')
      .should('contain', 'Hello World!')
  });

  it("h3 says 'Goodbye!' when clicking Gotta Go button", () => {
      cy.get('#goodbye-button')
          .click();
      cy.get('#message')
          .should('contain', 'Goodbye!')
  });

  it("h3 says 'Hello World!' when clicking Wait button", () => {
      cy.get('#hello-button')
          .click();
      cy.get('#message')
          .should('contain', 'Hello World!')
  });
});

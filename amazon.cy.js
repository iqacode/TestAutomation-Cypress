describe('Amazon.com', () => {
  beforeEach(() => {
    cy.visit('https://www.amazon.com')
  })

  it('should search for a product and display results', () => {
    // Enter search query
    cy.get('#twotabsearchtextbox')
      .type('cypress testing{enter}')

    // Verify search results are displayed
    cy.get('[data-component-type="s-search-results"]')
      .should('be.visible')
  })

  it('should add a product to the cart', () => {
    // Search for a product
    cy.get('#twotabsearchtextbox')
      .type('iphone{enter}')

    // Click on the first product
    cy.get('[data-component-type="s-search-result"]')
      .first()
      .click()

    // Add the product to the cart
    cy.get('#add-to-cart-button')
      .click()

    // Verify success message
    cy.get('#huc-v2-order-row-confirm-text')
      .should('contain', 'Added to Cart')
  })

  it('should proceed to checkout', () => {
    // Search for a product
    cy.get('#twotabsearchtextbox')
      .type('laptop{enter}')

    // Click on the first product
    cy.get('[data-component-type="s-search-result"]')
      .first()
      .click()

    // Add the product to the cart
    cy.get('#add-to-cart-button')
      .click()

    // Click on the cart icon
    cy.get('#nav-cart-count-container')
      .click()

    // Proceed to checkout
    cy.get('#sc-buy-box-ptc-button')
      .click()

    // Verify checkout page is displayed
    cy.url()
      .should('include', '/checkout/')
  })
})

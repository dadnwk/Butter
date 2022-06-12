// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('productTotal', (value) => {
    cy.log(value)
	cy.get('.boost-pfs-filter-total-product').then(($ttl) => {        
        expect($ttl).to.have.text(value)
    })
})

//get a list of the attribute and evaluate its amount
Cypress.Commands.add('compareListLength', (attrList,  num) => {
	cy.get(attrList).should(($sel) => {
        expect($sel).to.have.length(num)
    })
})

//get a order of the list and check its value of the attribute
Cypress.Commands.add('checkListSelector', (attrList, num, attribute, value) => {
    cy.get(attrList).should(($sel) => {        
        const checkAttr = $sel.eq(num).attr(attribute)
        expect(checkAttr).to.contain(value)
    })
})

Cypress.Commands.add('getLabel', (label, ...args) => {
    cy.get(`[aria-label= ${label}]`, ...args)
})

Cypress.Commands.add('getDataId', (value) => {
    cy.get(`[data-id= ${value}]`)
})

Cypress.Commands.add('getDataValue', (value) => {
    cy.get(`[data-value= ${value}]`)
})

Cypress.Commands.add('getDataTestId', (value) => {
    cy.get(`[data-testid= ${value}]`)
})

/* //check a product price
Cypress.Commands.add('checkPrice', (selector, value) => {
    cy.log(value)
    cy.get(selector).should('match', value)
}) */

//check a default or selected value
Cypress.Commands.add('getSelected', (selector, attribute, value) => {
    cy.get(selector).then(($sel) => {
        const checkAttr = $sel.attr(attribute)        
        expect(checkAttr).to.contain(value)
    })
})

//get the brand list and compare
Cypress.Commands.add('compareListBybrand', (num) => {
	cy.get('[class="boost-pfs-filter-option-content boost-pfs-filter-has-searchbox"]> div> ul> li').should(($sel) => {
        expect($sel).to.have.length(num)
    })
})

Cypress.Commands.add('getIframeBody', () => {
    // get the iframe > document > body
    // and retry until the body element is not empty
    return cy
    .get('iframe[title="Field container for: Card number"]')
    // wraps "body" DOM element to allow
    // chaining more Cypress commands, like ".find(...)"
    // https://on.cypress.io/wrap
    //.then(cy.wrap)
  })

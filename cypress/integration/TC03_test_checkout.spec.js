/// <reference types='cypress'/>

import { type } from "os"

/* Buy a product from the details page */

describe('Buy products', () => {

    beforeEach(() => {
        cy.visit('/collections/dresses')
    })
    
    it('check-out', () => {
        //get a product and view its details
        cy.log('select a product and view its details')
        cy.getDataId('"4694592520237"').eq(0).click()
        cy.log('success!')        

        //select a size
        cy.getDataValue('"M"').click()

        //go to the checkout page
        cy.getDataTestId('"Checkout-button"').click()

        //fill out information
        cy.get('[data-backup="email_or_phone"]').type('boost@boost.com')
        cy.get('[data-backup="first_name"]').type('Boost')
        cy.get('[data-backup="last_name"]').type('Boost')
        cy.get('[data-backup="address1"]').type('Boost')                
        cy.get('[data-backup="address2"]').type('Area 43')
        cy.get('[data-backup="city"]').type('Danang')
        cy.get('[data-backup="zip"]').type('550000')
        cy.get('[type="submit"]').click()
        //click "continuew" button at Shipping tab
        cy.get('[type="submit"]').click()

        //fill out credit card and finish the checkout
        /* cy.get('iframe[title="Field container for: Card number"]> input[data-current-field="number"]').type('4242 4242 4242 4242')
        cy.get('[data-current-field="name"]').type('Boost')
        cy.get('[data-current-field="expiry"]').type('1223')
        cy.get('[data-current-field="verification_value"]').type('123')
        cy.get('[type="submit"]').eq(0).click() */
        cy.getIframeBody().find('[data-current-field="number"]').type('4242 4242 4242 4242')
    })
})
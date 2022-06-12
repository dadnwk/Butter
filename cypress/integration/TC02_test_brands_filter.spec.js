/// <reference types='cypress'/>

/* check filtering products by brands */

describe('Filter products by brands', () => {
    
    beforeEach(() => {
        cy.visit('/collections/dresses')
    })

    it('filter by checking the checkboxes', () => {
        cy.log('select the brand Burberry and check the number of its products')
        cy.get('button[role="checkbox"]').eq(0).click()
        cy.checkListSelector('[class="boost-pfs-filter-option-content boost-pfs-filter-has-searchbox"]> div> ul> li', 0, 'class','selected')
        //check the number of the product
        cy.compareListLength('[class="boost-pfs-filter-product-item-inner"]', 3)
        cy.productTotal('3 Products')
        cy.log('----------------------------------')

        //add more brands
        cy.log('select the brand Victoria Secret')
        cy.get('button[role="checkbox"]').eq(10).click()
        cy.checkListSelector('[class="boost-pfs-filter-option-content boost-pfs-filter-has-searchbox"]> div> ul> li', 10, 'class','selected')
        //check the number of the product
        cy.compareListLength('[class="boost-pfs-filter-product-item-inner"]', 8)
        cy.productTotal('8 Products')
        cy.log('----------------------------------')
    })

    it('search brands and check its values in the container', () => {        
        cy.log('enter the value "di" ')
        cy.getLabel('"Search Options"').type('di')        
        cy.compareListBybrand(2)
        cy.productTotal('38 Products')

        cy.get('button[role="checkbox"]').eq(1).click()
        cy.checkListSelector('[class="boost-pfs-filter-option-content boost-pfs-filter-has-searchbox"]> div> ul> li', 1, 'class','selected')
        //check the number of the product
        cy.compareListLength('[class="boost-pfs-filter-product-item-inner"]', 6)
        cy.productTotal('6 Products')        
        cy.log('----------------------------------')
    })
})
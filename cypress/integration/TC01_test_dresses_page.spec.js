/// <reference types='cypress'/>

/* check the Dresses page */

describe('Dress page', () => {
    
    beforeEach(() => {
        cy.visit('/collections/dresses')
    })

    it('check the dresses page', () => {
        //check the Vertical mode
        cy.get('[property="og:site_name"]').should('have.attr', 'content', 'Boost PFS Vertical')

        //check the header Dresses
        cy.get('[class="boost-pfs-filter-collection-header"]').should('contain', 'Dresses')

        //check the View_as
        cy.log('having 6 options of View_as')
        cy.compareListLength('[class="boost-pfs-filter-toolbar-item boost-pfs-filter-toolbar-type boost-pfs-filter-view_as_type_list_grid_multi_col boost-pfs-filter-display-type-d boost-pfs-filter-display-type-m"]> div> a', 6)
        cy.log('grid-3 as default')
        cy.getSelected('[title="Grid view 3 Columns"]', 'class', 'active')
        
        //check the sort values
        cy.log('having 9 sorting values')
        cy.compareListLength('[class="boost-pfs-filter-toolbar-item boost-pfs-filter-custom-sorting boost-pfs-filter-top-sorting"]> ul> li', 9)
        cy.log('A-Z as default')
        cy.getLabel('"Sort by"').should('contain', 'Alphabetically, A-Z')

        //check the product total
        cy.productTotal('38 Products')

        //check the number of the products on the page
        cy.log('check the number of the items on the first page')
        cy.compareListLength('[class="boost-pfs-filter-product-item-inner"]', 18)

        //check 10 filter available
        cy.log('check 10 filters available - Collection, Brands, Style, Color, Size, Price, Shape, Review Ratings, Percent Sale, Stock Status')
        cy.getLabel('"Filter by Collection"').should('have.text','Collection')        
        cy.getLabel('"Filter by Brands"').should('have.text','Brands')
        cy.getLabel('"Filter by Style"').should('have.text','Style')
        cy.getLabel('"Filter by Color"').should('have.text','Color')
        cy.getLabel('"Filter by Size"').should('have.text','Size')
        cy.getLabel('"Filter by Price"').should('have.text','Price')
        cy.getLabel('"Min value"').should('be.visible')
        cy.getLabel('"Max value"').should('be.visible')
        cy.getLabel('"Filter by Shape"').should('have.text','Shape')
        cy.getLabel('"Filter by Review Ratings"').should('have.text','Review Ratings')
        cy.getLabel('"Filter by Percent Sale"').should('have.text','Percent Sale')
        cy.getLabel('"Filter by Stock Status"').should('have.text','Stock Status')
    })

    it('check the number of the filter options', () => {
        cy.log('the number of the collections')
        cy.compareListLength('[class="boost-pfs-filter-option-multi-level-item boost-pfs-filter-option-first-level-item"]', 6)
                
        cy.log('the number of the brands')
        cy.compareListLength('[class="boost-pfs-filter-option-content boost-pfs-filter-has-searchbox"]> div> ul> li', 11)

        cy.log('the number of the styles')
        cy.compareListLength('[class="boost-pfs-filter-option-item-list boost-pfs-filter-option-item-list-single-list"]> li', 15)

        cy.log('the number of the styles')
        cy.compareListLength('[id="boost-pfs-filter-tree-pf-opt-color"]> div> ul> li', 10)

        cy.log('the number of the sizes')
        cy.compareListLength('[class="boost-pfs-filter-option-item-list boost-pfs-filter-option-item-list-box"]> li', 7)

        cy.log('the number of the shape selections')
        cy.compareListLength('[id="boost-pfs-filter-tree-pf-t-shape"]> div> ul> li', 5)

        cy.log('the number of the review ratings')
        cy.compareListLength('[class="boost-pfs-filter-option-item-list boost-pfs-filter-option-item-list-rating"]> li', 5)

        cy.log('the number of the percent sale checkboxes')
        cy.compareListLength('[id="boost-pfs-filter-tree-pf-ps-percent-sale"]> div> ul> li', 3)        
    })
})
describe('Dealerships Page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/dealerships'); //
    });

    it('Should display list of dealerships', () => {
        cy.get('[data-testid="list-view"]').should('be.visible');
        cy.get('[data-testid="list-item"]').should('have.length.greaterThan', 0);
    });

    it('Should filter dealerships by company name', () => {
        const searchTerm = 'Company XYZ';
        cy.get('[data-testid="search-input"]').type(searchTerm);
        cy.get('[data-testid="list-item"]').each(($item) => {
            cy.wrap($item).should('contain.text', searchTerm);
        });
    });
});

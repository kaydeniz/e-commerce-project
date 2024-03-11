describe('Main Page Test', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000//');
    });

    it('should display navbar', () => {
        cy.get('.bg-FF733C').should('exist');
    });

    it('should display landing view', () => {
        cy.get('.bg-1B1B1B').should('exist');
        cy.get('.text-white').should('contain', 'Excellent');
    });

    it('should display info view', () => {
        cy.get('.bg-white').should('exist');
        cy.get('.text-1B1B1B').should('contain', 'PAYLATER');
    });

    it('should navigate to register page when Register button is clicked', () => {
        cy.contains('Register').click();
        cy.url().should('include', '/register');
    });
});

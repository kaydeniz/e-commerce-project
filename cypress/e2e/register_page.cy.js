describe('Register Page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/register'); //
    });

    it('should fill the form and register user', () => {
        cy.get('[name="name"]').type('John Doe');
        cy.get('[name="company"]').type('Example Company');
        cy.get('[name="mobilePhoneNumber"]').type('07123789456');
        cy.get('[name="emailAddress"]').type('john@example.com');

        cy.get('[name="postcode"]').type(`AB`);
        cy.contains('AB10').click();
        cy.contains('AB10').click();

        cy.contains('PayLater').click()

        cy.contains('Register').click();

    });
});

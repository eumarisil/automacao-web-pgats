import { faker } from '@faker-js/faker'

//biblioteca cypress-xpath

describe('Automation Exercise', () => {
    it('Test Case 1 - Cadastrando usuário', () => {

        const firstName = faker.person.firstName();
        const lastName = faker.person.lastName();
        const email = faker.internet.email();
        const password = faker.internet.password();
        const company = faker.company.name();
        const address = faker.location.streetAddress();
        const zipCode = faker.location.zipCode();
        const mobile = faker.phone.number();

        cy.visit('https://automationexercise.com/')
        cy.get('a[href$=login]').click()

        cy.get('[data-qa="signup-name"]').type(firstName)
        cy.get('[data-qa="signup-email"]').type(email)
        cy.contains('button', 'Signup').click()

        cy.get('input[type=radio]').check('Mrs')
        cy.get('[data-qa="password"]').type(password, { log: false })

        cy.get('[data-qa="days"]').select('15')
        cy.get('[data-qa="months"]').select('November')
        cy.get('[data-qa="years"]').select('1988')

        cy.get('#newsletter').check()    
        cy.get('#optin').check()

        cy.get('[data-qa="first_name"]').type(firstName)
        cy.get('[data-qa="last_name"]').type(lastName)
        cy.get('[data-qa="company"]').type(company)
        cy.get('[data-qa="address"]').type(address)
        cy.get('[data-qa="address2"]').type('Cypress')
        cy.get('[data-qa="country"]').select('New Zealand')
        cy.get('[data-qa="state"]').type('Cypress')
        cy.get('[data-qa="city"]').type('Cypress')
        cy.get('[data-qa="zipcode"]').type(zipCode)
        cy.get('[data-qa="mobile_number"]').type(mobile)

        cy.contains('button', 'Create Account').click()

        cy.get('[data-qa="account-created"]').should('have.text', 'Account Created!')

        cy.get('[data-qa="continue-button"]').click()
        cy.get('b').should('contain', firstName)

    })    
});
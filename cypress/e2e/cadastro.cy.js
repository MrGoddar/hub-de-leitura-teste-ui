/// <reference types="cypress"/>
import { faker } from '@faker-js/faker';

describe('Funcionalidade: Cadadstro no hub de leitura', () => {
    
    beforeEach(() => {
        cy.visit('register.html')
    });

    it('Deve fazer cadastro com sucesso, usando função JS', () => {
        let email = `teste${Date.now()}@teste.com`
        cy.get('#name').type('Matheus')
        cy.get('#email').type(email)
        cy.get('#phone').type('922222222')
        cy.get('#password').type('Teste123!')
        cy.get('#confirm-password').type('Teste123!')
        cy.get('#terms-agreement').click()
        cy.get('#register-btn').click()
        //Resultado esperado
        cy.url().should('include', 'dashboard')
    });

    it.only('Deve fazer cadastro com sucesso, usando Faker', () => {
        let nome = faker.person.fullName()
        let email = faker.internet.email()
        cy.get('#name').type(nome)
        cy.get('#email').type(email)
        cy.get('#phone').type('922222222')
        cy.get('#password').type('Teste123!')
        cy.get('#confirm-password').type('Teste123!')
        cy.get('#terms-agreement').click()
        cy.get('#register-btn').click()
        //Resultado esperado
        cy.url().should('include', 'dashboard')
        cy.get('#user-name').should('contain', nome)
});

})
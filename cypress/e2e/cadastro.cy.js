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

    it('Deve fazer cadastro com sucesso, usando Faker', () => {
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

    it('Deve preencher cadastro com sucesso - usando comando customizado', () => {
        let email = `teste${Date.now()}@teste.com`
        cy.preencherCadastro(
            'Matheus Barros',
            email,
            '21988888888',
            'Teste@123',
            'Teste@123'
        )
        cy.url().should('include', 'dashboard')

    });

})
/// <reference types="cypress"/>
import user from "../fixtures/usuario.json"
describe('Funcionalidade: Login', () => {
    
    beforeEach(() => {
        cy.visit('login.html')
    });

    it('Deve fazer login com sucesso', () => {
        cy.get('#email').type('usuario@teste.com')
        cy.get('#password').type('user123')
        cy.get('#login-btn').click()
        cy.url().should('include', 'dashboard')
    });

    it('Deve fazer login com sucesso - usando comandos customizados', () => {
        cy.login('usuario@teste.com', 'user123')
    });

    it('Deve fazer login com sucesso com conta Admin - Usando comandos customizados', () => {
        cy.login('admin@biblioteca.com', 'admin123')
    });

    it('Deve fazer login com sucesso- fazendo importação de massa de dados', () => {
        cy.login(user.email, user.senha)
    });
});
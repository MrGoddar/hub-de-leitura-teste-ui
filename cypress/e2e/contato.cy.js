describe('Funcionalidade: Contato', () => {

  beforeEach(() => {
    cy.visit('index.html')
  });

  it('Deve preencher formulário de contato com sucesso', () => {
    cy.get('[name="name"]').type('Matheus')
    cy.get('[name="email"]').type('matheus@teste.com')
    cy.get('[name="subject"]').select('Parcerias')
    cy.get('[name="message"]').type('Teste 123')
    cy.get('#btn-submit').click()
    //resultado esperado 
    cy.get('#alert-container').should('be.visible').and('contain', 'Contato enviado com sucesso!')

  });

  it('Deve validar mensagem de erro ao enviar sem preencher nome', () => {

    cy.get('[name="email"]').type('matheus@teste.com')
    cy.get('[name="subject"]').select('Parcerias')
    cy.get('[name="message"]').type('Teste 123')
    cy.get('#btn-submit').click()
    //resultado esperado 
    cy.get('#alert-container').should('be.visible').and('contain', 'Por favor, preencha o campo Nome.')

  });


  it('Deve validar mensagem de erro ao enviar sem preencher e-mail', () => {
    cy.get('[name="name"]').type('Matheus')
    cy.get('[name="subject"]').select('Parcerias')
    cy.get('[name="message"]').type('Teste 123')
    cy.get('#btn-submit').click()
    //resultado esperado 
    cy.get('#alert-container').should('be.visible').and('contain', 'Por favor, preencha o campo E-mail.')
  });

  it('Deve validar mensagem de erro ao enviar sem selecionar o assunto', () => {
    cy.get('[name="name"]').type('Matheus')
    cy.get('[name="email"]').type('matheus@teste.com')

    cy.get('[name="message"]').type('Teste 123')
    cy.get('#btn-submit').click()
    //resultado esperado 
    cy.get('#alert-container').should('be.visible').and('contain', 'Por favor, selecione o Assunto')
  });

  it('Deve validar mensagem de erro ao enviar sem preencher a mensagem', () => {
    cy.get('[name="name"]').type('Matheus')
    cy.get('[name="email"]').type('matheus@teste.com')
    cy.get('[name="subject"]').select('Parcerias')
    cy.get('#btn-submit').click()
    //resultado esperado 
    cy.get('#alert-container').should('be.visible').and('contain', 'Por favor, escreva sua Mensagem')
  });
});
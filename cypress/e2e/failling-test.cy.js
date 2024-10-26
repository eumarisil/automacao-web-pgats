
describe('Cadastrar entradas e saídas com bugs', () => {

  beforeEach(() => {
    cy.visit('https://devfinance-agilizei.netlify.app')
  })

    it('Cadastrar uma nova transação de entrada', () => {
      cy.contains("Nova Transação").click()
      cy.get("#description").type("Mesada")
      cy.get("#amount").type(100)
      cy.get("#date").type("2023-02-01")
  
      cy.contains("Salvar").click()
      cy.get('tbody tr').contains('td.description', 'Mesada').should('exist');

  
    });
  
    it('Cadastrar uma nova transação de entrada - falha 2', () => {  
      cy.contains("Nova Transação").click()
      cy.get("#description").type("Mesada")
      cy.get("#amount").type(100)
      cy.get("#date").type("2023-02-01")
  
      cy.contains("Salvar").click()
      
      cy.get("tbody tr").should("have.length", 1)
    });  
  
    it('Cadastrar uma nova transação de entrada - falha 3', () => {
      cy.contains("Nova Transação").click()
      cy.get("#description").type("Mesada")
      cy.get("#amount").type(100)
  
      cy.get("#date").type("2023-01-20")
  
      cy.contains("Salvar").click()
      
     cy.get("tbody tr").should("have.length", 1)
    });
  
    it('Cadastrar uma nova transação de entrada - falha 4', () => {
  
      cy.contains("Nova Transação").click()
      cy.get("#description").type("Mesada")
      cy.get("#amount").type(100)
      cy.get("#date").type("2023-02-01")

      cy.contains("Salvar").click()
  
      cy.get("tbody tr").should("have.length", 1)
    });
  
    it('Cadastrar uma nova transação de entrada - falha 5', () => {  
      cy.contains("Nova Transação").click()
      cy.get("#description").type("Mesada")
      cy.get("#amount").type(100)
      cy.get("#date").type("2023-02-01")
  
      cy.contains("Salvar").click()
  
      cy.get("tbody tr").should("have.length", 1)
    });
  
    it('Cadastrar uma nova transação de entrada - falha 6', () => {
      cy.contains("Nova Transação").click()
      cy.get("#description").type("Mesada")
      cy.get("#amount").type(100)
      cy.get("#date").type("2023-02-01")
  
      cy.contains("Salvar").click()
  
      cy.get("tbody tr").should("have.length", 1)
    });
  }); 
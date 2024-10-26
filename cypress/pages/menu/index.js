class Menu {

    acessarProdutos() {
        cy.contains("Products").click()
    }

    acessarLoginCadastro(){
        cy.contains("Signup").click()
    }

    acessarContato(){
        cy.contains(`Contact us`).click()
    }

}

export default new Menu()
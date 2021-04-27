/*const { should } = require("chai")*/
//Inscription réussie
describe('back<market', function(){
    it(' inscription réussie',() =>{
        cy.wait(2000)
        cy.visit("https://preprod.backmarket.fr/register")
        cy.get('#email-signup').type("emmanoel@gmail.com")
        .should("have.value", "emmanoel@gmail.com")
        cy.get('#firstName-signup').type("emma")
        .should("have.value", "emma")
        cy.get('#lastName-signup').type("Jorge")
        .should("have.value", "Jorge")
        cy.get('#password-signup').type('Tralala1')//.click()
        cy.get('[data-test="signup-submit-button"]').click()
        
    })
})
    //Connexion réussie
    describe('back<market', function(){
        it(' connexion réussie',() =>{
            cy.wait(2000)
            cy.visit("https://preprod.backmarket.fr/register")
            cy.get('#email-signin').type("emmanoel@gmail.com")
            .should("have.value","emmanoel@gmail.com")
            cy.get('#password-signin').type("Tralal1")
            cy.get('[data-test="submit-button-login"]').click()
            
            
        })
    })
//Test 3 Inscription qui echoue
describe('back<market', function() {
    it('Inscription echouée', function() {
        cy.wait(2000)
        cy.visit("https://preprod.backmarket.fr/register")
        cy.get('#email-signup').type("emmanoel@gmail.com")
        .should("have.value", "emmanoel@gmail.com")
        cy.get('#firstName-signup').type("emma")
        .should("have.value", "emma")
        cy.get('#lastName-signup').type("Jorge")
        .should("have.value", "Jorge")
        cy.get('#password-signup').type('Tralala12')//.click()
        cy.get('[data-test="signup-submit-button"]').click()
        cy.wait(1000)
      cy.contains('Identifiant ou mot de passe invalide')
    })
  })



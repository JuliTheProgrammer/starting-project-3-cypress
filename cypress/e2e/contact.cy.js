/// <reference types="Cypress"/>

describe("test contact form", () => {
   /*
    it("should be able to fomit the form", () => {
        cy.visit("http://localhost:5173/about")
        //Contact form
        cy.get("[data-cy='contact-input-message']").type("This is a very nice website")
        cy.get("[data-cy='contact-input-name']").type("Julian")
        cy.get("[data-cy='contact-input-email']").type("juli.leipert@gmail.com")

        //Create btn submit alias
        cy.get("[data-cy='contact-btn-submit']").as("submitBtn")
        cy.get("@submitBtn").contains("Send Message").then((el) => {
            expect(el.attr("disabled")).to.be.undefined
            expect(el.text()).to.eq("Send Message")
        })
        // cy.get("@submitBtn").contains("Send Message").and("not.have.attr", "disabled")
        //Submit the form
        //cy.get("@submitBtn").click()
        cy.get("[data-cy='contact-input-email']").type("juli.leipert@gmail.com{enter}")
        cy.get("@submitBtn").should("have.attr", "disabled")
        
    })
    */
    
    it("should validate the form input", () => {
        cy.visit("/about")
        cy.get("[data-cy='contact-btn-submit']").as("submitBtn")
        //Submitting the empty form 
        /*
        cy.get("@submitBtn").then((el) => {
            expect(el).to.not.have.attr("disabled")
            expect(el).to.not.equal("Sending...")
        }) */
        cy.get("data-cy='contact-input-message']").focus().blur()
        cy.screenshot()
        cy.get("data-cy='contact-input-message']").parent().then((el) => {
            expect(el.attr).to.contains("invalid")
        })
        cy.get("data-cy='contact-input-message']").parent().should("have.attr", "class").and("match", /invalid/)
        cy.get("data-cy='contact-input-message']").parent().should((el) => {
            expect(el.attr("class")).contain("invalid")
        })
    })
})
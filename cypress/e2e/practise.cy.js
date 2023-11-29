/// <reference types="Cypress"/>

describe("practising testing", () => {
    it("should be able to navigate between pages", () => {
        cy.visit("http://localhost:5173/")
        cy.get("[data-cy='header-about-link']").as("aboutLink").click() // about page
        cy.location("pathname").should("eq", "/about")

        cy.go("back")
        cy.location("pathname").should("eq", "/") // home page
        cy.get("[data-cy='header-home-link']").click() // about page

        cy.get("@aboutLink")
        cy.location("pathname").should("eq", "/")

    })

    it("should be able to fill out the form", () => {
        cy.visit("http://localhost:5173/about")

        //message text area
        cy.get("[data-cy='contact-input-message']").as("inputField").type("Some input")
        cy.get("[data-cy='contact-input-name']").as("nameField").type("John Doe")
        cy.get("[data-cy='contact-input-email']").as("emailField").type("john@gmail.com")

        cy.get("[data-cy='contact-btn-submit']").as("submitBtn").should((el) => {
            expect(el).to.not.have.attr("disabled")
            expect(el).to.contain("Send Message")
        })

        //validate sending
        cy.get("@submitBtn").click()
        cy.get("@submitBtn").should((el) => {
            expect(el).to.have.attr("disabled")
            expect(el).to.contain("Sending...")
        })

        cy.get("@emailField").type("john@gmail.com{enter}")
        cy.get("@submitBtn").should((el) => {
            expect(el).to.have.attr("disabled")
            expect(el).to.contain("Sending...")
        })
    })

    it("should be able to focus and blur", () => {
        cy.visit("http://localhost:5173/about")

        //focus the message
        cy.get("[data-cy='contact-input-message']").as("inputMessage").focus().blur().parent().should((el) => {
            expect(el).to.have.attr("class").contains("invalid")
        })

        //focus the name
        cy.get("[data-cy='contact-input-name']").focus().blur().should((el) => {
            expect(el).to.have.attr("invalid")
        })
        //focus the email


    })
})
// testing the form

describe("Creating a new pizza order", () =>{
    beforeEach(()=>{
        cy.visit("http://localhost:3001/pizza")
    })
    const nameInput = () => cy.get("input[name=name]");
    const emailInput = () => cy.get("input[name=email]");
    const sizeInput = () => cy.get("select[name=size]");
    const pepperoniInput = () => cy.get("input[name=pepperoni]");
    const sausageInput = () => cy.get("input[name=sausage]");
    const mushroomsInput = () => cy.get("input[name=mushrooms]");
    const peppersInput = () => cy.get("input[name=peppers]");
    const glutenInput = () => cy.get("input[name=gluten]");
    const specialInput = () => cy.get("input[name=special]");
    const submitButton = () => cy.get(`button[id="order-button"]`);

    it("sanity check", ()=>{
        expect(true).to.equal(true);
        expect({}).not.to.equal({});
    })
    
    it("shows expected elements", () =>{
        nameInput().should("exist");
        emailInput().should("exist");
        sizeInput().should("exist");
        pepperoniInput().should("exist");
        sausageInput().should("exist");
        mushroomsInput().should("exist");
        peppersInput().should("exist");
        glutenInput().should("exist");
        specialInput().should("exist");
        submitButton().should("exist");
        cy.contains(/order/i).should("exist");
    })

    describe("Filling out the fields", () =>{
        it("can navigate to the site", () =>{
            cy.url().should("include", "localhost");
        })
        it("submit button starts out disabled", () =>{
            submitButton().should("be.disabled");
        })
        it("allows for entries in the input fields", () =>{
            nameInput()
            .should("have.value", "")
            .type("Lisa")
            .should("have.value", "Lisa");
            emailInput()
            .should("have.value", "")
            .type("ldespain@cox.net")
            .should("have.value", "ldespain@cox.net");
            pepperoniInput()
            .should("not.be.checked")
            .check()
            .should("be.checked");
            sausageInput()
            .should("not.be.checked")
            .check()
            .should("be.checked");
            mushroomsInput()
            .should("not.be.checked")
            .check()
            .should("be.checked");
            peppersInput()
            .should("not.be.checked")
            .check()
            .should("be.checked");
            glutenInput()
            .should("not.be.checked")
            .check()
            .should("be.checked");
            specialInput()
            .should("have.value", "")
            .type("Testing the special instructions field")
            .should("have.value", "Testing the special instructions field");
        })
        it("submit button enables when all the required fields are filled out", () =>{
            nameInput().type("Lisa");
            emailInput().type("ldespain@cox.net");
            sizeInput().select("small");
            submitButton().should("not.be.disabled");
        })



    })

    describe("adding a new order", () =>{
        it("can add a new order", () =>{
            nameInput().type("Lisa");
            emailInput().type("ldespain@cox.net");
            sizeInput().select("small");
            submitButton().click();
        })
    })


})
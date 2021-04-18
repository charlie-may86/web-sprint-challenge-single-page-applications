describe("Pizza App", () => {
  it("does not do much", () => {
    expect(true).to.equal(true);
  });

  beforeEach(() => {
    cy.visit("http://localhost:3000/pizza");
  });

  const nameInput = () => cy.get('input[name="name"]');
  const sampleText = "This is sample text";
  it("The name element exist and can recieve text", () => {
    nameInput().should("exist");
    nameInput().type(sampleText);
  });

  const peperoniInput = () => cy.get('input[name="peperoni"]');
  const sausageInput = () => cy.get('input[name="sausage"]');

  it("can select multiple toppins", () => {
    peperoniInput().click();
    sausageInput().click();
  });

  const submitButton = () => cy.get(".orderButton");
  it("the submit button exist and get can submit an order", () => {
    submitButton().should("exist");
    submitButton().click();
  });
});

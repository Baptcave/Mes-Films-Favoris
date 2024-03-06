const generateUniqueMail = () => {
  const timestamp = new Date().getTime();
  return `amelie${timestamp}@poulain.com`;
};

describe("SignUp", () => {
  before(() => {
    cy.viewport("macbook-15");
  });

  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();

    cy.visit("/");
  });

  it("unlogged user lands on login page", () => {
    cy.contains(/mes films favoris/i)
      .should("exist")
      .and("be.visible");
  });

  it("displays empty errors", () => {
    cy.get("[id=signUpBtn]").click();
    cy.wait(2000);

    cy.contains(/vous n'avez rentré aucune information/i)
      .should("exist")
      .and("be.visible");
  });

  it.only("can create account", () => {
    cy.intercept("POST", "/users").as("createUser");

    const uniqueMail = generateUniqueMail();
    const firstname = "Amélie";

    cy.get("[id=signUp-firstname]").type(firstname);
    cy.get("[id=signUp-lastname]").type("Poulain");
    cy.get("[id=signUp-age]").type("28");
    cy.get("[id=signUp-city]").type("Paris");
    cy.get("[id=signUp-country]").type("France");
    cy.get("[id=signUp-mail]").type(uniqueMail);
    cy.get("[id=signUp-password]").type("jaidutravail");
    cy.get("[id=signUp-confirm_password]").type("jaidutravail");

    cy.get("[id=signUpBtn]").click();

    cy.wait("@createUser").its("response.statusCode").should("equal", 201);

    cy.contains(`Bienvenue, ${firstname}, vous pouvez désormais vous connecter`)
      .should("exist")
      .and("be.visible");
  });
});

import Login from "./Login";
import { BrowserRouter as Router } from "react-router-dom";

describe("<Login />", () => {
  it("renders", () => {
    cy.mount(
      <Router>
        <Login />
      </Router>
    );
    cy.get("[id=login-email]").should("have.attr", "placeholder", "mail");
    cy.get("[id=login-password]").should("have.attr", "placeholder", "mot de passe");
  });
});

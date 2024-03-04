import MyMovieSelected from "./MyMovieSelected";
import { MovieTotalFromAPI } from "../../types/MovieTotalFromAPI";

describe("<MyMovieSelected />", () => {
  it("mounts properly", () => {
    cy.fixture("movieTotalFromAPI").then((movieFixture: MovieTotalFromAPI) => {
      cy.mount(<MyMovieSelected movie={movieFixture} />);

      cy.get("[data-t=MyMovieSelected-movieContainer]").should("have.not.css", "width", "0");
      cy.get("[data-t=MyMovieSelected-movieContainer]").should("have.not.css", "height", "0");
      cy.get("[data-t=MyMovieSelected-title").should("contain", "Titre :");
      cy.get("[data-t=MyMovieSelected-year").should("contain", "Date de sortie :");
      cy.get("[data-t=MyMovieSelected-length").should("contain", "Durée :");
      cy.get("[data-t=MyMovieSelected-imdb_note").should("contain", "Note imdb :");
      cy.get("[data-t=MyMovieSelected-resume").should("contain", "Résumé :");
    });
  });

  it("renders with correct styling", () => {
    cy.fixture("movieTotalFromAPI").then((movieFixture: MovieTotalFromAPI) => {
      cy.mount(<MyMovieSelected movie={movieFixture} />);

      cy.get("img").should("have.not.css", "width", "0");
      cy.get("[data-t=MyMovieSelected-movieCard]").should(
        "have.css",
        "background-color",
        "rgb(163, 210, 239)"
      );
    });
  });

  it("renders with correct informations from props", () => {
    cy.fixture("movieTotalFromAPI").then((movieFixture: MovieTotalFromAPI) => {
      cy.mount(<MyMovieSelected movie={movieFixture} />);

      cy.get("img").should("have.attr", "alt", `image de ${movieFixture.title_fr}`);
      cy.get("[data-t=MyMovieSelected-title").should("contain", movieFixture.title_fr);
      cy.get("[data-t=MyMovieSelected-year").should("contain", movieFixture.year);
      cy.get("[data-t=MyMovieSelected-length").should("contain", movieFixture.length);
      cy.get("[data-t=MyMovieSelected-imdb_note").should("contain", movieFixture.imdb_note);
      cy.get("[data-t=MyMovieSelected-resume").should("contain", movieFixture.resume);
    });
  });
});

import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import MovieSelected from "@/components/Search/MovieSelected";

describe("MovieSelected", () => {
  it("renders correctly", () => {
    const res = render(
      <MovieSelected
        movieSelected={{
          id: "1",
          title: "Matrix",
          runtime: 135,
          release_date: "1999-03-31",
          vote_average: 8,
          poster_path: "/pEoqbqtLc4CcwDUDqxmEDSWpWTZ.jpg",
          overview:
            "Programmeur anonyme dans un service administratif le jour, Thomas Anderson devient Neo la nuit venue"
        }}
      />
    );

    expect(res.baseElement).toMatchSnapshot();
  });
});

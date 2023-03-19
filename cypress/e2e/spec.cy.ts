describe("template spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080/");
  });

  it("Search page with header is displayed", () => {
    cy.contains("h1", "Find your movie");
  });

  it('Searches for "action" genre and finds results', () => {
    cy.intercept("https://tame-erin-pike-toga.cyclic.app/movies").as(
      "fetchMovies"
    );
    cy.get("#search-movie-input").type("action");
    cy.get("#search-by-toggle").contains("genre").click();
    cy.wait("@fetchMovies").then((interception: any) => {
      // @ts-ignore
      expect(interception.response.statusCode).to.eq(200);
      cy.get(".movies__container").should("be.visible");
    });
  });
});

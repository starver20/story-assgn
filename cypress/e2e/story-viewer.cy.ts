describe("Story Viewer", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should open story viewer when clicking on a user story", () => {
    cy.get(".story-avatar").first().click();
    cy.get(".story-viewer").should("be.visible");
    cy.get(".story-progress").should("be.visible");
    cy.get(".story-loading").should("exist");
    cy.get(".story-image").should("not.have.class", "hidden");
  });

  it("should navigate to next story on click", () => {
    cy.get(".story-avatar").first().click();
    cy.get(".story-loading").should("exist");
    cy.get(".story-image").should("not.have.class", "hidden");
    cy.get(".story-nav-right").click();
    cy.get(".story-loading").should("exist");
    cy.get(".story-image").should("not.have.class", "hidden");
    cy.get(".story-progress-bar").first().should("have.class", "completed");
    cy.get(".story-progress-bar").eq(1).should("have.class", "active");
  });

  it("should navigate to previous story on click", () => {
    cy.get(".story-avatar").first().click();
    cy.get(".story-loading").should("exist");
    cy.get(".story-image").should("not.have.class", "hidden");
    cy.get(".story-nav-right").click();
    cy.get(".story-loading").should("exist");
    cy.get(".story-image").should("not.have.class", "hidden");
    cy.get(".story-nav-left").click();
    cy.get(".story-loading").should("exist");
    cy.get(".story-image").should("not.have.class", "hidden");
    cy.get(".story-progress-bar").first().should("have.class", "active");
    cy.get(".story-progress-bar").eq(1).should("not.have.class", "completed");
  });

  it("should pause and resume story progress", () => {
    cy.get(".story-avatar").first().click();
    cy.get(".story-loading").should("exist");
    cy.get(".story-image").should("not.have.class", "hidden");
    cy.get(".story-pause-button").click();
    cy.get(".story-progress-bar.active").should("have.class", "paused");
    cy.get(".story-pause-button").click();
    cy.get(".story-progress-bar.active").should("not.have.class", "paused");
  });

  it("should close story viewer when clicking close button", () => {
    cy.get(".story-avatar").first().click();
    cy.get(".story-viewer").should("be.visible");
    cy.get(".story-close-button").click();
    cy.get(".story-viewer").should("not.exist");
  });
});

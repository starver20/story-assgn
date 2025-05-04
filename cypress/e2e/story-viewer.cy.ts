describe("Story Viewer", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should open story viewer when clicking on a user story", () => {
    // Click on the first user's story
    cy.get(".story-avatar").first().click();

    // Verify story viewer is open
    cy.get(".story-viewer").should("be.visible");
    cy.get(".story-progress").should("be.visible");

    // Wait for loading state to finish and image to be visible
    cy.get(".story-loading").should("exist");
    cy.get(".story-image").should("not.have.class", "hidden");
  });

  it("should navigate to next story on click", () => {
    cy.get(".story-avatar").first().click();

    // Wait for loading state to finish
    cy.get(".story-loading").should("exist");
    cy.get(".story-image").should("not.have.class", "hidden");

    // Click right side to go to next story
    cy.get(".story-nav-right").click();

    // Wait for next story to load
    cy.get(".story-loading").should("exist");
    cy.get(".story-image").should("not.have.class", "hidden");

    // Verify progress bars
    cy.get(".story-progress-bar").first().should("have.class", "completed");
    cy.get(".story-progress-bar").eq(1).should("have.class", "active");
  });

  it("should navigate to previous story on click", () => {
    cy.get(".story-avatar").first().click();

    // Wait for loading state to finish
    cy.get(".story-loading").should("exist");
    cy.get(".story-image").should("not.have.class", "hidden");

    // Go to next story first
    cy.get(".story-nav-right").click();

    // Wait for next story to load
    cy.get(".story-loading").should("exist");
    cy.get(".story-image").should("not.have.class", "hidden");

    // Then go back
    cy.get(".story-nav-left").click();

    // Wait for previous story to load
    cy.get(".story-loading").should("exist");
    cy.get(".story-image").should("not.have.class", "hidden");

    // Verify progress bars
    cy.get(".story-progress-bar").first().should("have.class", "active");
    cy.get(".story-progress-bar").eq(1).should("not.have.class", "completed");
  });

  it("should pause and resume story progress", () => {
    cy.get(".story-avatar").first().click();

    // Wait for loading state to finish
    cy.get(".story-loading").should("exist");
    cy.get(".story-image").should("not.have.class", "hidden");

    // Click pause button
    cy.get(".story-pause-button").click();

    // Verify pause state
    cy.get(".story-progress-bar.active").should("have.class", "paused");

    // Click resume button
    cy.get(".story-pause-button").click();

    // Verify resume state
    cy.get(".story-progress-bar.active").should("not.have.class", "paused");
  });

  it("should close story viewer when clicking close button", () => {
    cy.get(".story-avatar").first().click();

    // Verify story viewer is open
    cy.get(".story-viewer").should("be.visible");

    // Click close button
    cy.get(".story-close-button").click();

    // Verify story viewer is closed
    cy.get(".story-viewer").should("not.exist");
  });
});

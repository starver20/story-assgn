// Import commands.js using ES2015 syntax:
import "./commands";

// Extend Cypress namespace
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface Chainable {
      // Add custom commands here if needed
    }
  }
}

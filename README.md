# Instagram-like Story Viewer

A modern, performant implementation of an Instagram-like story viewer built with React, TypeScript, and Vite.

## Live Demo

Check out the live application: [Story Viewer Demo](https://splendid-sopapillas-64dd00.netlify.app/)

## Features

- Smooth story viewing experience with progress bars
- Pause/Resume functionality
- Navigation between stories and users
- Responsive design
- Loading states and error handling
- End-to-end testing with Cypress

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <https://github.com/starver20/story-assgn.git>
cd story-assgn
```

2. Install dependencies:

```bash
npm install
```

### Running the Application

1. Start the development server:

```bash
npm run dev
```

2. Open your browser and navigate to `http://localhost:5173`

### Running Tests

1. Start the development server in one terminal:

```bash
npm run dev
```

2. In another terminal, run the Cypress tests:

```bash
npx cypress open
```

## Design Choices and Optimizations

### Performance Optimizations

1. **Image Loading**

   - Implemented progressive image loading with loading states
   - Error handling for failed image loads

2. **Animation**

   - Used CSS transforms for animations

3. **State Management**
   - Efficient state updates using React hooks
   - Memoized callbacks to prevent unnecessary re-renders
   - Clean separation of concerns with custom hooks

### Scalability Considerations

1. **Component Architecture**

   - Modular component design for easy maintenance
   - Reusable components and hooks
   - Clear separation of UI and business logic

2. **Type Safety**

   - Full TypeScript implementation
   - Strong typing for props and state
   - Interface definitions for better code maintainability

3. **Testing Strategy**
   - End-to-end tests with Cypress
   - Test coverage for critical user flows

### User Experience

1. **Smooth Transitions**

   - Progress bar animations
   - Loading states for better feedback

2. **Responsive Design**

   - Mobile-first approach
   - Flexible layouts
   - Touch-friendly navigation

3. **Error Handling**
   - Graceful error states
   - User-friendly error messages
   - Fallback UI for failed loads

## Tech Stack

- React
- TypeScript
- Vite
- Cypress

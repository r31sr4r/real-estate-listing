
# Real Estate Listings App

  
## Overview
  

This project is a Real Estate Listings application built with React using Create React App as the starting point. This framework provides an initial structure and configuration, allowing us to focus on building the application features without spending time on the initial setup.

## Architecture

The application is structured to follow best practices in React development. Below are the main components and their responsibilities:
  
### 1. **API Integration**

We use **Axios** for making API calls to fetch real estate listings. The API endpoint provides us with necessary listing data, which is then used throughout the application.

### 2. **Component Design**

We started with components that combined all the logic and UI together, and later refactored them for better separation of concerns. The main components include:

-   **ListingsPage**: Displays a grid of real estate listings and includes filtering capabilities.
-   **ListingItem**: Represents a single listing card with basic information and a button to view details.
-   **ListingDetail**: Displays detailed information about a specific listing, including images and a contact form.
-   **ContactForm**: Allows users to submit inquiries about a listing.
-   **ListingFilter**: Provides filtering options for the listings based on criteria like bedrooms, bathrooms, and price range.

### 3. **State Management**

We are using React's built-in `useState` and `useEffect` hooks to manage component states and lifecycle methods. Additionally, we have created a custom context for managing saved properties:

-   **SavedPropertiesContext**: This context provides functionality to save and manage favorite listings, enabling users to easily access them later.

### 4. **Validation**

Form validation is handled using **Yup**, which ensures that the contact form fields meet specified requirements before submission.

  
## Design Patterns and Principles

Throughout the development of this application, we adhered to the following principles and patterns:

-   **Component Reusability**: Components are designed to be reusable across different parts of the application.
-   **Separation of Concerns**: Logic, presentation, and state management are separated into different components and hooks for clarity and maintainability.
-   **Test-Driven Development**: We wrote tests for key functionalities, ensuring reliability and helping to catch errors early in the development process.

## Testing

We implemented tests for core functionalities using **Jest** and **React Testing Library**. Key aspects tested include:

-   API calls and responses.
-   Component rendering and interactions.
-   Form validation logic.

## UI Framework

The application utilizes **Material-UI** (MUI) for its design components. MUI offers a robust set of pre-styled components that adhere to Material Design principles, allowing for a consistent and responsive UI. We chose MUI because it:

-   Provides ready-to-use components that speed up development.
-   Offers customization options to tailor the design to our needs.
-   Ensures accessibility and responsive design out of the box.

## Conclusion

This Real Estate Listings application exemplifies modern React development practices while providing users with a seamless experience for exploring and inquiring about real estate listings.
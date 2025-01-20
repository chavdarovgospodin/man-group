# Project Setup and Overview

This project uses **Vite** with **React** and **TypeScript** for the frontend and a **Node.js** server to serve ESG data.(Initial setup aprox 5-10 minutes)

## Technology Choices

- **Vite & TypeScript**: Vite is used for fast bundling and development, while TypeScript provides static typing for better maintainability and scalability.
- **Node.js**: The backend is built with Node.js to serve ESG data in JSON format. It uses **Express** to handle HTTP requests.
- **React-Query**: React-Query is used for **data fetching** and **state management**
- **MUI**: MUI (Material UI) is used for **styling**
- **concurrently**: concurrently package to run both React and Node with one command

## Frontend and Backend Responsibilities

- **Frontend (React + Vite)**:
  - Displays ESG data fetched via **React-Query**.
  - Styled with **MUI** for consistency and responsiveness.
- **Backend (Node.js)**:
  - Serves ESG data as JSON to the frontend.
  - Handles requests using **Express.js**.

## Assumptions

Lack of Unique Identifiers (IDs): The data does not contain unique identifiers (IDs) for each company or ESG score entry. As a result, the filtering and manipulation of data may require additional logic to ensure uniqueness, which leads to unexpected behaviour when filtering and highlighting scores.

## Running the Project

npm install
npm run dev

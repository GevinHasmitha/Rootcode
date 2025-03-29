# Wallet App

This repository contains the Wallet App, a full-stack application designed to manage expenses efficiently. The app consists of a React frontend and a Node.js backend with Express and LokiJS.

## Features

- Create, edit, and delete expenses.
- Categorize expenses.
- Responsive UI using Material-UI.
- Backend API with Express and LokiJS.

## Installation

Ensure you have Node.js and npm installed before proceeding.

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Open your browser and go to `http://localhost:3000`.

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm start
   ```
4. The server will run on `http://localhost:5000`.

## API Endpoints

- `GET /expenses` - Fetch all expenses.
- `POST /expenses` - Add a new expense.
- `PUT /expenses/:id` - Update an existing expense.
- `DELETE /expenses/:id` - Remove an expense.

## Technologies Used

- **Frontend:** React, Material-UI, Context API
- **Backend:** Node.js, Express, LokiJS

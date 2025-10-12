# Recipe Sharing App (Docker)

This repository contains a small recipe sharing application (frontend + backend) and Docker configuration to run the full stack locally using Docker Compose.

Quick start
1. From the project root run:

```powershell
docker-compose up --build
```

2. Open the frontend in your browser:

- http://localhost:3000

3. Useful backend endpoints:

- Health: http://localhost:5000/api/health
- Recipes: http://localhost:5000/api/recipes

Stop the stack:

```powershell
docker-compose down
```

Notes
- The backend uses an on-disk SQLite file persisted in a Docker named volume `backend-data`.
- `VITE_API_URL` is set at build time in `docker-compose.yml` so the frontend is built to talk to the backend at `http://localhost:5000`.
# Assignment #5 - Dockerize a Recipe Sharing Application

A full-stack recipe sharing application with React frontend and Node.js backend.

## Your Assignment
Your task is to containerize this application using Docker and Docker Compose. You'll need to create:
1. `frontend/Dockerfile` - To containerize the React app
2. `backend/Dockerfile` - To containerize the Node.js API
3. `docker-compose.yml` - To orchestrate both services

Once completed, users should be able to run the entire application with a single command: `docker-compose up`.

Good luck! 🚀

## Local Development Setup

### Prerequisites
- Node.js 16 or higher
- npm

### Running the Application Locally

1. **Start the Backend:**
```bash
cd backend
npm install
npm start
```
Backend will run on `http://localhost:8080`. You can preview all recipes at `http://localhost:8080/api/recipes`.

2. **Start the Frontend (in a new terminal)**:
```bash
cd frontend
npm install
npm run dev
```
Frontend will run on `http://localhost:3000` (or the next available port).

3. **Test the Application**:
    - Visit the URL shown in your terminal (Usually `http://localhost:3000`)
    - You should see sample recipes loaded
    - Try adding a new recipe using the form
    - Refresh the page to verify data persistence
    - You can also see that it has been added in the backed by visiting or refreshing `http://localhost:8080/api/recipes`

## API Endpoints
- `GET /api/recipes` - Get all recipes
- `GET /api/recipes/:id` - Get single recipe
- `POST /api/recipes` - Create new recipe
- `DELETE /api/recipes/:id` - Delete recipe
- `GET /api/health` - Health check

## Project Structure
```bash
recipe-app/
├── frontend/       # React application (Vite)
├── backend/        # Node.js/Express API
└── README.md       # This file
```
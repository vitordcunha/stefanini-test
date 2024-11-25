# **Fullstack Technical Evaluation**

This is a full-stack project designed to search for movies using a public API and log user queries in a database. The application includes a Python-based backend, a ReactJS frontend, and uses Docker for containerization.

---

## **Features**

- **Backend**:

  - RESTful API with endpoints for movie search and query history retrieval.
  - Integration with [The One API](https://the-one-api.dev) for movie data.
  - Logging user queries (name, movie title, and timestamp) into MongoDB.

- **Frontend**:

  - Page 1: Form for user input (name and movie title).
  - Page 2: Displays a table of past queries.

---

## **Technologies Used**

### Backend

- Python
- FastAPI
- MongoDB

### Frontend

- ReactJS
- NextJS

### Infrastructure

- Docker & Docker Compose

---

## **Running the project**

### Requirements

- Docker
- Make

### Running the project

1. Set the environment variables in the `backend/.env.local` file.

```bash
MONGODB_URL=mongodb://mongodb:27017
MONGODB_DATABASE=movie_db
API_URL=http://backend:8000
ACCESS_TOKEN=<your_access_token>
```

2. Set the environment variables in the `frontend/.env.local` file.

```bash
API_URL=http://backend:8000
```

3. Run the project

```bash
make run-dev
```

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

```bash
make run-dev
```

---

### Stopping the project

```bash
make stop
```

# StudyFlow — Student Productivity Web App

StudyFlow is a student productivity web application designed to help students organize their academic tasks, manage study goals, monitor study progress, and access useful learning resources.

## Features

* **Dashboard:** View an overview of study activities.
* **Task Management:** Add, complete, and delete tasks.
* **Task Priorities:** Assign priorities to tasks using a dropdown list.
* **Study Goals:** Manage academic goals.
* **Study Progress:** Monitor study progress.
* **Study Resources:** Browse and search learning resources.
* **Pagination:** Navigate through resources across multiple pages.
* **Study Places:** Explore study locations.
* **Profile:** View and manage profile information.
* **REST API:** Retrieve study resources from the backend.

## Technologies Used

* JavaScript
* React
* Vite
* Tailwind CSS
* Framer Motion
* Node.js
* Express.js
* RESTful API
* Git and GitHub

## Project Structure

```text
StudyFlow/
├── src/
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── server.js
├── package.json
├── StudyFlow_ERD.tex
├── StudyFlow_ERD.pdf
└── README.md
```

*Note: The folders and files shown above describe the main project structure; some folders may contain additional files.*

## Prerequisites

Install Node.js and npm before running the project.

## Installation

Clone the repository or open the project folder, then run:

```bash
npm install
```

## Running the Application

### 1. Start the frontend

Open a terminal in the project folder and run:

```bash
npm run dev
```

Open the local URL displayed by Vite in your browser.

### 2. Start the backend

Open a second terminal in the same project folder and run:

```bash
node server.js
```

The backend should run at:

```text
http://localhost:5000
```

Keep both terminals running while using the application.

## REST API

The application provides a study resources endpoint:

```text
GET /api/resources?page=1&limit=2
```

Example local URL:

```text
http://localhost:5000/api/resources?page=1&limit=2
```

The endpoint returns resource data in JSON format and supports pagination through the `page` and `limit` query parameters.

## Entity-Relationship Diagram

The project's proposed database design is available in `StudyFlow_ERD.pdf`. The corresponding LaTeX source is available in `StudyFlow_ERD.tex`.

## Version Control

Git is used for version control, and the project repository is hosted on GitHub.

## Project Status

StudyFlow is an academic project developed as part of the Mobile Application Development Lab coursework.


📌 Personal Portfolio API

A simple REST API built with Node.js + Express that serves structured information about me, my freelancing stats, and my projects.
The API is lightweight and only returns requested fields to avoid unnecessary data exposure.

🚀 Features

Serve personal info (name, email, GitHub, etc.)

Serve freelancing stats (projects count, open-source contributions)

Serve projects list (title, GitHub URL, live URL, description)

Query specific fields (e.g., /personal/name)

Query specific project by title

📂 Project Structure
portfolio-api/
│-- data.json        # Stores personal, freelancing, and projects info
│-- server.js        # Express server with API endpoints
│-- package.json     # Dependencies and scripts

📦 Installation & Setup

Clone the repository:

git clone https://github.com/yourusername/portfolio-api.git
cd portfolio-api


Install dependencies:

npm install


Run the server:

node server.js


API will be live at:

http://localhost:5000

📖 API Endpoints
🔹 Personal Info

GET /personal/:field
Returns a specific personal field.

Example:

/personal/name → { "name": "Your Name" }

/personal/email → { "email": "youremail@example.com" }

🔹 Freelancing Info

GET /freelancing/:field
Returns freelancing details.

Example:

/freelancing/projectsCount → { "projectsCount": 10 }

/freelancing/openSourceContribution → { "openSourceContribution": 5 }

🔹 Projects

GET /projects
Returns all projects.

GET /projects/:title
Returns a project by title.

Example: /projects/Project%20One

🗂 Example data.json
{
  "personal": {
    "name": "Your Name",
    "contact": "1234567890",
    "email": "youremail@example.com",
    "github": "https://github.com/username",
    "twitter": "https://twitter.com/username",
    "linkedin": "https://linkedin.com/in/username",
    "aboutMe": "I am a freelance developer..."
  },
  "freelancing": {
    "projectsCount": 10,
    "openSourceContribution": 5
  },
  "projects": [
    {
      "title": "Project One",
      "githubUrl": "https://github.com/username/project-one",
      "liveUrl": "https://projectone.com",
      "description": "A web app that does XYZ"
    }
  ]
}

📌 Future Improvements

Add authentication for protected endpoints

Add search/filter functionality for projects

Add GraphQL support for more flexible queries

🤝 Contributing

Feel free to fork this repo and submit PRs for improvements.
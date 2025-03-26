# Personal Portfolio - README & User Guide

## Overview
The **Personal Portfolio** is a web application showcasing projects, skills, and contact details, while also displaying live weather updates using the **OpenWeather API**. The site is built with **React (Vite)** and styled using **Tailwind CSS**.

## Features
- Display portfolio projects with descriptions and links.
- Showcase personal skills and experience.
- Contact form for direct inquiries.
- Live weather updates fetched from OpenWeather API.
- Fully responsive design for all screen sizes.

---
## Installation & Setup

### Prerequisites
Ensure you have the following installed:
- **Node.js** (>=14.0)
- **npm** or **yarn**

### Clone the Repository
```sh
git clone https://github.com/yourusername/portfolio-site.git
cd portfolio-site
```

### Install Dependencies
```sh
npm install
# OR
yarn install
```

### Setup Environment Variables
Create a `.env` file in the project root and add your OpenWeather API key:
```env
VITE_WEATHER_API_KEY=your_api_key_here
```

### Run the Development Server
```sh
npm run dev
# OR
yarn dev
```
The app will be available at `http://localhost:5173/`.

---
## Usage Guide
### Viewing Projects
- Navigate to the **Projects** section to see featured work.
- Click on a project to see more details or visit live demos.

### Contacting
- Use the **Contact** form to send messages directly.
- Social media links are also available.

### Weather Updates
- The homepage displays live weather information based on user location.
- Ensure location services are enabled for accurate results.

---
## Deployment
To deploy the application:
```sh
npm run build
# OR
yarn build
```
Then, deploy the `dist/` directory to a hosting service like **Vercel**, **Netlify**, or **GitHub Pages**.

---
## Contributing
1. Fork the repository.
2. Create a new branch (`feature/new-feature`).
3. Commit your changes.
4. Push to your branch and submit a pull request.


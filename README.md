# MetaMuse

## Overview
This project is a **collaborative drawing app** frontend built with React, designed to allow multiple users to draw together in real time. The application connects with a backend using WebSockets to synchronize drawing actions among users.

## Features
- **Real-time drawing collaboration**
- **Canvas export in Base64 format**
- **Responsive design**
- **WebSocket-based live updates**

## Tech Stack
- **Frontend**: React, WebSockets, HTML5 Canvas
- **Styling**: CSS (or CSS-in-JS if using styled-components or similar)
- **Bundler**: Vite (or webpack, Create React App, etc.)

## Prerequisites
Ensure you have the following installed:
- **Node.js** (v14+ recommended)
- **npm** or **yarn**

## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/project-name.git
cd project-name
```
2. Install Dependencies
Run the following command to install all required dependencies.
```
bash
Copy code
npm install
# or
yarn install
```
3. Configuration
Create an .env file in the project root and add any necessary environment variables, such as the backend server URL:

plaintext
```
Copy code
REACT_APP_BACKEND_URL=ws://yourbackendurl:port
```
4. Running the Application
To start the application locally:

```
bash
Copy code
npm start
```
This will run the app in development mode, accessible at http://localhost:3000 (or another port if specified).

Project Structure
php
```
Copy code
project-name/
│
├── public/                     # Static files (index.html, icons, etc.)
├── src/
│   ├── components/             # Reusable React components
│   │   ├── Canvas.js           # Main drawing canvas component
│   │   └── Toolbar.js          # Toolbar for drawing options
│   ├── hooks/                  # Custom React hooks
│   ├── utils/                  # Utility functions (e.g., WebSocket helpers)
│   ├── App.js                  # Root component
│   ├── index.js                # Main entry point
│   └── styles/                 # CSS or styled-components files
└── README.md                   # Project documentation
```
Usage
Drawing: Click and drag on the canvas to draw.
Real-Time Collaboration: All connected users’ drawings will appear in real time on the canvas.
Exporting: The canvas is automatically exported as a Base64 string when a drawing session completes.
Key Code Snippets
Handling Mouse Events and Emitting Draw Events In the Canvas.js component:

after login, navigate to this routes to start drawing
1. ```/drawing-canvas``` (drawing area)
2. ```/client-view``` (view drawing)

Scripts
npm start: Starts the development server.
npm run build: Builds the app for production to the build folder.
npm test: in progress
Contributing
Feel free to submit issues, fork the repository, and send pull requests. Please ensure that your code is well-tested and follows the coding standards outlined in the CONTRIBUTING.md (if available).

License
This project is licensed under the MIT License. See the LICENSE.md file for more details.

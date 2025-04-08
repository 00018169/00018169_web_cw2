# Book Reviews Application

## Project Description
This is a web application for managing book reviews that allows users to create, view, edit, and delete book reviews.

## Project Structure

| Path | Description |
|------|-------------|
| app.js | Main application file that sets up Express server, middleware, and routes |
| package.json | Project configuration file with dependencies and scripts |
| .gitignore | Specifies files to exclude from version control (node_modules, etc.) |
| db.json | JSON file that serves as a local database to store book reviews |
| /public<br>&nbsp;&nbsp;&nbsp;&nbsp;/javascripts<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;main.js<br>&nbsp;&nbsp;&nbsp;&nbsp;/styles<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;style.css | Static assets for the client-side interface including CSS styles and JavaScript |
| /routes<br>&nbsp;&nbsp;&nbsp;&nbsp;index.js<br>&nbsp;&nbsp;&nbsp;&nbsp;books.js | Route handlers that define API endpoints for home pages and book operations |
| /views<br>&nbsp;&nbsp;&nbsp;&nbsp;layout.pug<br>&nbsp;&nbsp;&nbsp;&nbsp;index.pug<br>&nbsp;&nbsp;&nbsp;&nbsp;about.pug<br>&nbsp;&nbsp;&nbsp;&nbsp;/books<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;list.pug<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;create.pug<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;edit.pug<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;view.pug | Pug templates for rendering HTML pages including layouts and book-related views |
| /controllers<br>&nbsp;&nbsp;&nbsp;&nbsp;index.js<br>&nbsp;&nbsp;&nbsp;&nbsp;/books<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;index.js | Controllers that handle request processing and connect routes with services |
| /services<br>&nbsp;&nbsp;&nbsp;&nbsp;index.js<br>&nbsp;&nbsp;&nbsp;&nbsp;/books<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;index.js | Service layer that implements business logic and data operations for books |

## Dependencies
- express: ^4.21.2
- pug: ^3.0.3
- body-parser: ^2.2.0
- method-override: ^3.0.0
- fs: 0.0.1-security
- nodemon: ^3.1.9
- path: ^0.12.7

## Installation and Setup
1. Clone the repository
   ```
   git clone https://github.com/00018169/00018169_web_cw2
   ```
2. Navigate to the project directory
   ```
   cd 00018169_web_cw2
   ```
3. Install dependencies
   ```
   npm install
   ```
4. Start the application
   ```
   npm run dev
   ```
5. Open in your browser: `http://localhost:13000`

## Data Storage
The application uses a JSON file (db.json) located in the root directory as a local database to store book reviews. Data is persisted between application restarts.

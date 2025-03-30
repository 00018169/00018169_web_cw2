
# Book Reviews Application

## Project Description
This is a web application for managing book reviews that allows users to create, view, edit, and delete book reviews.

## Project Structure

| Path | Description |
|------|-------------|
| **/app.js** | Main application file |
| **/package.json** | Project configuration file with dependencies |
| **/controllers/** | Controllers for request handling (books.js, users.js, index.js) |
| **/routes/** | Application routes (books.js, users.js, index.js) |
| **/services/** | Services for data operations (books.js, users.js, index.js) |
| **/views/** | View templates (index.pug, layout.pug, books/index.pug, books/new.pug, books/edit.pug) |
| **/public/** | Static files (styles/style.css, javascripts/main.js) |


## Dependencies
- express: 4.21.2
- pug: 3.0.3
- mongoose: 8.13.1
- body-parser: 2.2.0
- method-override: 3.0.0

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
4. Set up MongoDB connection
   - The connection string in services/index.js is already configured

5. Start the application
   ```
   npm run dev
   ```
6. Open in your browser: `http://localhost:13000`




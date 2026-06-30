# Javascript_beginner_phase
Codes written during learning phase on Tech crush bootcamp
Tutor: Esther Ogbu https://github.com/OgbuEsther

# Quotes API

A lightweight RESTful API built with **Node.js** and **Express.js** for retrieving inspirational quotes. The API supports fetching all quotes, filtering by category, sorting results, and retrieving a random quote.

## Features

* Retrieve all available quotes
* Filter quotes by one or multiple categories
* Sort quotes alphabetically
* Retrieve a random quote
* Modular service-based architecture
* Centralized error handling
* Async controller wrapper for cleaner route handlers

---

## Project Structure

```text
├── controllers/
│   └── quotesController.js
├── services/
│   ├── getAllQuotes.js
│   ├── getCategoryQuoteService.js
│   ├── getRandomQuotes.js
│   └── index.js
├── model/
│   └── quotesModel.js
├── errors/
├── middlewares/
├── routes/
└── server.js
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/iyaseledaniel/Javascript_beginner_phase.git
```

Navigate into the project directory:

```bash
cd quotes-api
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

or

```bash
npm start
```

---

## API Endpoints

### Get All Quotes

```http
GET /quotes
```

Returns every available quote.

---

### Sort Quotes

```http
GET /quotes?sort=category
```

Returns quotes sorted alphabetically by the specified field.

---

### Filter by Category

Single category:

```http
GET /quotes?category=business
```

Multiple categories:

```http
GET /quotes?category=business&category=health
```

Returns quotes that belong to one or more specified categories.

---

### Get Quotes by Route Parameter

```http
GET /quotes/:category
```

Example:

```http
GET /quotes/business
```

Returns all quotes belonging to the specified category.

---

### Get a Random Quote

```http
GET /quotes/random
```

Returns a randomly selected quote.

---

## Example Response

```html
Category: Business

Quote:
Success usually comes to those who are too busy to be looking for it.
```

---

## Technologies Used

* Node.js
* Express.js
* JavaScript (CJS)
* Custom Middleware
* Modular Service Layer

---

## Architecture

The application follows a layered architecture:

```
Request
   │
Routes
   │
Controllers
   │
Services
   │
Data Model
```

This separation of concerns makes the project easier to maintain, test, and extend.

---

## Error Handling

The API uses:

* Custom error classes
* Centralized error middleware
* Async wrapper middleware for cleaner controllers

This ensures consistent and readable error responses throughout the application.

---

## Future Improvements

* Store quotes in MongoDB
* Add pagination
* Full CRUD operations
* Authentication & Authorization
* Search by keyword
* API documentation with Swagger/OpenAPI
* Unit and integration tests
* Response in JSON alongside HTML
* Rate limiting and request validation

---

## Contributing

Contributions are welcome.

1. Fork the repository.
2. Create a new feature branch.
3. Commit your changes.
4. Push to your branch.
5. Open a Pull Request.


## Author

**Daniel Iyasele**

Backend Developer | Node.js | Express.js

If you found this project useful, consider giving it a ⭐ on GitHub.

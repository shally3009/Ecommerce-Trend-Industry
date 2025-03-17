# E-Commerce Platform: Backend Web Development Project

## *Milestone 1: Project Introduction*

*Project Overview:*
This project focuses on building a fully operational e-commerce platform using the MERN stack — MongoDB, Express, React, and Node.js. The front-end will be developed with React’s Create React App (CRA), MongoDB will serve as the database, and Node.js with Express will manage back-end server functionality.

The project will be divided into two major sections: *Frontend* and *Backend* development.

- *Frontend:* Various user-facing pages will be created, including:
  - Login Page
  - Sign Up Page
  - Forgot Password Page
  - Home Page
  - Product Listing Page
  - Cart Page
  - Address Form Page
  - Payment Page
  - Order Confirmation Page
  - Order History Page
  - Help Page
  - Error Page
  - Product Details Page

- *Backend:* The server will manage data operations with MongoDB using Mongoose for schema consistency. API endpoints will handle CRUD operations (Create, Read, Update, Delete) through HTTP methods like POST, GET, PUT, PATCH, and DELETE.

We will use *bcrypt* to hash user passwords for added security, and the project structure will prioritize scalability and maintainability.

---

## *Milestone 2: Frontend Setup (Login Page)*

In this milestone, the *Login Page* was built using React’s CRA. For an improved interface, *Tailwind CSS* was integrated for styling and *React-Icons* for visual enhancements. Tailwind’s utility-first approach ensures a responsive and modern design.

The Login Page includes fields for email and password, form validation, state management, and error handling. Icons enhance usability and the overall experience.

---

## *Milestone 3: Backend Setup and Project Structure*

We established the foundational structure for the backend as follows:

- **src/ Directory:** Contains server-side source files.
  - **config/**: Holds environment configuration like MongoDB URL and port.
  - **controllers/**: Handles request logic for different routes.
  - **database/**: Connects to MongoDB via db.js.
  - **middleware/**: Contains custom middleware like centralized error handling.
  - **models/**: Defines Mongoose schemas.
  - **routes/**: Sets up API endpoints.
  - **utils/**: Includes helper functions like ErrorHandler.js.

The **index.js** file sets up the Express app, basic routing, and server listener.

---

## *Milestone 4: User Model, Controller, and Multer Integration*

We created the *User Model* and its controller, then integrated *Multer* for handling file uploads.

---

## *Milestone 5: Missing Number Task (Small Task)*

This milestone focused on solving the missing number problem in an array.

---

## *Milestone 6: Password Encryption and User Data Storage*

- *Password Hashing:* Implemented *bcrypt* to encrypt passwords during signup, storing only hashed versions in the database.
- *User Data Management:* Ensured all user information (like name and email) is stored securely, with password encryption maintained throughout.

---

## *Milestone 7: Login Endpoint Development*

- *User Authentication:* The endpoint accepts user credentials, retrieves user data, and verifies the password using bcrypt.
- *Password Validation:* Hashed passwords are compared for secure authentication.

---

## *Milestone 8: Product Display Components*

Two React components were created:
- *Home.jsx:* Displays the product list.
- *ProductCard.jsx:* Acts as a template for individual product information.

Products are dynamically mapped and displayed based on database content.

---

## *Milestone 9: Product Form Creation*

- *Frontend Form:* A user-friendly form to input product details like name, price, description, category, and images.
- *Form File:* Created *ProductForm.jsx* for data collection and validation.

---

## *Milestone 10: Product Schema and API Integration*

- *Schema:* Defined *ProductModel.js* using Mongoose.
- *API:* Developed an endpoint to handle POST requests for adding product data to MongoDB.
- *File Upload:* Utilized *Multer* middleware for image handling.

---

## *Milestone 11 & 12: Frontend-Backend Integration*

- *Data Fetching:* Updated *Products.js* to retrieve product data from MongoDB and pass it to *Home.jsx*.
- *Form Submission:* Enhanced the product form to send data to the database.

---

## *Milestone 13: Product Update Feature*

- *Edit Functionality:* Created an endpoint to update product data with a PUT request.
- *Frontend Enhancements:* Added edit and delete buttons, with role-based visibility for sellers.




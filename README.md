# campers-shop-server System Backend 

## 🤖 Introduction
This is the backend for a Car Rental Reservation System. It handles CRUD operations for cars, bookings, user authentication, and authorization. The project is built with Node.js, Express.js, TypeScript, and MongoDB.

## 🔗 Live URL

[Car Rental Reservation System](https://car-rental-reservation-system-beryl.vercel.app/)


## Technologies Used
- Node.js
- Express.js
- TypeScript
- MongoDB
- Mongoose

## Features
- User Authentication and Authorization (JWT-based)
- CRUD Operations for Cars
- Booking System for Renting Cars
- Middleware for Error Handling
- Input Validation using Zod
- Transaction and Rollback (if necessary)

- **Order Management**
  - Create a new order
  - Retrieve all orders
  - Retrieve orders by user email
  - Update inventory when an order is created

## API Endpoints

###  Authentication

-  **Sign Up**

  - Endpoint: `/api/auth/signup`
  - Method: `POST`

- **Sign In**

  - Endpoint: `/api/auth/signin`
  - Method: `POST`

###  Car Management

- **Create a Car (Only accessible to the Admin)**

  - Endpoint: `/api/cars`
  - Method: `POST`

- **Get All Cars**

  - Endpoint: `/api/cars`
  - Method: `GET`

- **Get A Car**

  - Endpoint: `/api/cars/:id`
  - Method: `GET`

- **Update A Car (Only Accessible to the Admin)**

  - Endpoint: `/api/cars/:id`
  - Method: `PUT`

- **Delete A Car (Only Accessible to the Admin)**
  - Endpoint: `/api/cars/:id`
  - Method: `DELETE` [SOFT DELETE]

###  Booking Management

- **Get All Bookings (Accessible to the Admin)**

  - Endpoint: `/api/bookings`
  - Method: `GET`
  - **Query Parameters:**

    - `carId`: ID of the car for which availability needs to be checked.
    - `date`: The specific date for which availability needs to be checked
      (format: YYYY-MM-DD).

- **Book a Car (Only Accessible to the User)**
  - Endpoint: `/api/bookings`
  - Method: `POST`
- **Get User's Bookings (Only Accessible To the User)**

  - Endpoint: `/api/bookings/my-bookings`
  - Method: `GET`

- **Return The Car (Only Accessible To Admin)**
  - Endpoint: `/api/cars/return`
  - Method: `PUT`


 **Clone the repository**

   ```sh
   git clone https://github.com/mdrafi276/Car-Rental-Reservation-System-Backend.git

   cd Car-Rental-Reservation-System-Backend
  
```
📦 Install Dependencies

---
```bash

$ npm install

```
# ⚙️ Configure Environment Variables
## Create a `.env` file in the root of the project and add the following environment variables:

```bash
PORT=5000
DB_URI="mongodb://localhost:27017/Car-Rental-Reservation"
JWT_ACCRESS_SECRET= your jwt secret token

```
# Running the app

```TYPESCRIPT
# watch mode
$ npm run start:dev


# production mode
$ npm run start:prod

```
The server should be running on http://localhost:5000.


<!-- . -->


## Ensure the code adheres to a consistent style by running:

```TYPESCRIPT
npm run lint
```
# LINTING FIX
## Fix the code by running:
```TYPESCRIPT
npm run lint:fix

```

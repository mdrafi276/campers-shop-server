# campers-shop-server System Backend 

## 🤖 Introduction
Discover the ultimate destination for camping gear at advencture shop! Our e-commerce site boasts a user-friendly design and an attractive layout, making it easy and enjoyable to browse through our wide range of products. From essential equipment to fun gadgets, we have everything to enhance your outdoor adventure.
## 🔗 Live URL

[Advencture shop](camperes-shop-project-server.vercel.app)


## Technologies Used
- Node.js
- Express.js
- TypeScript
- MongoDB
- Mongoose
- cors
- **dotenv**

## 🔋 Features

- 🌟 **User-friendly and visually appealing interface**
- 🏠 **Homepage**
  - Hero section
  - Best-selling products
  - Categories
  - Featured products
  - Unique sections like testimonials
- 🛍️ **Products Page**
  - Search functionality
  - Filter options
  - Sorting features
- 🔍 **Detailed Product Page**
  - Product information
  - Ratings
  - Image magnifier
- 📦 **Product Management**
  - Create products
  - Update products
  - Delete products
- 🛒 **Cart Page**
  - Quantity controls
  - Remove product button
  - Dynamic pricing details
- 💳 **Checkout Page**
  - User details form
  - Payment methods
- 📄 **About Us Page**
  - Contact information
  - Map
  - Social media links
  - Mission statement
  - Team members
- 📱 **Responsive design and state management using Redux**
- ⚡ **Fast loading times and intuitive navigation**
- ♿ **Accessibility features and interactive elements**


## Usage

1. **Homepage:** Visit our homepage to delve into our hero section, uncover our top-selling items, explore diverse categories, discover featured products, and indulge in exclusive content such as video blogs and customer testimonials

2. **Products Page:**Utilize our search bar to locate products by name or description. Apply filters based on categories and price range, and conveniently sort products by price

3. **Product Details Page:** Access comprehensive details about each product, such as its name, price, current stock quantity, detailed description, category classification, customer ratings, and multiple images. Take advantage of the image magnifier feature to examine products up close.

4. **Cart Page:** Easily manage your shopping cart by modifying quantities, removing products, and reviewing real-time pricing information. Proceed to checkout promptly if your selected products are in stock.

5. **Checkout Page:**Complete your purchase by entering your details and selecting a payment method. Opt for Cash on Delivery or utilize Stripe (optional) for secure payments

6. **About Us Page:** Locate our contact information, find our map location, access our social media links, explore our mission statement, and read bios of our team members
 **Clone the repository**

   ```sh
   git clone https://github.com/mdrafi276/campers-shop-server.git

   cd campers-shop-server
  
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



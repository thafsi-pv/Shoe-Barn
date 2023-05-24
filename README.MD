# Shoe Barn - React and Node/Express App

The Shoe Barn application is a web-based platform for viewing and purchasing shoes. This app is built using React and Node/Express, and displays a list of available shoes with their name, short description and price. Upon clicking a shoe, users can view its details page.


## Features

### Listing All Products

When the user first navigates to the Shoe Barn application, they will be presented with a list of all available products, including their name, short description and price. 

The product data is received by making a GET request to the backend server using Axios with CORS enabled in the backend expressjs server.

### Product Details

When the user clicks on a product, they will be redirected to a page displaying the product details. The URL path will include the product ID so that the backend expressjs server can get the details of the particular product and send it to the frontend.

### Navigation

The Shoe Barn application uses React Router to handle navigation. The user can navigate between the product list view and the details view by clicking on links or pressing the back button in their web browser.

### Custom Icons

This application uses react-icons package to display custom product and social media icons.

## Technologies Used

The technologies used in this project include:

- React.js
- Node.js
- Express.js
- Axios
- CORS (Cross-Origin Resource Sharing)
- React Router
- React-Icons

## Conclusion

The Shoe Barn application provides an easy to use platform for viewing and purchasing shoes. By displaying the product details, navigation links, and custom icons, this application delivers a compelling experience for users.
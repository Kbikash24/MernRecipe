# RecipeApp

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Introduction

RecipeApp is a web application that allows users to search for recipes,  and manage their accounts. The application integrates with the Edamam API to fetch recipes based on user search queries.

## Features

- User Registration and Login
- Search for Recipes
- View Saved Recipes

## Technologies Used

- **Frontend:** React
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **API:** Edamam API
- **Deployment:** Vercel

## Installation

Follow these steps to set up the project locally:

1. **Clone the repository:**
    ```sh
    git clone https://github.com/yourusername/recipeapp.git
    cd recipeapp
    ```

2. **Install server dependencies:**
    ```sh
    cd server
    npm install
    ```

3. **Install client dependencies:**
    ```sh
    cd client
    npm install
    ```

4. **Set up environment variables:**

    Create a `.env` file in the `server` directory and add the following environment variables:
    ```env
    MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.gxwkzwx.mongodb.net/RecipeApp?retryWrites=true&w=majority
    APP_ID=b3972793
    APP_KEY=91d4d909be31b7f05b7997fb6f2380b0
    ```

5. **Run the server:**
    ```sh
    cd server
    npm start
    ```

6. **Run the client:**
    ```sh
    cd client
    npm start
    ```

## Usage

1. **Open your browser and navigate to:**
    ```
    http://localhost:3000
    ```

2. **Register an account** or **log in** if you already have an account.

3. **Search for recipes** by entering keywords in the search bar.

4. **View your saved recipes** by navigating to the "Saved Recipes" section.

## API Endpoints

### Authentication

- `POST /api/register`: Register a new user
- `POST /api/login`: Login an existing user

### Recipes

- `GET /api/recipes?q=<query>`: Search for recipes
- `POST /api/recipes`: Save a recipe
- `GET /api/recipes/saved`: Get saved recipes

## Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**
2. **Create a new branch** (`git checkout -b feature/your-feature-name`)
3. **Commit your changes** (`git commit -am 'Add some feature'`)
4. **Push to the branch** (`git push origin feature/your-feature-name`)
5. **Create a new Pull Request**

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries or feedback, please contact:

- **Name:** Bikash Kumar Yadav
- **Email:** bikashk11@gmail.com
- **LinkedIn:https://www.linkedin.com/in/bikash-k/
- **GitHub:github/Kbikash24


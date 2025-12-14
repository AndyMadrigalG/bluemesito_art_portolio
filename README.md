# Bluemesito Art Portfolio
A modern, responsive art portfolio website built with React, showcasing the creative work of Bluemesito

## 🎨 About

This is a portfolio website featuring:
- **Gallery Homepage**: Showcasing different art categories
- **About Page**: Information about the artist
- **Contact Page**: A form to get in touch with the artist
- **Responsive Design**: Optimized for mobile, tablet, and desktop viewing
- **Social Media Integration**: Quick links to DeviantArt, Instagram, and Pixiv

## 🛠️ Built With

- **React 19** - Frontend framework
- **TypeScript** - Type-safe JavaScript
- **React Router DOM** - Client-side routing
- **CSS3** - Custom styling with CSS variables

## 📋 Prerequisites

- Node.js (v16 or higher recommended)
- npm (comes with Node.js)

## 💻 Local Setup

1. Clone the repository and go into that folder:

    ```bash
    git clone https://github.com/AndyMadrigalG/bluemesito_art_portolio.git
    cd bluemesito_art_portolio
    ```

2. To install dependencies, just run:

    ### `npm install`

3. Compile the app under the `build` folder
    
    ### `npm run build`

    The build is minified and the filenames include the hashes, this command correctly bundles React in production mode and optimizes the build for the best performance
    

4. Start the server, you can run any of these commands:

    ### `npm run start`

    Runs the app in the development mode, which means that the page will automatically reload if you make edits. Open [http://localhost:3000](http://localhost:3000) to view it in the browser

    ### `npm run start:test`

    Runs the app for testing, the page wont automatically reload if you make edits. Open [http://localhost:8080](http://localhost:8080) to view it in the browser

    ### `npm run start:prod`

    Runs the app in the prod environment, the page will use `build` folder. Open [http://localhost:4000](http://localhost:4000) to view it in the browser


## 🚀 Deployment

The process to deploy into production has been automated with GitHub Actions\
Every time we merge new changes to the `main` branch, its being deployed to the production environment

## ⭐ Live in Production

Visit [https://bluemesito.com](https://bluemesito.com)
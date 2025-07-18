# api-project

*COMPANY*: CODTECH IT SOLUTIONS

*NAME*: BHUPATHIRAJU SURYA SRI ROHIT VARMA

*INTERN ID*: CT08DF1032

*DOMAIN*: FULL STACK WEB DEVELOPMENT

*DURATION*: 8 WEEKS

*MENTOR*: NEELA SANTHOSH KUMAR

*Project Description* :

So it is one of my first tasks and i titled it as Cinema Explorer. Cinema Explorer is a simple, responsive web application where users can browse movies based on data from The Movie Database (TMDB) API. It features a simple-to-use interface for viewing popular movies, searching for titles, and displaying major information such as ratings, release dates, descriptions. it has two sections namely popular, recommended in which respective movies will be displayed upon selecting.

*Files* :

1. server.js -

        Purpose :- It initializes a basic Express.js server to host static files.

        Key Features :- Sets up a Node.js server listening on port 3000.

        Uses express.static to serve the public folder.

        Also forwards all requests to index.html for a single-page application (SPA) experience.

2. public/index.html -

        Purpose :- It is the application's primary HTML framework.

        Key Features :- Consists of UI layout, such as a header, search controls, and movie display area.

        References style.css for styling and script.js for functionality.

        It features dropdown menus, search input, and pagination buttons.

3. public/script.js -

        Purpose :- Processes API requests, DOM manipulation, and user input.

        Key Features :- Fetches movie information from TMDB API (popular, top_rated, and search).

        Dynamically displays movie cards with posters, ratings, and overviews.
      
        It also includes pagination (restricted to 2 pages for demo purpose).

        Manages search queries and error scenarios (e.g., no results found).

4. public/style.css -

        Purpose :- It specifies the visual design of the application.

        Key Features :- Responsive grid layout for movie cards.

        Modern, clean design with hover effects.

        Mobile-friendly optimizations via media queries.

        Styling for buttons, dropdowns, and pagination controls.

5. package.json -
   
        Purpose :- Handles project dependencies and scripts.

        Key Features :- Lists necessary packages (express, axios, dotenv).

        Contains dev and start scripts for server execution.

        Declares nodemon for automatic reloading in development mode.

*How It Works* :

  The User Interface (index.html) Shows a search field, dropdown menu, and grid of movies.

*Then users can be able to* :

  Choose between "Popular" or "Recommended" titles.

  Search for individual films.
  
  Change pages with "Previous" and "Next" buttons.

*Backend (server.js)* :

    Lightweight Express server serving the frontend.

    No complicated routing—simply static file hosting for a simple, lightweight experience.

    API Interaction (script.js)

    Performs fetch requests to TMDB's API.

    Processes the response and dynamically creates movie cards.

    Manages pagination logic (up to 2 pages).

*Styling (style.css)* :

  --> Makes the app look decent on any device.

  --> Uses CSS Grid for an adaptive movie layout.

  --> Provides visual cues (hover effects, button states).

`If you think why this project is for, then `:

✅ Ideal for learning API integration with JavaScript.

✅ Few dependencies (only Express for the server).

✅ Fully responsive (mobile & desktop).

✅ Easy to extend (add authentication, filters, etc.).

*Future Enhancements* -

--> Expanded Movie Pages – Expandable for trailers, cast, etc.

--> User Accounts – Favorite movies saved.

--> Additional Filters – Sort by genre, year, or rating.

*So once have a try!*

    Clone the repo, install dependencies, and run npm start to launch your very own Cinema Explorer! 

*OUTPUT* :

<img width="1920" height="1140" alt="Image" src="https://github.com/user-attachments/assets/8a2a5dac-4a31-4e9a-9590-d2d327fdbcfd" />

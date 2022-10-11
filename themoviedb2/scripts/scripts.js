// API information
baseUrl = "https://api.themoviedb.org/3/trending/all/week"
apiKey = "?api_key=20fb29b2c9f122eaa6465a6caf734247"
basePosterRoute = "https://image.tmdb.org/t/p/w185"

// // QuerySelector to locate element in the HTML
const trendingMoviesUl = document.querySelector("ul");

// Function to fetch popular movie data
function fetchMovies() {
  fetch(`${baseUrl}${apiKey}`)
  .then((response) => response.json())
  .then((data) => {
    const moviesJson = data.results

    // Iterating over every element of the Json
    moviesJson.forEach(movie => {
      // Creating a li element to insert it later on in our ul
      const listItem = document.createElement("li");

      // Creating a paragraph to store our title.
      const titleElement = document.createElement("p");

      // Movies have titles, shows have names
      // Filtering them with an if-statement
      if (movie.media_type === "movie") {
        titleElement.textContent = movie.original_title;
      } else {
        titleElement.textContent = movie.name;
      }

      // Generating our posters with a custom poster path
      const imageElement = document.createElement("img");
      const posterPathUrl = `${basePosterRoute}${movie.poster_path}`
      imageElement.setAttribute("src", posterPathUrl);

      // Creating our li with the title and image
      listItem.append(
      titleElement,
      imageElement
      );

      // Adding our li item to our ul
      trendingMoviesUl.appendChild(listItem);
    });
  });
}

fetchMovies();

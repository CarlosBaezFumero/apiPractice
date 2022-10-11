// API information
baseUrl = "https://api.themoviedb.org/3/trending/all/week"
apiKey = "?api_key=20fb29b2c9f122eaa6465a6caf734247"
basePosterRoute = "https://image.tmdb.org/t/p/w185"

const trendingMoviesUl = document.querySelector("ul");

// Function to fetch popular movie data
function fetchMovies() {
  fetch(`${baseUrl}${apiKey}`)
  .then((response) => response.json())
  // .then((data) => console.log(data));
  .then((data) => {
    const moviesJson = data.results
    moviesJson.forEach(movie => {
      const listItem = document.createElement("li");

      const titleElement = document.createElement("p");
      if (movie.media_type === "movie") {
        titleElement.textContent = movie.original_title;
      } else {
        titleElement.textContent = movie.name;
      }

      const imageElement = document.createElement("img");
      const posterPathUrl = `${basePosterRoute}${movie.poster_path}`
      imageElement.setAttribute("src", posterPathUrl);

      listItem.append(
      titleElement,
      imageElement
      );

      const trendingMoviesUl = document.querySelector("ul");
      trendingMoviesUl.appendChild(listItem);
    });
  });
}

fetchMovies();

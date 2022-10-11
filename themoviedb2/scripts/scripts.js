// API information
baseUrl = "https://api.themoviedb.org/3/trending/all/week"
apiKey = "?api_key=20fb29b2c9f122eaa6465a6caf734247"
posterPath = "https://image.tmdb.org/t/p/w185"

// moviesJson contains the result of fetching themoviedb api data
let moviesJson

console.log("hello")

//
const trendingMoviesUL = document.getElementById("trending-movies-ul")

// Function to fetch popular movie data
function fetchMovies() {
  fetch(`${baseUrl}${apiKey}`)
  .then((response) => response.json())
  // .then((data) => console.log(data));
  .then((data) => moviesJson = data.results);
}

function displayMovies(trendingMovie) {
  var li = document.createElement(li);
  li.appendChild(document.createTextNode(trendingMovie))
  trendingMoviesUL.appendChild(li)
}

fetchMovies()

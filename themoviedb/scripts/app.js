// Assemble the full URL
const baseRoute = "https://api.themoviedb.org/3/trending/all/week"
const basePosterRoute = "https://image.tmdb.org/t/p/w185"
const apiKey = "?api_key=20fb29b2c9f122eaa6465a6caf734247"

let trendingMovies

// Use fetch() to make the request to the API
function getMovies() {
  fetch(`${baseRoute}${apiKey}`)
  .then((response) => response.json())
  .then((data) => trendingMovies = data.results)
  // .then(() => parseMovies(trendingMovies))

  // Error message in case it does not work 
  .catch((error) => console.error(`Error fetching data: ${error.message}`));
}

const trendingMoviesUL = document.getElementById("trending-movies")

function listMovie(trendingMovie) {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(trendingMovie));
  // return li
}

function createImgElement(posterPathUrl) {
  // var li = document.createElement("li");
  var img = document.createElement("img");
  img.setAttribute("src", posterPathUrl);
  // li.appendChild(img);
  // return img
}

function parseMovies(trendingMovies) {
  console.log(trendingMovies)
  for (movie of trendingMovies) {
    const movieLi = listMovie(movie.original_title)
    const movieImg = getPosterURL(trendingMovies)
    trendingMoviesUL.appendChild(movieLi);
    trendingMoviesUL.appendChild(movieImg);
  }
}

function getPosterURL(trendingMovies) {
  console.log(trendingMovies)
  for (movie of trendingMovies) {
    const posterPathUrl = `${basePosterRoute}${movie.poster_path}`
    createImgElement(posterPathUrl)
  }
}

getMovies()
console.log("1")

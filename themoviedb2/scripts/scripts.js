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

// function displayMovies(moviesJson) {
  // for (const movie in movies) {
  //   console.log(movie)
  //   const listItem = document.createElement("li");

  //   const titleElement = document.createElement("strong");
  //   titleElement.textContent = movie.original_title;

  //   // const imageElement = document.createElement("img");
  //   // const posterPathUrl = `${basePosterRoute}${movie.poster_path}`
  //   // img.setAttribute("src", posterPathUrl);

  //   listItem.append(
  //     titleElement
  //     // imageElement
  //   );
  //   trendingMoviesUl.appendChild(listItem);
  // }

//   console.log(moviesJson)
//   moviesJson.forEach(movie => {
//     console.log(movie)
//   });
// }

// displayMovies(moviesJson);
// displayMovies(moviesJson.at(0).original_title)

// const myList = document.querySelector("ul");

// fetch("products.json")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`HTTP error, status = ${response.status}`);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     for (const product of data.products) {
//       const listItem = document.createElement("li");

//       const nameElement = document.createElement("strong");
//       nameElement.textContent = product.Name;

//       const priceElement = document.createElement("strong");
//       priceElement.textContent = `£${product.Price}`;

//       listItem.append(
//         nameElement,
//         ` can be found in ${product.Location}. Cost: `,
//         priceElement,
//       );
//       myList.appendChild(listItem);
//     }
//   })
//   .catch((error) => {
//     const p = document.createElement("p");
//     p.appendChild(document.createTextNode(`Error: ${error.message}`));
//     document.body.insertBefore(p, myList);
//   });

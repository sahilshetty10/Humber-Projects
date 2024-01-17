// Async function to fetch data from publicly available rick and morty api
async function fetchData() {
  // try catch block to handle errors
  try {
    // Fetching data from the api and using the count variable to fetch data from different pages
    let link = "https://rickandmortyapi.com/api/character/?page=" + count;
    console.log("fetching data from " + link);
    let response = await fetch(link);
    let data = await response.json();
    // Processing the data here
    console.log("successfully fetched data");
    console.log(data);
    // passing each character to insertDataIntoDOM function
    data.results.forEach((character) => {
      insertDataIntoDOM(character);
    });
  } catch (error) {
    // Handling any errors
    console.error("Error:", error);
  }
}

function insertDataIntoDOM(character) {
  console.log(`adding ${character.name} to the DOM`);
  // Character image
  let image = document.createElement("img");
  image.src = character.image;
  image.alt = character.name + " image";

  // Character name
  let name = document.createElement("figcaption");
  name.innerText = character.name;

  // Character location
  let location = document.createElement("p");
  location.innerText = `Location: ${character.location.name}\n
  Species: ${character.species}\n
  Status: ${character.status}`;

  // Character container
  let characterContainer = document.createElement("figure");
  characterContainer.className = "character-container";
  characterContainer.appendChild(image);
  characterContainer.appendChild(name);
  characterContainer.appendChild(location);

  // Appending character container to main container
  let container = document.getElementById("container");
  container.appendChild(characterContainer);
}

// Load more button
function loadMore() {
  count++;
  fetchData();
}

// Initial fetch
var count = 1;
fetchData();

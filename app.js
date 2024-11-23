let characters = [];

function fetchAllCharacters(url) {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      characters = characters.concat(data.results); 
      if (data.next) {
        fetchAllCharacters(data.next);
      } else {
        displayCharacters(characters);
      }
    })
    .catch(error => console.log(error));
}

fetchAllCharacters('https://swapi.dev/api/people/');

function displayCharacters(filteredCharacters) {
  const heroesContainer = document.getElementById('heroes-container');
  heroesContainer.innerHTML = ''; 

  filteredCharacters.forEach(character => {
    const characterId = character.url.match(/\/(\d+)\/$/)[1];
    const imageUrl = `https://starwars-visualguide.com/assets/img/characters/${characterId}.jpg`;
    const characterCard = `
        <div class="col-md-4 col-sm-6 mb-4">
            <div class="card">
                <img src="${imageUrl}" class="card-img-top" alt="${character.name}">
                <div class="card-body">
                    <h5 class="card-title">${character.name}</h5>
                    <p><strong>Height:</strong> ${character.height} cm</p>
                    <p><strong>Mass:</strong> ${character.mass} kg</p>
                    <p><strong>Birth Year:</strong> ${character.birth_year}</p>
                    <p><strong>Gender:</strong> ${character.gender}</p>
                </div>
            </div>
        </div>
    `;
    heroesContainer.innerHTML += characterCard;
  });
}

document.getElementById('search').addEventListener('input', function(e) {
  const searchTerm = e.target.value.toLowerCase(); 
  const filteredCharacters = characters.filter(character => {
    return character.name.toLowerCase().includes(searchTerm); 
  });
  displayCharacters(filteredCharacters); 
});

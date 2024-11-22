const characters = [
  { name: 'Luke Skywalker', image: 'https://starwars-visualguide.com/assets/img/characters/1.jpg', height: '172cm', mass: '77kg', birth_year: '19BBY', gender: 'Male' },
  { name: 'Darth Vader', image: 'https://starwars-visualguide.com/assets/img/characters/4.jpg', height: '202cm', mass: '136kg', birth_year: '41.9BBY', gender: 'Male' },
  { name: 'Leia Organa', image: 'https://starwars-visualguide.com/assets/img/characters/5.jpg', height: '150cm', mass: '49kg', birth_year: '19BBY', gender: 'Female' },
  { name: 'Han Solo', image: 'https://starwars-visualguide.com/assets/img/characters/14.jpg', height: '180cm', mass: '80kg', birth_year: '29BBY', gender: 'Male' },
  { name: 'Chewbacca', image: 'https://starwars-visualguide.com/assets/img/characters/13.jpg', height: '228cm', mass: '112kg', birth_year: '200BBY', gender: 'Male' },
  { name: 'C-3PO', image: 'https://starwars-visualguide.com/assets/img/characters/2.jpg', height: '167cm', mass: '75kg', birth_year: '112BBY', gender: 'N/A' },
  { name: 'R2-D2', image: 'https://starwars-visualguide.com/assets/img/characters/3.jpg', height: '96cm', mass: '32kg', birth_year: '33BBY', gender: 'N/A' },
  { name: 'Obi-Wan Kenobi', image: 'https://starwars-visualguide.com/assets/img/characters/10.jpg', height: '182cm', mass: '77kg', birth_year: '57BBY', gender: 'Male' },
  { name: 'Yoda', image: 'https://starwars-visualguide.com/assets/img/characters/20.jpg', height: '66cm', mass: '17kg', birth_year: '896BBY', gender: 'Male' },
  { name: 'Boba Fett', image: 'https://starwars-visualguide.com/assets/img/characters/21.jpg', height: '178cm', mass: '78kg', birth_year: '31BBY', gender: 'Male' },
  { name: 'Anakin Skywalker', image: 'https://starwars-visualguide.com/assets/img/characters/11.jpg', height: '188cm', mass: '84kg', birth_year: '41BBY', gender: 'Male' },
  { name: 'Lando Calrissian', image: 'https://starwars-visualguide.com/assets/img/characters/22.jpg', height: '177cm', mass: '79kg', birth_year: '31BBY', gender: 'Male' },
  { name: 'Jabba the Hutt', image: 'https://starwars-visualguide.com/assets/img/characters/23.jpg', height: '175cm', mass: '1000kg', birth_year: '600BBY', gender: 'Male' },
  { name: 'Wicket W. Warrick', image: 'https://starwars-visualguide.com/assets/img/characters/24.jpg', height: '88cm', mass: '25kg', birth_year: '8BBY', gender: 'Male' },
  { name: 'Nien Nunb', image: 'https://starwars-visualguide.com/assets/img/characters/25.jpg', height: '165cm', mass: '68kg', birth_year: '45BBY', gender: 'Male' },
  { name: 'Bail Prestor Organa', image: 'https://starwars-visualguide.com/assets/img/characters/26.jpg', height: '175cm', mass: '75kg', birth_year: '67BBY', gender: 'Male' },
  { name: 'Captain Raymus Antilles', image: 'https://starwars-visualguide.com/assets/img/characters/27.jpg', height: '183cm', mass: '78kg', birth_year: '40BBY', gender: 'Male' },
  { name: 'Poe Dameron', image: 'https://starwars-visualguide.com/assets/img/characters/28.jpg', height: '180cm', mass: '80kg', birth_year: '41BBY', gender: 'Male' },
  { name: 'Finn', image: 'https://starwars-visualguide.com/assets/img/characters/29.jpg', height: '175cm', mass: '72kg', birth_year: '11BBY', gender: 'Male' },
  { name: 'Rose Tico', image: 'https://starwars-visualguide.com/assets/img/characters/30.jpg', height: '155cm', mass: '54kg', birth_year: '25BBY', gender: 'Female' },
  { name: 'BB-8', image: 'https://starwars-visualguide.com/assets/img/characters/31.jpg', height: '67cm', mass: '36kg', birth_year: 'NA', gender: 'N/A' }
];

function displayCharacters(filteredCharacters) {
  const heroesContainer = document.getElementById('heroes-container');
  heroesContainer.innerHTML = '';

  filteredCharacters.forEach(character => {
    const characterCard = `
        <div class="col-md-4 col-sm-6 mb-4">
            <div class="card">
                <img src="${character.image}" class="card-img-top" alt="${character.name}">
                <div class="card-body">
                    <h5 class="card-title">${character.name}</h5>
                    <p><strong>Height:</strong> ${character.height}</p>
                    <p><strong>Mass:</strong> ${character.mass}</p>
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
  const filteredCharacters = characters.filter(character => character.name.toLowerCase().includes(searchTerm));
  displayCharacters(filteredCharacters);
});

displayCharacters(characters);

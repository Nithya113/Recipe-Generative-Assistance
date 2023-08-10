const searchForm = document.querySelector("form");

const searchResultDiv = document.querySelector(".search-result");

const container = document.querySelector(".container");
let searchQuery = "";
const APP_ID = 'e63f5a56';
const APP_key = '12f7948685ba28693745e17f840ebb31';


searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    searchQuery = e.target.querySelector('input').value;
    fetchAPI();
});

async function fetchAPI() {
    const baseURL = `https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_key}&from=0&to=20`;
    const response = await fetch(baseURL);
    const data = await response.json();
    generateHTML(data.hits);
    console.log(data);
}

function generateHTML(results) {
    container.classList.remove("initial");
    let generatedHTML = "";
    results.map((result) => {
        generatedHTML +=
            `
      <div class="item">
                    <img src="${result.recipe.image}" alt="">
                    <div class="flex-container">
                        <h1 class="title">${result.recipe.label}</h1>
                        <a class="view-btn" href="${result.recipe.url}">View Recipe</a>
                    </div>
                    <p class="item-data">Calories: ${result.recipe.calories.toFixed(2)}</p>
                    
                    <p class="item-data">Cuisine: ${result.recipe.cuisineType}</p>
                    
                </div>
    `
    })
    searchResultDiv.innerHTML = generatedHTML;
}
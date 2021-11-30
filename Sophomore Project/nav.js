let searchButton = document.getElementById("search");
let searchVal = " ";
const app_id = "85660504";
const app_key = "726499ac9e0898c42b78956eb714e8d4";
const webLink = `https://api.edamam.com/search?q=pizza&app_id=${app_id}&app_key=${app_key}&from=0&to=15`;
function getVal() {
  console.log("Button pressed yay");
  searchVal = document.getElementById("searchTerm").value;
  sendApiRequest();
}
//An asynchronous function to fetch data from the API.
async function sendApiRequest() {
  let response = await fetch(
    `https://api.edamam.com/search?q=${searchVal}&app_id=${app_id}&app_key=${app_key}&from=0&to=15`
  );
  console.log(response);
  let data = await response.json();
  console.log(data);
  useApiData(data.hits);
}

//function that does something with the data received from the API.
function useApiData(results) {
  let generatedHTML = "";
  results.map((result) => {
    generatedHTML += `
      <div class="item">
        <img src="${result.recipe.image}" alt="img">
        <div class="flex-container">
          <h1 class="item-data title">${result.recipe.label}</h1>
          <a class="view-btn" target="_blank" href="${
            result.recipe.url
          }">View Recipe</a>
        </div>
        <p class="item-data">Calories: ${result.recipe.calories.toFixed(2)}</p>
        <p class="item-data">Diet label: ${
          result.recipe.dietLabels.length > 0
            ? result.recipe.dietLabels
            : "No Data Found"
        }</p>
        
      </div>
    `;
  });
  document.querySelector(".search-result").innerHTML = generatedHTML;
}

//function that opens Personal Recipes page
function visitPersonalRecipes() {
  window.location = "personalRecipes.html";
}
//function that opens Premade Recipes and  Grocery Lists page
function visitpremadeRecGroc() {
  window.location = "premadeRecipe.html";
}
//function that opens Make a grocery list page
function visitGroceryList() {
  window.location = "makeGrocery.html";
}
function favoritesTab() {
  window.location = "favorites.html";
}
function eatingTracker() {
  window.location = "mealtrack.html";
}
function showInput() {
  document.getElementById("display").innerHTML =
    document.getElementById("listname").value +
    ":<br/>" +
    document.getElementById("listinput").value;
}
function showInput2() {
  document.getElementById("displayBreakfast").innerHTML =
    document.getElementById("breakfastinput").value;
}
function showInput3() {
  document.getElementById("displayLunch").innerHTML =
    document.getElementById("lunchinput").value;
}
function showInput4() {
  document.getElementById("displayDinner").innerHTML =
    document.getElementById("dinnerinput").value;
}
function visitMaps() {
  window.location =
    "https://www.google.com/search?q=grocery+store+near+me&rlz=1C1CHBF_enUS837US837&oq=grocery+&aqs=chrome.0.0i433i457i512j69i57j0i402l2j0i433i512j0i131i433i512j0i433i512l2j0i512l2.3104j0j7&sourceid=chrome&ie=UTF-8";
}
function welcomeUser() {
  document.getElementById("theirName").innerHTML =
    "Hi " + document.getElementById("username").value;
  return false; //prevents page from refreshing
}

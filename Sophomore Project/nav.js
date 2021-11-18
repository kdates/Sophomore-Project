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
          <h1 class="title">${result.recipe.label}</h1>
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
        <p class="item-data">Health labels: ${result.recipe.healthLabels}</p>
      </div>
    `;
  });
  document.querySelector(".search-result").innerHTML += generatedHTML;
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

//funtion to make another input ingredient to popup
let num=5;
function addATab(){
  let generatedHTML = "";
  generatedHTML +=
  `<span class="parts">
  <p class="description">Please Enter an Ingredient</p>
<input class="recipeName1" type="text" placeholder="Ingredient ${num}" >
</span>`;
num++;
document.querySelector(".addedPart").innerHTML += generatedHTML;
}

//meal tracker calendar js
const date = new Date();

const renderCalendar = () => {
    date.setDate(1);

    const monthDays = document.querySelector(".days");

    const lastDay = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
    ).getDate();

    const prevLastDay = new Date(
        date.getFullYear(),
        date.getMonth(),
        0
    ).getDate();

    const firstDayIndex = date.getDay();

    const lastDayIndex = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
    ).getDay();

    const nextDays = 7 - lastDayIndex - 1;

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    document.querySelector(".date h1").innerHTML = months[date.getMonth()];

    document.querySelector(".date p").innerHTML = new Date().toDateString();

    let days = "";

    for (let x = firstDayIndex; x > 0; x--) {
        days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
    }

    for (let i = 1; i <= lastDay; i++) {
        if (
            i === new Date().getDate() &&
            date.getMonth() === new Date().getMonth()
        ) {
            days += `<div class="today">${i}</div>`;
        } else {
            days += `<div>${i}</div>`;
        }
    }

    for (let j = 1; j <= nextDays; j++) {
        days += `<div class="next-date">${j}</div>`;
        monthDays.innerHTML = days;
    }
};

document.querySelector(".prev").addEventListener("click", () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
});

renderCalendar();

/** new content from nav.js */
function eatingTracker() {
    window.location = "mealtrack.html";

}

function breakfastList() {
    var breakfast = document.getElementById("breakfast");
    document.getElementById("displayedB").innerHTML = breakfast.value;
}

function lunchList() {
    var lunch = document.getElementById("lunch");
    document.getElementById("displayedL").innerHTML = lunch.value;
}

function dinnerList() {
    var dinner = document.getElementById("dinner");
    document.getElementById("displayedD").innerHTML = dinner.value;
}

function snackList() {
    var snack = document.getElementById("snack");
    document.getElementById("displayedS").innerHTML = snack.value;
}

function otherList() {
    var other = document.getElementById("other");
    document.getElementById("displayedO").innerHTML = other.value;
}

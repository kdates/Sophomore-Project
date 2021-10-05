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

//function to display grocery list
function showInput() {
  document.getElementById('display').innerHTML =
      document.getElementById("listname").value + ":<br/>" +
      document.getElementById("listinput").value;
}
//Map button for makeGrocery
function visitMaps(){
  window.location='https://www.google.com/search?q=grocery+store+near+me&rlz=1C1CHBF_enUS837US837&oq=grocery+&aqs=chrome.0.0i433i457i512j69i57j0i402l2j0i433i512j0i131i433i512j0i433i512l2j0i512l2.3104j0j7&sourceid=chrome&ie=UTF-8';
}

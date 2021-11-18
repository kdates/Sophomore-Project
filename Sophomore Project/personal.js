//to submit the recipe
let link4 = "";
var loadFile = function (event) {
  var image = document.getElementById("output");
  link4 += URL.createObjectURL(event.target.files[0]);
};
  function submitRecipe() {
    let title = document.querySelector(".title");
     let category = document.querySelector(".cat");
     let ingri = document.querySelector(".Ininput");
     let direct12 = document.querySelector(".Ininput2");
     let generatedHTML = "";
     generatedHTML =
     '\r Name of Recipe: ' + title.value + ' \r\n ' +
     'Category of Recipe: ' +category.value + ' \r\n ' +
     'Ingredients of Recipe: ' + ingri.value + ' \r\n ' +
          'directions: ' + direct12.value + ' \r\n ';
    const textToBlob=new Blob([generatedHTML],{type:'text/plain'})
    const sFileName=`${title.value}`;
let newLink=document.createElement("a");
newLink.download=sFileName;
if (window.webkitURL != null) {
  newLink.href = window.webkitURL.createObjectURL(textToBlob);
}
else {
  newLink.href = window.URL.createObjectURL(textToBLOB);
  newLink.style.display = "none";
  document.body.appendChild(newLink);
}

newLink.click();
};

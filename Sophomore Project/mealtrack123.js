let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let pickYear = document.getElementById("year");
let pickMonth = document.getElementById("month");

let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let monthAndYearTitle = document.getElementById("monthAndYearTitle");
calendarPreview(currentMonth, currentYear);


function nextMonth() {
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    calendarPreview(currentMonth, currentYear);
}

function lastMonth() {
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    calendarPreview(currentMonth, currentYear);

}

function chooseDropDown() {
    currentYear = parseInt(pickYear.value);
    currentMonth = parseInt(pickMonth.value);
    calendarPreview(currentMonth, currentYear);
}

function calendarPreview(month, year) {

    let firstDay = (new Date(year, month)).getDay();
    let daysInMonth = 32 - new Date(year, month, 32).getDate();

    let tbl = document.getElementById("days"); // body of the calendar

    // clearing all previous cells
    tbl.innerHTML = "";

    // filing data about month and in the page via DOM.
    monthAndYearTitle.innerHTML = months[month] + " " + year;
    pickYear.value = year;
    pickMonth.value = month;

    // creating all cells
    let fDate = 1;
    for (let i = 0; i < 6; i++) {
        // creates a table row
        let row = document.createElement("tr");

        //creating individual cells, filing them up with data.
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                let cell = document.createElement("td");
                let cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);
            } else if (fDate > daysInMonth) {
                break;
            } else {
                let cell = document.createElement("td");
                let cellText = document.createTextNode(fDate);
                if (fDate === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                    cell.classList.add("dateinfo");
                }

                cell.appendChild(cellText);
                row.appendChild(cell);
                fDate++;

            }

        }

        tbl.appendChild(row); // appending each row into calendar body.
    }

}

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
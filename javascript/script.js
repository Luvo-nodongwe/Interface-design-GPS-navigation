let selectedDestination = "";


/* Select a destination */

function selectDestination(destination) {

    selectedDestination = destination;

    document.getElementById("selectedDestination").textContent =
        destination;
}


/* Get directions */

function getDirections() {

    if (selectedDestination === "") {

        alert("Please select a destination first.");

        return;
    }

    localStorage.setItem("destination", selectedDestination);

    window.location.href = "directions.html";
}


/* Load destination on directions page */

if (window.location.pathname.includes("directions.html")) {

    let destination = localStorage.getItem("destination");

    if (destination) {

        document.getElementById("destinationName").textContent =
            destination;
    }
}


/* Start navigation */

function startNavigation() {

    alert("Navigation started to your destination.");
}


/* Cancel navigation */

function cancelNavigation() {

    window.location.href = "navigation.html";
}
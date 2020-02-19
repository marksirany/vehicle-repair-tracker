// var vehicleInput = document.querySelector("#vehicle");
// var dateInput = document.querySelector("#date");
var saveButton = document.querySelector("#save");
var msgDiv = document.querySelector("#msg");
var userVehicleSpan = document.querySelector("#vehicle");
var userDateSpan = document.querySelector("#date");

renderLastRegistered();

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}

function renderLastRegistered() {
  var vehicle = localStorage.getItem("vehicle");
  var date = localStorage.getItem("date");

  if (vehicle && date === null) {
    return;
  }

  userVehicleSpan.textContent = vehicle;
  userDateSpan.textContent = date;
}

saveButton.addEventListener("click", function(event) {
  event.preventDefault();

  var vehicle = document.querySelector("#vehicle").value;
  var date = document.querySelector("#date").value;

  if (vehicle === "") {
    displayMessage("error", "vehicle cannot be blank");
  } else if (date === "") {
    displayMessage("error", "date cannot be blank");
  } else {
    displayMessage("success", "Registered successfully");

    localStorage.setItem("vehicle", vehicle);
    localStorage.setItem("date", date);
    renderLastRegistered();
  }
});

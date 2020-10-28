// Write your JavaScript code here!
window.addEventListener("load", function () {
  let form = document.querySelector('form');
  form.addEventListener("submit", function (event) {
     event.preventDefault();
    const pilot = document.querySelector('Input[name="pilotName"]');
    const coPilot = document.querySelector('Input[name="copilotName"]');
    const fuelLevel = document.querySelector('Input[name="fuelLevel"]');
    const cargoMass = document.querySelector('Input[name="cargoMass"]');
    if (pilot.value === '' || coPilot.value === '' || fuelLevel.value === '' || cargoMass.value === '') {
      alert("All fields are required!");
      //return false;
    } else if (!(isNaN(pilot.value)) || !(isNaN(coPilot.value)) || isNaN(fuelLevel.value) || isNaN(cargoMass.value)) {
      window.alert("Make sure to enter valid information for each field");
      //return false;
    } else {
    const pilotStatus = document.getElementById("pilotStatus");
    const copilotStatus = document.getElementById("copilotStatus");
    pilotStatus.innerHTML = `Pilot ${pilot.value} is ready for launch.`;
    copilotStatus.innerHTML = `Co-pilot ${coPilot.value} is ready for launch.`;
    let launchStatus = document.getElementById("launchStatus");
    let faultyItems = document.getElementById("faultyItems");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    console.log(launchStatus.innerHTML);

    function changeVisibility() {
      faultyItems.style.visibility = "visible";
      launchStatus.innerHTML = "Shuttle not ready for launch";
      launchStatus.style.color = "red";
    }

    if (fuelLevel.value < 10000 && cargoMass.value > 10000) {
      changeVisibility();
      fuelStatus.innerHTML = "Not enough fuel for the journey!";
      cargoStatus.innerHTML = "Too much mass for the shuttle to take off!";

    } else if (fuelLevel.value < 10000) {
      changeVisibility();
      fuelStatus.innerHTML = "Not enough fuel for the journey!";
    } else if (cargoMass.value > 10000) {
      changeVisibility();
      cargoStatus.innerHTML = "Too much mass for the shuttle to take off!";
    } else if (fuelLevel.value > 10000 && cargoMass.value < 10000) {
      launchStatus.innerHTML = "Shuttle is ready for launch";
      launchStatus.style.color = "green";
    
          missionTarget = document.getElementById("missionTarget");
    
        fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
      response.json().then(function (json) {
        let missionTarget = document.getElementById("missionTarget");
        let randomIndex = Math.floor(Math.random() * json.length);
          console.log(json[0].name);
        missionTarget.innerHTML =

          `<h2>Mission Destination</h2>
              <ol>
                   <li>Name: ${json[randomIndex].name}</li>
                  <li>Diameter: ${json[randomIndex].diameter}</li>
                  <li>Star: ${json[randomIndex].star}</li>
                  <li>Distance from Earth: ${json[randomIndex].distance}</li>
                  <li>Number of Moons: ${json[randomIndex].moons}</li>
              </ol>
                  <img src="${json[randomIndex].image}"></img>`
      });
    });
    }
  }
  });
});
/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

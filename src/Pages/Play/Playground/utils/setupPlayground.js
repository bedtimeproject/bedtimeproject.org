/**
 * @function setupPlayground
 * @description Sets up the playground, and handles randomizing the data and
 * adding the correct listeners to the button on the interface.
 * @todo This is not handled in a very React Friendly way, and could be
 * improved one day if time allows.
 * @param {Object} json
 * @author Alexander Burdiss
 * @since 3/13/22
 * @version 1.0.0
 */
export function setupPlayground(json) {
  var names = [];
  var descriptions = [];
  var mainCharacters = [];
  var locations = [];
  var secondCharacters = [];
  var secondCharacterNames = [];
  var problems = [];
  var villains = [];
  var travelsTo = [];
  var travelsHow = [];
  var travelConflict = [];
  var villainWeakness = [];

  var nameContainer = document.querySelector("#js-name");
  var descriptionContainer = document.querySelector("#js-description");
  var mainCharacterContainer = document.querySelector("#js-main-character");
  var locationContainer = document.querySelector("#js-location");
  var secondCharacterNameContainer = document.querySelector(
    "#js-second-character-name"
  );
  var secondCharacterContainer = document.querySelector("#js-second-character");
  var problemContainer = document.querySelector("#js-problem");
  var villainContainer = document.querySelector("#js-villain");
  var whereTravelContainer = document.querySelector("#js-where-travel");
  var howTravelContainer = document.querySelector("#js-how-travel");
  var smallTravelConflictContainer = document.querySelector(
    "#js-small-travel-conflict"
  );
  var villainWeaknessContainer = document.querySelector("#js-villain-weakness");

  function loadStory() {
    nameContainer.innerHTML = names[Math.floor(Math.random() * names.length)];
    descriptionContainer.innerHTML =
      descriptions[Math.floor(Math.random() * descriptions.length)];

    mainCharacterContainer.innerHTML =
      mainCharacters[Math.floor(Math.random() * mainCharacters.length)];
    locationContainer.innerHTML =
      locations[Math.floor(Math.random() * locations.length)];
    secondCharacterNameContainer.innerHTML =
      secondCharacterNames[
        Math.floor(Math.random() * secondCharacterNames.length)
      ];
    secondCharacterContainer.innerHTML =
      secondCharacters[Math.floor(Math.random() * secondCharacters.length)];
    problemContainer.innerHTML =
      problems[Math.floor(Math.random() * problems.length)];
    villainContainer.innerHTML =
      villains[Math.floor(Math.random() * villains.length)];
    whereTravelContainer.innerHTML =
      travelsTo[Math.floor(Math.random() * travelsTo.length)];
    howTravelContainer.innerHTML =
      travelsHow[Math.floor(Math.random() * travelsHow.length)];
    smallTravelConflictContainer.innerHTML =
      travelConflict[Math.floor(Math.random() * travelConflict.length)];
    villainWeaknessContainer.innerHTML =
      villainWeakness[Math.floor(Math.random() * villainWeakness.length)];
  }

  document.querySelector(".Main-Button").addEventListener("click", loadStory);

  for (const object in json) {
    names.push(json[object]["Name"]);
    descriptions.push(json[object]["Description of Character"]);
    mainCharacters.push(json[object]["Main Character"]);
    locations.push(json[object]["Location"]);
    secondCharacters.push(json[object]["Second Character"]);
    secondCharacterNames.push(json[object]["Second Character Name"]);
    problems.push(json[object]["Problem"]);
    villains.push(json[object]["Villain"]);
    travelsTo.push(json[object]["Where You Travel"]);
    travelsHow.push(json[object]["How You Travel"]);
    if (json[object]["Something that happens while you travel"]) {
      travelConflict.push(
        json[object]["Something that happens while you travel"]
      );
    }
    villainWeakness.push(json[object]["Villain Weakness"]);
  }

  loadStory();
}

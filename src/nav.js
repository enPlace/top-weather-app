import { populateAllWeatherData } from ".";

let unitType = "metric";

const changeUnits = (e) => {
  e.preventDefault();
  if (e.target.id === "c") unitType = "metric";
  else unitType = "imperial";
  populateAllWeatherData();
  document.getElementById("weekly-forecast").classList.add("hidden")
  console.log(document.getElementById("weekly-forecast"))
};

function hideWeekly() {
  
  const menuButton = document.getElementById("menu-button");
  const weekly = document.getElementById("weekly-forecast");

  if (menuButton.classList.contains("active")) {
    weekly.classList.remove("hidden");
    menuButton.classList.remove("active");
  } else {
    weekly.classList.add("hidden");
    menuButton.classList.add("active");
  }
}

function appendSpan(parent, num) {
  for (let i = 0; i < num; i++) {
    const span = document.createElement("span");
    parent.appendChild(span);
  }
}

function navMenu() {
  const nav = document.createElement("nav");
  nav.role = "navigation";
  const menuToggle = document.createElement("div");
  menuToggle.id = "menuToggle";
  nav.appendChild(menuToggle);

  const menuButton = document.createElement("input");
  menuButton.type = "checkbox";
  menuButton.id = "menu-button";
  menuButton.addEventListener("click", hideWeekly);
  menuToggle.appendChild(menuButton);

  appendSpan(menuToggle, 3);

  const ul = document.createElement("ul");
  ul.id = "menu";
  menuToggle.appendChild(ul);

  const cfcontainer = document.createElement("a");
  cfcontainer.id = "c-f";
  ul.appendChild(cfcontainer);

  const c = document.createElement("button");
  c.id = "c";
  c.classList.add("unitButton");
  c.textContent = "°C";
  c.addEventListener("click", (e) => {
    changeUnits(e);
  });

  const f = document.createElement("button");
  f.id = "f";
  f.textContent = "°F";
  f.classList.add("unitButton");
  f.addEventListener("click", (e) => {
    changeUnits(e);
  });
  cfcontainer.appendChild(c);
  cfcontainer.appendChild(f);
  const menuTitles = ["Home", "About", "Github",];

  menuTitles.forEach((title) => {
    const a = document.createElement("a");
    a.href = "#";
    a.innerHTML = `<li>${title}</li>`;
    a.id = title;
    ul.appendChild(a);
  });
  return nav;
}

function getUnitType() {
  return unitType;
}
function getDegrees() {
  return unitType == "metric" ? "C" : "F";
}

export { navMenu, getUnitType, getDegrees };

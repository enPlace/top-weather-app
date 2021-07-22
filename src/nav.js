import { populateAllWeatherData } from ".";

let unitType = "metric";

const changeUnits = (e) => {
  e.preventDefault();
  if (e.target.id === "c") unitType = "metric";
  else unitType = "imperial";
  populateAllWeatherData();
};

function navMenu() {
  const nav = document.createElement("nav");
  nav.role = "navigation";
  const menuToggle = document.createElement("div");
  menuToggle.id = "menuToggle";
  nav.appendChild(menuToggle);
  menuToggle.innerHTML = `
    <input type="checkbox" />
    <span></span>
    <span></span>
    <span></span>
    `;
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
  const menuTitles = ["Home", "About", "Github", "Saved Places:"];

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

const cardsContainer = document.getElementById("cards");
const portionRange = document.getElementById("portionRange");
const portionValue = document.getElementById("portionValue");
const ingredientList = document.getElementById("ingredientList");
const recipeTitle = document.getElementById("recipeTitle");

const patiekalai = [
  {
    id: 1,
    pavadinimas: "Vištiena su Salotomis",
    kortele: {
      img: "https://receptai.patarimupasaulis.lt/images/Salotos/salotos-su-vistiena-3.webp",
      alt: "Vištiena su salotomis",
      title: "Vištiena su Salotomis",
      description: "Geras vištienos patiekalas su salotomis",
    },
    Ingradientai: {
      "vištos File vnt.": 1,
      "kiaušiniai vnt.": 1,
      "miltai gr.": 30,
      "džiuvesiai gr.": 30,
      "salotos vnt.": 2,
      "vyšniniai pomidorai vnt.": 6,
      "trumpavasis agurkas vnt.": 1,
      "paprika vnt.": 0.5,
      "citrina vnt.": 0.5,
      "prieskoniai salotoms gr.": 2,
      "Extra Virginal vynuogiu aliejus gr.": 1,
    },
  },
  {
    id: 2,
    pavadinimas: "Tortas su mėlynėmis",
    kortele: {
      img: "https://iq.alfa.lt/photo/000000349/499/MAIN_00_INITh.webp",
      alt: "Tortas su mėlynėmis",
      title: "Tortas su mėlynėmis",
      description: "Skanus tortas su mėlynėmis",
    },
    Ingradientai: {
      "baltas šokoladas gr.": 160,
      "kokoso aliejus gr.": 16,
      "džiuvesiai riekelemis gr.": 90,
      "maskapone sū ris gr.": 500,
      "mėlynės gr.": 450,
      "cukrus gr.": 80,
      žalatina: 15,
      "vandens ml.": 100,
    },
  },
  {
    id: 3,
    pavadinimas: "Makaronai su mėsa",
    kortele: {
      img: "https://s1.15min.lt/images/photos/2012/11/13/big/makaronai-su-mesa-50a22820a92c6.jpg",
      alt: "Makaronai su mėsa",
      title: "Makaronai su mėsa",
      description: "Sotus patiekalas su mėsa",
    },
    Ingradientai: {
      "veršiena gr.": 400,
      "feto sūris gr.": 100,
      "kiaušiniai vnt.": 1,
      "makaronai gr.": 500,
      "druska gr.": 1,
      "mėtos vnt.": 2,
    },
  },
];

// aktyvus patiekalas (pradžioje — pirmas)
let aktyvusPatiekalas = patiekalai[0];

// -------- KORTELIŲ RENDER --------
function renderCards() {
  cardsContainer.innerHTML = "";

  patiekalai.forEach((p) => {
    const card = document.createElement("div");
    card.className = "card";
    card.dataset.id = String(p.id);

    card.innerHTML = `
      <div class="check">✔</div>
      <img src="${p.kortele.img}" alt="${p.kortele.alt}">
      <div class="card-content">
        <h3>${p.pavadinimas}</h3>
        <p>${p.kortele.description}</p>
      </div>
    `;

    card.addEventListener("click", () => {
      setActiveRecipe(p.id);
    });

    cardsContainer.appendChild(card);
  });

  markActiveCard();
}

function markActiveCard() {
  document.querySelectorAll(".card").forEach((c) => {
    const id = Number(c.dataset.id);
    c.classList.toggle("active", id === aktyvusPatiekalas.id);
  });
}

// -------- AKTYVAUS PATIEKALO NUSTATYMAS --------
function setActiveRecipe(id) {
  const rastas = patiekalai.find((p) => p.id === id);
  if (!rastas) return;

  aktyvusPatiekalas = rastas;

  markActiveCard();
  renderIngredients(Number(portionRange.value));
}

// -------- INGREDIENTŲ RENDER --------
function renderIngredients(porcijos) {
  ingredientList.innerHTML = "";
  recipeTitle.textContent = aktyvusPatiekalas.pavadinimas;

  // SVARBIAUSIA: čia Ingradientai, ne ingredientai
  const ingr = aktyvusPatiekalas.Ingradientai;

  if (!ingr) {
    ingredientList.innerHTML = "<li>Šiam patiekalui nėra ingredientų.</li>";
    return;
  }

  Object.entries(ingr).forEach(([name, amount]) => {
    const li = document.createElement("li");
    li.textContent = `${name}: ${amount * porcijos}`;
    ingredientList.appendChild(li);
  });
}

// -------- PORCIJŲ KEITIMAS --------
portionRange.addEventListener("input", () => {
  const porcijos = Number(portionRange.value);
  portionValue.textContent = String(porcijos);
  renderIngredients(porcijos);
});

// -------- START --------
portionValue.textContent = portionRange.value;
renderCards();
renderIngredients(Number(portionRange.value));

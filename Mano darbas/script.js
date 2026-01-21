const portionRange = document.getElementById("portionRange");
const portionValue = document.getElementById("portionValue");
const ingredientList = document.getElementById("ingredientList");
// visi pasirinkimo mygtukai
const pasirinkimai = document.querySelectorAll(".pasirinkimas");
const patiekalai = [
  {
    id: 1,
    pavadinimas: "Vištiena su Salotomis",
    Ingradientai: {
      VistosFile: 1,
      kiausinis: 1,
      Miltai: 30,
      dziuvesiai: 30,
      salotos: 2,
      Vysniniaipomidorai: 6,
      Trumpavaisisagurkas: 1,
      Paprika: 0.5,
      Citrina: 0.5,
      Prieskoniaisalotoms: 2,
      ExtraVirginalyvuogiualiejus: 1,
    },
  },
  {
    id: 2,
    pavadinimas: "Tortas su mėlynėmis",
    Ingradientai: {
      baltasSokoladas: 160,
      kokosoAliejus: 16,
      dziuvesiaiRiekelemis: 90,
      maskaponeSuris: 500,
      melynes: 450,
      cukrus: 80,
      zalatina: 15,
      vandens: 100,
    },
  },
  {
    id: 3,
    pavadinimas: "Makaronai su mėsa",
    Ingradientai: {
      versiena: 400,
      fetoSuris: 100,
      kiausiniai: 1,
      makaronai: 500,
      druska: 1,
      metos: 2,
    },
  },
];

// aktyvus patiekalas (pradinis)
let aktyvusPatiekalas = patiekalai[0];

// Funkcija atvaizduoti vieno objekto rakta ir reiksme

function renderIngredients(porcijos) {
  ingredientList.innerHTML = "";

  Object.entries(aktyvusPatiekalas.Ingradientai).forEach(([key, value]) => {
    const li = document.createElement("li");
    li.textContent = `${key}: ${value * porcijos}`;
    ingredientList.appendChild(li);
  });
}

// patiekalo pasirinkimas
pasirinkimai.forEach((btn) => {
  btn.addEventListener("click", () => {
    const id = Number(btn.dataset.id);

    aktyvusPatiekalas = patiekalai.find((p) => p.id === id);

    renderIngredients(Number(portionRange.value));
  });
});

portionRange.addEventListener("input", () => {
  const porcijos = Number(portionRange.value);
  portionValue.textContent = porcijos;
  renderIngredients(porcijos);
});

// start
renderIngredients(Number(portionRange.value));

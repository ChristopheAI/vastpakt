const form = document.querySelector("#loshangCheck");
const result = document.querySelector("#checkResult");

const messages = [
  "Vink aan wat herkenbaar is.",
  "Er zit één los punt in. Klein genoeg om zichtbaar te maken.",
  "Er hangen twee punten los. Dit is waarschijnlijk meer dan gewoon drukte.",
  "Drie signalen. Hier draait werk vermoedelijk op geheugen of losse afspraken.",
  "Vier signalen. Dit is een sterke kandidaat voor een Eerste Zicht-scan.",
  "Vijf signalen. Begin niet met een tool. Begin met één Situatiekaart."
];

function updateResult() {
  const checked = form.querySelectorAll('input[name="signal"]:checked').length;
  result.textContent = messages[checked];
}

if (form && result) {
  form.addEventListener("change", updateResult);
}

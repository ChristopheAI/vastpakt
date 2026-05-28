const form = document.querySelector("#loshangCheck");
const result = document.querySelector("#checkResult");
const contactForm = document.querySelector("#contactForm");
const contactStatus = document.querySelector("#contactStatus");

const messages = [
  "Vink aan wat herkenbaar is. Eén vinkje is al genoeg om één plek met tijdverlies klein te bekijken.",
  "Eén plek met tijdverlies. Kies één voorbeeld en kijk wat je telkens opnieuw moet zoeken of overnemen.",
  "Twee plekken. Dit lijkt niet alleen drukte, maar werk dat tussen tools of mensen blijft hangen.",
  "Drie plekken. Start niet met een nieuwe tool. Start met één situatie waar zoeken of copy-paste terugkomt.",
  "Vier plekken. Neem één echte mail, offerte, Excel-rij of dossier mee en leg het spoor ernaast.",
  "Vijf plekken. Dit is waarschijnlijk het eerste stuk werk dat zichtbaar moet worden voordat je iets verandert."
];

function updateResult() {
  const checked = form.querySelectorAll('input[name="signal"]:checked').length;
  result.textContent = messages[checked];
}

if (form && result) {
  form.addEventListener("change", updateResult);
}

if (contactForm && contactStatus) {
  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const submitButton = contactForm.querySelector('button[type="submit"]');
    const formData = new FormData(contactForm);
    const payload = Object.fromEntries(formData.entries());

    contactStatus.textContent = "Even verzenden...";
    submitButton.disabled = true;

    try {
      const response = await fetch(contactForm.action, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });
      const data = await response.json();

      contactStatus.textContent = data.message || "Verstuurd. Je krijgt binnen 24 uur antwoord.";

      if (response.ok && data.ok) {
        contactForm.reset();
      }
    } catch (error) {
      contactStatus.textContent = "Het verzenden lukt nu niet. Mail rechtstreeks naar christophe@vastpakt.be.";
    } finally {
      submitButton.disabled = false;
    }
  });
}

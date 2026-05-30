function trackEvent(name, data) {
  window.umami?.track(name, data);
}

document.querySelectorAll('a[href="#contact"]').forEach((link) => {
  link.addEventListener("click", () => {
    trackEvent("contact_anchor_clicked", {
      label: link.textContent.trim()
    });
  });
});

const contactFormMetrics = document.querySelector("#contactForm");

if (contactFormMetrics) {
  let formStarted = false;

  contactFormMetrics.addEventListener("focusin", () => {
    if (formStarted) {
      return;
    }

    formStarted = true;
    trackEvent("contact_form_started");
  });
}

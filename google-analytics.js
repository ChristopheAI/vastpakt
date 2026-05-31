const GA_MEASUREMENT_ID = "G-LLHKC1RZZ9";
const GA_HOSTS = new Set(["vastpakt.be", "www.vastpakt.be"]);
const GA_CONSENT_KEY = "vastpakt_google_analytics_consent";

if (GA_HOSTS.has(window.location.hostname)) {
  const savedConsent = window.localStorage.getItem(GA_CONSENT_KEY);
  const analyticsGranted = savedConsent === "granted";

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };

  window.gtag("consent", "default", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: analyticsGranted ? "granted" : "denied",
    functionality_storage: "granted",
    security_storage: "granted"
  });

  const googleTag = document.createElement("script");
  googleTag.async = true;
  googleTag.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(googleTag);

  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID);

  function updateAnalyticsConsent(granted) {
    window.localStorage.setItem(GA_CONSENT_KEY, granted ? "granted" : "denied");

    window.gtag("consent", "update", {
      analytics_storage: granted ? "granted" : "denied"
    });

    if (granted) {
      window.gtag("event", "page_view", {
        page_location: window.location.href,
        page_title: document.title
      });
    }

    document.querySelector(".analytics-consent")?.remove();
  }

  function showAnalyticsConsent() {
    if (savedConsent) {
      return;
    }

    const banner = document.createElement("section");
    banner.className = "analytics-consent";
    banner.setAttribute("aria-label", "Analytics keuze");
    banner.innerHTML = `
      <p>
        Vastpakt kan Google Analytics gebruiken om te zien welke pagina's werken. Advertentie-opslag blijft uit.
      </p>
      <div class="analytics-consent-actions">
        <button class="button secondary" type="button" data-analytics-consent="denied">Alleen noodzakelijk</button>
        <button class="button primary" type="button" data-analytics-consent="granted">Analytics toestaan</button>
      </div>
    `;

    banner.addEventListener("click", (event) => {
      const button = event.target.closest("[data-analytics-consent]");

      if (!button) {
        return;
      }

      updateAnalyticsConsent(button.dataset.analyticsConsent === "granted");
    });

    document.body.appendChild(banner);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", showAnalyticsConsent);
  } else {
    showAnalyticsConsent();
  }
}

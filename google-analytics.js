const GA_MEASUREMENT_ID = "G-LLHKC1RZZ9";
const GA_HOSTS = new Set(["vastpakt.be", "www.vastpakt.be"]);

if (GA_HOSTS.has(window.location.hostname)) {
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };

  window.gtag("consent", "default", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "denied",
    functionality_storage: "granted",
    security_storage: "granted"
  });

  const googleTag = document.createElement("script");
  googleTag.async = true;
  googleTag.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(googleTag);

  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID);
}

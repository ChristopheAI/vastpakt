const MAX_FIELD_LENGTH = 4000;

function cleanField(value) {
  return String(value || "").trim().slice(0, MAX_FIELD_LENGTH);
}

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function sendJson(res, statusCode, payload) {
  res.statusCode = statusCode;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.end(JSON.stringify(payload));
}

function readBody(req) {
  if (!req.body || typeof req.body !== "string") {
    return req.body || {};
  }

  try {
    return JSON.parse(req.body);
  } catch (error) {
    return {};
  }
}

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return sendJson(res, 405, { ok: false, message: "Alleen POST is toegestaan." });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO || "christophe@vastpakt.be";
  const from = process.env.CONTACT_FROM;

  if (!apiKey || !from) {
    return sendJson(res, 503, {
      ok: false,
      message: "Het contactformulier is nog niet gekoppeld. Mail rechtstreeks naar christophe@vastpakt.be."
    });
  }

  const body = readBody(req);
  const name = cleanField(body.name);
  const email = cleanField(body.email);
  const situation = cleanField(body.situation);
  const company = cleanField(body.company);

  if (company) {
    return sendJson(res, 200, { ok: true });
  }

  if (!name || !isEmail(email) || situation.length < 20) {
    return sendJson(res, 400, {
      ok: false,
      message: "Vul je naam, e-mail en een concreet voorbeeld in."
    });
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from,
      to,
      reply_to: email,
      subject: `Vastpakt voorbeeld van ${name}`,
      text: [
        `Naam: ${name}`,
        `E-mail: ${email}`,
        "",
        "Voorbeeld:",
        situation
      ].join("\n")
    })
  });

  if (!response.ok) {
    return sendJson(res, 502, {
      ok: false,
      message: "Het verzenden lukt nu niet. Mail rechtstreeks naar christophe@vastpakt.be."
    });
  }

  return sendJson(res, 200, {
    ok: true,
    message: "Verstuurd. Je krijgt binnen 24 uur antwoord."
  });
};

/* kjcrask.com
   Two jobs only: the mobile menu and the ROOFTOP signup form.
   The form posts straight to MailerLite (CORS is open on their form endpoint).
   On success the BookFunnel link is revealed. Nothing else runs on this site.
   No honeypot on purpose: MailerLite's double opt-in is the bot filter, and a
   honeypot can be autofilled by a real reader's browser.
*/
(function () {
  "use strict";

  /* ---------- year ---------- */
  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  /* ---------- mobile menu ---------- */
  var button = document.getElementById("menu-button");
  var menu = document.getElementById("mobile-navigation");
  if (button && menu) {
    var setOpen = function (open) {
      menu.hidden = !open;
      menu.classList.toggle("is-open", open);
      button.setAttribute("aria-expanded", open ? "true" : "false");
      button.querySelector("span").textContent = open ? "Close" : "Menu";
      if (open) {
        var first = menu.querySelector("a");
        if (first) first.focus();
      }
    };
    button.addEventListener("click", function () { setOpen(menu.hidden); });
    menu.addEventListener("click", function (e) { if (e.target.tagName === "A") setOpen(false); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !menu.hidden) { setOpen(false); button.focus(); }
    });
  }

  /* ---------- ROOFTOP signup ---------- */
  var form = document.getElementById("reader-form");
  var formBlock = document.getElementById("signup-form-block");
  var success = document.getElementById("signup-success");
  var error = document.getElementById("form-error");
  var fallback = document.getElementById("form-fallback");
  var submit = document.getElementById("form-button");
  if (!form || !success) return;

  /* Flip to true once the MailerLite welcome automation is switched on,
     so the success copy can promise an inbox copy of the link. */
  var INBOX_COPY = false;

  var showError = function (message) {
    error.textContent = message;
    error.hidden = false;
    if (fallback) fallback.hidden = false;
  };

  var showSuccess = function () {
    formBlock.hidden = true;
    if (INBOX_COPY) {
      var p = success.querySelector("p");
      if (p) p.textContent = "ROOFTOP is ready below. Confirm your address from the email we just sent and a copy of the link follows.";
    }
    success.hidden = false;
    success.focus();
  };

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    error.hidden = true;
    if (fallback) fallback.hidden = true;

    var email = (form.elements["fields[email]"].value || "").trim();
    var name = (form.elements["fields[name]"].value || "").trim();
    var consent = form.elements["consent"].checked;

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) { showError("Enter a valid email address."); return; }
    if (!consent) { showError("Confirm that you want to receive reader email."); return; }

    var body = new URLSearchParams();
    body.set("fields[email]", email);
    if (name) body.set("fields[name]", name.slice(0, 100));
    body.set("fields[consent]", "yes, kjcrask.com form " + new Date().toISOString().slice(0, 10));
    body.set("fields[signup_source]", "kjcrask.com");
    body.set("ml-submit", "1");
    body.set("anticsrf", "true");

    submit.disabled = true;
    submit.firstChild.textContent = "Unlocking... ";

    fetch(form.action, {
      method: "POST",
      headers: { "Accept": "application/json", "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
      body: body.toString()
    }).then(function (response) {
      return response.json().catch(function () { return {}; });
    }).then(function (result) {
      if (result && result.success === true) { showSuccess(); return; }
      var message = "The reader list could not accept that signup. Please try again.";
      try {
        var fields = result.errors && result.errors.fields;
        var first = fields && Object.keys(fields)[0];
        if (first && fields[first] && fields[first][0]) message = fields[first][0];
      } catch (ignored) {}
      if (/already|exists|subscribed/i.test(message)) { showSuccess(); return; }
      showError(message);
    }).catch(function () {
      showError("The reader list is temporarily unavailable. Please try again in a moment.");
    }).then(function () {
      submit.disabled = false;
      submit.firstChild.textContent = "Unlock ROOFTOP ";
    });
  });
})();

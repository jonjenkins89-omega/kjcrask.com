# kjcrask.com

This folder IS the website. Plain HTML, CSS, and one small script. No build step.

- `Open-Site.cmd` opens it in your browser from this folder. Edit a file, save, refresh.
- `Publish.cmd` pushes it live to kjcrask.com (GitHub Pages, repo jonjenkins89-omega/kjcrask.com).

Where things are:
- `index.html` the whole home page (both trilogies, the ROOFTOP signup, about, footer)
- `content-warnings/index.html`, `privacy/index.html`, `rooftop/index.html` (the unlocked page), `404.html`
- `css/site.css` the design system. Additions go at the bottom.
- `js/site.js` the mobile menu and the signup form (posts straight to MailerLite, then shows the BookFunnel link)
- `images/web/` the covers as WebP at 360 and 720 wide, plus the social card

Book links live in `index.html`. Search for the ASIN to change one.
MailerLite form: account 2176883, form 192817568428328088 (group "ROOFTOP | Mirror Man").
ROOFTOP delivery after signup (no email gate): https://dl.bookfunnel.com/jji6oi7ijr
ROOFTOP opt-in page (captures email itself, used for no-JavaScript readers and book back matter): https://dl.bookfunnel.com/3jmhy2s88u

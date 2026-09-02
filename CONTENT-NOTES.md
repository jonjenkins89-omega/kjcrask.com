# CONTENT-NOTES: reading pages and downloads (built 2026-09-02)

Where every word on the new pages came from, what was left out and why, and what still needs ROOK.

## Pages and assets created

| Path | What it is | Indexable |
|---|---|---|
| `css/reading.css` | long-form reading styles; loads after `site.css` on the four pages below | n/a |
| `rooftop/index.html` | REWRITTEN unlocked page: Read it here / Download the EPUB / Send it to my Kindle or app | noindex (kept) |
| `rooftop/read/index.html` | ROOFTOP, full scene, read online | noindex, nofollow |
| `downloads/ROOFTOP_KJ_Crask.epub` | byte-for-byte copy of the published EPUB | binary |
| `sample/watched/index.html` | WATCHED chapter one, complete | yes, canonical + JSON-LD Book |
| `sample/what-he-took/index.html` | WHAT HE TOOK chapter one, complete | yes, canonical + JSON-LD Book |

Not touched: `index.html`, `js/site.js`, `css/site.css`, `privacy/`, `sitemap.xml`, `robots.txt`.

## Extraction record

### ROOFTOP (rooftop/read/)
- Source: `D:\workspace\projects\veritas\library\05-published-books\mirror-man\ROOFTOP\ROOFTOP.md`
- Cross-checked word for word against `ROOFTOP_KJ_Crask.epub` (`EPUB/text/ch004.xhtml`): identical text. The only difference between the two sources is apostrophes (the EPUB uses typographic ones, the markdown uses straight ones, 9 of them). The page uses the typographic ones, matching what readers get in the EPUB.
- First sentence: "They gave me a folder and a fee and a form that wanted her priced by the month."
- Last sentence of the story: "I know now."
- Word count: 4,922 in the story proper (57 paragraphs), 4,969 with the two italic closing paragraphs. **The brief said 1,756 words; the file is 4,922.** Nothing was cut.
- Scene breaks: the markdown has one `---` inside the text, between "I know now." and the closing note. Rendered as `<hr class="scene-break">`. The `---` under the title block is a title rule, not a scene break, and is not rendered (the page's own title block replaces it).
- Title block: `# ROOFTOP` and `### A Mirror Man story · Cassian's first night · K.J. Crask` became the micro-label "Mirror Man / Bonus scene", the h1 "ROOFTOP", and the deck "Cassian's first night." A separate byline was tried and dropped because it repeated the deck word for word.
- Italics and bold preserved in the two closing paragraphs (`<em>`, `<strong>HUNTED</strong>`).
- Em dashes in the source: 0.
- Ambiguity for ROOK: the author's closing note says the story "continues in HUNTED, book two". The brief's "Then keep going" button goes to WATCHED. Both are on the page (note is the author's text, button is per brief). The unlocked page's old line "ROOFTOP is the night before WATCHED begins" was not kept because the scene itself says the first night was eight years before the present; the new line is "ROOFTOP is the first night. WATCHED is the first book."

### WATCHED chapter one (sample/watched/)
- Source: `D:\workspace\projects\kjc-flywheel\retail\live-uploads\WATCHED_uploaded_1.epub`, file `OEBPS/xhtml/xhtml-0-4.xhtml` (nav.xhtml entry "Chapter One", anchor `aid_2`). High confidence: this is the Kindle Create export that went to KDP (dcterms:modified 2026-08-24T02:53:03Z).
- Chapter heading in source: "Chapter One" (div class-0-50, uppercased by the EPUB's CSS). Rendered as `<h2>Chapter One</h2>` uppercased by CSS the same way.
- First sentence: "Trauma Bay 2."
- Last sentence: "My other hand was at the locket on its chain before I sent it there, thumbing the clasp open and shut until the cold brass bit into my skin, a habit nineteen years older than the question of who had handled my things."
- Word count: 2,773 (45 paragraphs), 2,775 with the heading.
- Italics in source: none (the chapter file has no spans and no italic class). Scene breaks: none.
- Em dashes in the source: 0.
- Excluded: `xhtml-0-3.xhtml` is a 13-word book epigraph on its own page before Chapter One ("Anyone can take something from you. / Only a patient man gives it back folded."). It is front matter for the whole book, not part of chapter one, so it is not on the page. Also excluded: title page, copyright, content warning page. Chapter Two (`xhtml-0-5.xhtml`) is not included.
- Round-trip check: page article text vs source, 0 word differences.

### WHAT HE TOOK chapter one (sample/what-he-took/)
- Source: `D:\workspace\projects\kjc-flywheel\retail\live-uploads\WHAT_HE_TOOK_KC_book_1.docx` (the DOCX Kindle Create imported; medium confidence per `live-uploads\README.md`), read with python-docx. Chapter one is paragraphs 49 to 129 (0-based body paragraphs): 49 "CHAPTER ONE" (style Heading 1, pageBreakBefore), 50 "NOWHERE" (chapter title), 51 "MARA" (POV marker), 52 to 129 the text. Paragraph 130 is "CHAPTER TWO" / 131 "FORTY MINUTES".
- Heading block rendered as h2 "CHAPTER ONE", then "NOWHERE" and "MARA" as styled lines, text kept exactly as the source has it (uppercase).
- First sentence: "Detergent on the sheets."
- Last sentence: "I don't sleep." (typographic apostrophe in source)
- Word count: 3,222 (78 paragraphs), 3,226 with the three heading lines.
- Italics in source: none inside chapter one (0 italic runs). Bold: none. Comments/footnotes: none in the chapter. Scene breaks: none.
- Em dashes in the source: 0.
- Excluded, and the one real judgment call: paragraphs 47 and 48 are a centered italic notebook excerpt, 20 words ("Subject enters Whitaker Hall, Room 214. Seventeen students present. Subject engages. Animated. No contacts of concern." attributed "the notebook"). It sits on the SAME page as the dedication and the author's note, BEFORE the page break that starts Chapter One, so it is book front matter, not a chapter-one epigraph, and it is not on the page. If ROOK wants it as a hook above the chapter, it is 20 words and can be added in one paragraph. No prologue exists in either book.
- Round-trip check: page article text vs source, 0 word differences.

### Em dash tally (author's text preserved, none written)
- ROOFTOP.md: 0. WATCHED chapter one: 0. WHAT HE TOOK chapter one: 0. New pages and CSS: 0.

## Things I did that the brief did not spell out (ROOK to keep or revert)
- `reading.css` is also linked from `rooftop/index.html` (three stacked buttons needed `.option-stack` and a `.button-ink` outline variant, since `.button-quiet` is ivory-on-ivory on the legal page). Its head is otherwise unchanged and still noindex.
- `.reading` is left-aligned (`margin:3rem 0 0`), not `margin:0 auto` as in the brief's snippet, because the legal page is left-aligned and a centered 62ch column started 160px right of the h1 on desktop.
- `.legal-page .button{text-decoration:none}`: `site.css` underlines every link inside `.legal-page`, which underlined button labels.
- The `hr.scene-break` ornament was invisible at first (Chrome's UA `hr{overflow:hidden}` plus Tailwind's `hr{height:0}` clipped the `::after`); fixed with `height:auto;overflow:visible`.
- Sample pages carry og:title / og:description / og:url / og:image (cover WebP) and a twitter card on top of the head pattern, because they are the share targets. Delete if unwanted.
- All three buttons on `rooftop/index.html` carry `data-place="rooftop-page"`; the brief only named it for the first.
- `data-event` attributes are on every tracked link (`read_online`, `download_epub`, `bookfunnel_click`, `amazon_click` with `data-book` and `data-place`); nothing listens for them yet, that is `js/site.js` work.
- No GA snippet on the new pages (404.html has one; index does not). Add consistently at integration.
- `sitemap.xml` does not list `/sample/watched/` or `/sample/what-he-took/` yet.

## Verification done
- Tag balance, attribute quoting, duplicate ids, JSON-LD parse: all four pages pass.
- Every local href/src resolves to a file on disk.
- EPUB copy: 1,979,746 bytes both sides, sha256 `fcefd182f2792bfde7359d1983dae45e82e4013cb93f553856dc80afca0cdfd8` both sides.
- Rendered in Chrome at 1280 and 390 wide from a local `http.server`: header, reading column, scene break, keep-reading block, three-button stack all correct; console clean (site.js exits early on pages without the form).

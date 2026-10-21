# Component spec: Skills card icons (gearoid.eu home, `#skills`)

| Field  | Value                                                                                                                                                                                                                     |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Skill  | `acumen-giotto-component-design` (Giotto), with `design-system` (token audit at component scope) and `animation-spec` (to confirm no motion is added)                                                                     |
| Date   | 21 Oct 2026                                                                                                                                                                                                               |
| Target | `layouts/partials/cards/skill.html` (vendored from toha v4.10.0), `data/sections/skills.yaml`, and a new site style override at `assets/styles/override.scss`                                                             |
| Status | **UNREVIEWED: no paired gate ran.** `giotto-reviewer` could not be dispatched from this session (no agent-dispatch tool was available to Giotto). See `## Review`. Do not implement until a reviewer verdict is recorded. |
| Scope  | Spec only. No site file was changed.                                                                                                                                                                                      |

## 1. The problem, as the owner put it (21 Oct 2026)

> "The icons for each of the skills don't match the skill name, and the black ones are unreadable
> in dark mode - they need to be able to work both in dark and light mode or have a way to switch
> the colour of the icons when the dark and light modes are switched."

Two defects, one root cause each:

1. **Mismatch.** The cards use stock toha logos chosen for an older skill list
   (`technology.svg`, `oop.svg`, `xp.svg`, `docker.svg`, `tools.svg`; `data/sections/skills.yaml:24-40`).
   `docker.svg` is also a vendor logo, which this spec removes.
2. **Unreadable in dark mode.** A logo renders as `<img>` (`skill.html:18`). An `<img>` cannot
   inherit `color`, so a black SVG stays black on the dark card head (`#1e293b`). No theme switch
   can reach it without a second asset per mode.

**The fix in one line:** replace every `logo` with a Font Awesome Free solid glyph, which the theme
already loads as inline SVG with `fill="currentColor"`, and pin its colour to the theme's heading
token in each mode. One asset, both modes, no switching code.

## 2. Context locked before design

**Journey map (Luna).** None for this site. Not needed at component scope.

**Anvil requirements.** `docs/acumen/home/audit-section-skills.md` (Anvil, 21 Oct 2026) governs
the card text, order and links. This spec changes only the decorative icon and does not touch
anything Anvil specified. Conversion outranks aesthetics: if Anvil's validation objects to any
icon, Anvil wins.

**Forge-theme connection.** Not applicable. Giotto's forge metaphor belongs to a different project;
gearoid.eu uses toha's cyan-on-slate identity, and this spec stays inside it. The thematic tie here
is the card head's existing cyan underline (`skills.scss:13`, `:42`): the icon is monochrome so that
the underline stays the one accent in the card head (Von Restorff: one distinct element, not six
competing ones).

**Discrepancy to resolve before implementation (source and brief disagree).**
The brief fixes six card titles. The working tree, read on 21 Oct 2026, carries **five** cards with
different names: `skills.yaml:23-39` lists "Agentic engineering and AI developer tooling",
"Principal software engineering", "Technical coaching and training", "DevOps" and "Languages",
and `data/presence.json` `site_skills` carries the same five. `layouts/partials/sections/skills.html:22-24`
fails the build when a name in `skills.yaml` is missing from the record. So the six titles must
land in the record (`gotreasa/presence`) and in `skills.yaml` together, or the build breaks. That
rename is outside this spec. Section 4 specifies the icon for each of the six titles, and gives the
mapping for the five current names so the icon change can land on either list.

## 3. Font Awesome on this site: what actually ships

| Fact                                                                                                                                                                                                                                                           | Evidence                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| The theme loads Font Awesome as **SVG + JS**, not as a web font. Each `<i class="fa-solid ...">` is replaced at runtime by an inline `<svg class="svg-inline--fa ...">`.                                                                                       | toha `assets/scripts/application.js:3`: `import '@fortawesome/fontawesome-free/js/all'`       |
| The glyph paths use `fill="currentColor"`, so the icon takes the CSS `color` of its parent.                                                                                                                                                                    | Every SVG read below, e.g. `node_modules/@fortawesome/fontawesome-free/svgs/solid/code.svg:1` |
| **The site builds with Font Awesome Free 7.3.1, not 6.** The theme asks for `^6.6.0` (toha `package.json:41`), but the site's own `package.json:45` pins `^7.3.1` and `node_modules/@fortawesome/fontawesome-free/package.json:24` reads `"version": "7.3.1"`. | Correction to the brief, which said Free 6.                                                   |

Because of that last row, every icon below was verified in **both** versions, so the spec holds if
the site ever returns to the theme's pin:

- **Free 7.3.1:** the file exists at `node_modules/@fortawesome/fontawesome-free/svgs/solid/<name>.svg`
  in the installed package, and its header reads "Font Awesome Free 7.3.1".
- **Free 6:** the file exists at
  `https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/solid/<name>.svg`, header
  "Font Awesome Free 6.7.2" (fetched 21 Oct 2026).

All six are in the **solid** style, which is Free in both versions. None is a brand icon
(`fa-brands`), so no vendor logo remains.

## 4. Icon per card

| Card title (brief)                              | Current name in `skills.yaml`                | Class                         | Free 7.3.1 | Free 6.7.2 | Why it matches                                                                                                                                                                                                                                                                                     |
| ----------------------------------------------- | -------------------------------------------- | ----------------------------- | ---------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Agentic engineering and AI-assisted development | Agentic engineering and AI developer tooling | `fa-solid fa-robot`           | yes        | yes        | An agent is software that acts on its own; the robot is the most widely read glyph for "AI agent". Literal on purpose: this card leads the section and is the first offer, so recognition in under a second matters more than subtlety (Hick's Law: no decoding cost at the first decision point). |
| Software craftsmanship and Extreme Programming  | Technical coaching and training (see note)   | `fa-solid fa-hammer`          | yes        | yes        | Craftsmanship is the work of a skilled hand with a tool. The hammer says "craft" and "build" without implying a vendor or a language.                                                                                                                                                              |
| Software architecture and API design            | Principal software engineering               | `fa-solid fa-diagram-project` | yes        | yes        | The glyph is three boxes joined by connectors: a component diagram, which is what architecture and API design produce.                                                                                                                                                                             |
| Continuous delivery and DevOps                  | DevOps                                       | `fa-solid fa-infinity`        | yes        | yes        | The infinity loop is the standard DevOps symbol (plan, build, release, operate, round again). It replaces `docker.svg`, a vendor logo for one tool.                                                                                                                                                |
| Coaching, mentoring and training                | Technical coaching and training              | `fa-solid fa-chalkboard-user` | yes        | yes        | A person at a board: teaching and coaching. Distinct from the hammer, so the craft card and the coaching card do not read as the same skill.                                                                                                                                                       |
| Languages                                       | Languages                                    | `fa-solid fa-code`            | yes        | yes        | The `</>` mark is the universal sign for programming languages. `fa-language` was rejected because it means spoken languages.                                                                                                                                                                      |

**Note on the five-card list.** On the current five cards there is no separate craftsmanship card;
"Technical coaching and training" takes `fa-chalkboard-user`, and `fa-hammer` is unused until the
six-card list lands.

**Alternatives considered and rejected.**

| Card          | Alternative                         | Why rejected                                                                   |
| ------------- | ----------------------------------- | ------------------------------------------------------------------------------ |
| Agentic       | `fa-wand-magic-sparkles`            | Reads as "magic"; undercuts an engineering claim.                              |
| Craftsmanship | `fa-screwdriver-wrench`             | Reads as "settings" in most interfaces.                                        |
| Craftsmanship | `fa-vial-circle-check` (tests pass) | Too narrow: says TDD, not craftsmanship and XP.                                |
| Architecture  | `fa-sitemap`                        | Reads as a site map or org chart.                                              |
| DevOps        | `fa-rocket`                         | Says "launch", not "continuous".                                               |
| Coaching      | `fa-person-chalkboard`              | Valid; `fa-chalkboard-user` reads better at 19 px because the board is larger. |

## 5. Markup change in `layouts/partials/cards/skill.html`

**Current icon branch** (`skill.html:20-22`):

```go-html-template
{{ else if .icon }}
  {{ $iconName := .icon }}
  <h5 class="card-title"><span class="{{ $iconName }}"> {{ .name }}</span></h5>
```

**Defects in it:**

1. The icon sits **inside** the title, so it inherits title behaviour and cannot be spaced or sized
   like the logo.
2. The Font Awesome class is on the element that **also holds the card name**. Font Awesome's
   SVG + JS mode replaces the classed element with an `<svg>`. I think (not verified in a browser)
   this drops the name text with it; either way, the name must not live inside the element that
   the script replaces.
3. No `aria-hidden` is set in the template. Font Awesome adds it to the SVG it generates, but the
   template must not depend on a script for its accessibility.

**Specified icon branch** (mirrors the logo branch at `skill.html:18-19`: icon first, title second,
both direct children of the flex `card-head`):

```go-html-template
{{ else if .icon }}
  <span class="card-icon-xs" aria-hidden="true"><i class="{{ .icon }}"></i></span>
  <h5 class="card-title">{{ .name }}</h5>
```

- The wrapper `span.card-icon-xs` owns size, spacing and colour. It survives the `<i>` to `<svg>`
  swap, so the layout is stable before and after the script runs.
- `aria-hidden="true"` sits on the wrapper, so whatever Font Awesome inserts is hidden too. The icon
  is decorative: the `h5` beside it names the card, which matches the logo branch's `alt=""`
  decision recorded at `skill.html:3-4`.
- Update the comment block at `skill.html:1-4` to record this change and its date, per the vendoring
  convention already used there.

**Data change in `data/sections/skills.yaml`.** Replace each `logo:` line with `icon:` and the class
from section 4, for example `icon: fa-solid fa-robot`. **Remove the `logo` key**: the template tests
`.logo` first (`skill.html:11`), so a card that keeps both will still show the old image.

## 6. Visual spec

Target: an icon card must sit exactly where a logo card did, so the change reads as a swap, not a
redesign (Gestalt similarity: every card head has the same mark, gap, title rhythm).

| Property        | Value                                                                                | Derivation                                                                                                                                                                                                                                                                                                                       |
| --------------- | ------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Box             | 24 x 24 px, `flex: 0 0 24px`                                                         | Same as `.card-img-xs` (toha `components/cards.scss:44-47`). `flex: 0 0` stops a long title squeezing it.                                                                                                                                                                                                                        |
| Gap to title    | `margin-right: 0.5rem` (8 px)                                                        | Same as the logo (toha `sections/skills.scss:16`). One 8-pt grid unit.                                                                                                                                                                                                                                                           |
| Bottom margin   | `margin-bottom: 0.75rem` (12 px)                                                     | Same as the logo (`skills.scss:17`), so the card head keeps its height.                                                                                                                                                                                                                                                          |
| Glyph size      | `font-size: 1.2rem` (19.2 px); SVG `height: 1em; width: 1.25em`                      | The widest glyphs here (`robot`, `hammer`, `infinity`, `chalkboard-user`) have a 640 x 512 viewBox, so 1.25em = 24 px fills the box width exactly; the 512- and 576-wide glyphs centre inside it. Setting the width explicitly gives the same result under Free 6 (proportional by default) and Free 7 (fixed width by default). |
| Alignment       | `display: inline-flex; align-items: center; justify-content: center; line-height: 1` | Centres the glyph in the box. The box is top-aligned in the flex head, like the logo, so on a title that wraps to two lines the icon stays with the first line (Gestalt proximity).                                                                                                                                              |
| Vertical offset | none                                                                                 | The title is `font-size: large` (toha `cards.scss:26`), about 18 px at 1.2 line height, so a 21.6 px first line; its centre sits about 1 px above the 24 px box centre. Below perceptual threshold; do not nudge.                                                                                                                |

### Style override

The theme imports `./override` last (toha `assets/styles/application.template.scss:54`), and its own
`assets/styles/override.scss` is an empty placeholder for this purpose. A site file at the same
path shadows it. **I did not find an existing site `assets/styles/override.scss`** (read attempt on
21 Oct 2026 returned "does not exist"), and directory listing was unavailable in this session, so
the implementer should confirm no other site stylesheet already exists before creating this one.

```scss
// Skills card icon (component-skill-card-icons.md, 21 Oct 2026).
// Pinned to the heading token, not inherited: the icon sits inside the card's
// <a>, which would otherwise give it the link accent and its hover colour.
.skills-section .card .card-head .card-icon-xs {
  flex: 0 0 24px;
  width: 24px;
  height: 24px;
  margin-right: 0.5rem;
  margin-bottom: 0.75rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  line-height: 1;
  color: get-light-color('heading-color');

  svg {
    width: 1.25em;
    height: 1em;
  }
}

html[data-theme='dark'] .skills-section .card .card-head .card-icon-xs {
  color: get-dark-color('heading-color');
}
```

`get-light-color` and `get-dark-color` are the theme's own token functions (toha
`assets/styles/mixins.scss:11-17`), available because the override is compiled inside the theme's
bundle. No raw hex enters the site's code; the tokens remain the single source of truth.

## 7. Colour behaviour in both modes

**Mechanism.** toha sets `data-theme="light"` or `"dark"` on `<html>`, following
`prefers-color-scheme` until the visitor chooses (`assets/scripts/core/theme-scheme.js` and
`features/darkmode/index.js`, established in the brief). The rule above is scoped the same way as
the theme's own dark rules (`skills.scss:37-46`), so the icon changes colour in the same frame as
the card head. No script, no second asset.

**Why the heading token and not "inherit".** The icon is a sibling of the `h5`, not inside it, so
plain inheritance would take the colour of the enclosing `<a>`: the accent `#0891b2`, which turns
`#06b6d4` on hover (toha `components/links.scss:2`, `:13`, `:66`, `:72`). The table shows why that
fails.

**Backgrounds the icon sits on.** The icon is in `.card-head`, whose background the theme forces:

| Mode  | Card head background | Token and source                                                      |
| ----- | -------------------- | --------------------------------------------------------------------- |
| Light | `#f8fafc`            | `bg-primary`, light (`variables.scss:33`), applied at `skills.scss:8` |
| Dark  | `#1e293b`            | `bg-card`, dark (`variables.scss:68`), applied at `skills.scss:41`    |

**Contrast, WCAG 2.2 SC 1.4.11 non-text contrast, target 3:1 in both modes.** Ratios derived with
the WCAG relative-luminance formula; luminances shown so the numbers can be checked.

| Option                        | Mode  | Icon                            | Icon L | Background L | Ratio       | Result            |
| ----------------------------- | ----- | ------------------------------- | ------ | ------------ | ----------- | ----------------- |
| **Specified: heading token**  | Light | `#1e293b` (`variables.scss:40`) | 0.0218 | 0.9535       | **13.98:1** | pass              |
| **Specified: heading token**  | Dark  | `#f1f5f9` (`variables.scss:70`) | 0.9086 | 0.0218       | **13.36:1** | pass              |
| Rejected: inherit link accent | Light | `#0891b2`                       | 0.2352 | 0.9535       | 3.52:1      | pass, thin margin |
| Rejected: inherit link accent | Dark  | `#0891b2`                       | 0.2352 | 0.0218       | 3.97:1      | pass, thin margin |
| Rejected: accent on hover     | Light | `#06b6d4`                       | 0.3825 | 0.9535       | **2.32:1**  | **fail**          |

Strictly, SC 1.4.11 exempts a purely decorative graphic. The 3:1 target is held anyway because the
owner's complaint is exactly that the icons cannot be seen, and an icon worth showing is worth
seeing.

The icon matches the title colour exactly, so icon and title read as one unit, and the cyan
underline stays the card head's only accent.

## 8. State matrix

The card is a link (`skill.html:8`). Icons are static decoration; only states that can occur are
listed.

| State                             | Icon colour                | Icon transform | Notes                                                                                                                                                 |
| --------------------------------- | -------------------------- | -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| Default                           | heading token for the mode | none           |                                                                                                                                                       |
| Hover                             | unchanged                  | none           | The card's own hover (shadow and border, toha `cards.scss:7-16`, `:111-114`) is the feedback; the icon holding still keeps the contrast in section 7. |
| Focus (keyboard)                  | unchanged                  | none           | Focus belongs to the `<a>`; this spec does not change it. See adjacent finding A1.                                                                    |
| Active                            | unchanged                  | none           |                                                                                                                                                       |
| Disabled, Loading, Success, Error | not applicable             |                | Static content card; no such states exist.                                                                                                            |

## 9. Motion

**None added.** The icon has no entry, hover or theme-change animation, so no
`prefers-reduced-motion` fallback is needed for it. The colour change on theme switch is immediate
(the override declares no `transition`). The theme's existing card transition
(`transition: all ease-out 0.3s`, toha `mixins.scss:41-43`, applied at `cards.scss:3`) is
pre-existing and out of scope.

## 10. Responsive

| Breakpoint                         | Behaviour                                                                                                                                      |
| ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Desktop (`col-lg-4`, three across) | Long titles wrap to two lines; the icon stays top-left with the first line.                                                                    |
| Tablet (`col-sm-6`, two across)    | Same.                                                                                                                                          |
| Mobile (`col-xs-12`, one across)   | Same; the 24 px box is unchanged. The icon is not a touch target (the whole card is the link), so the 44 x 44 px minimum does not apply to it. |

## 11. Performance

No new request and no new bytes for the page: Font Awesome's `js/all` is already in the bundle, and
the six glyphs are inside it. Removing five `<img>` logos removes five image requests. The override
adds well under 1 KB of CSS.

## 12. Giotto phases not run, and why

- **Figma sync:** not run. No Figma MCP server was available in this session.
- **Dark theme audit / award readiness:** not run as full audits; out of scope for a single
  decorative element. The component-level dark-mode checks are in section 7.

## 13. Adjacent findings (not acted on)

- **A1. Card focus ring.** The theme styles `.card:focus` (`cards.scss:8`), but the focusable element
  is the `<a>` around the card, so `.card:focus` never matches. Keyboard focus on a Skills card
  depends on the browser default outline. Worth a check against WCAG 2.2 SC 2.4.7 and 2.4.11 in
  both modes; not part of this spec.
- **A2. Six titles versus five records.** See section 2. The rename needs the record and
  `skills.yaml` to move together.

## Review

**Status: UNREVIEWED: no paired gate ran.**

`giotto-reviewer` was requested by the brief. Giotto ran as a subagent with no agent-dispatch tool,
so it could not invoke the reviewer. The orchestrator should dispatch `giotto-reviewer` on this
file, then record here: the verdict (`APPROVED`, or a raw `REJECTED` or `APPROVED_WITH_NOTES`
mapped to `NEEDS_REVISION → resolved`), each finding, and its adjudication re-verified against
source with `path:line`, signed and dated.

Points a reviewer should test first:

1. The Font Awesome 7.3.1 versus 6 finding (section 3), since the brief assumed 6.
2. The "I think" claim in section 5, defect 2, about the SVG swap dropping the title text.
3. The contrast arithmetic in section 7.
4. Whether `fa-robot` is too literal for the lead card (section 4).

_Giotto, 21 Oct 2026._

### Adjudication (Koru, 21 Oct 2026)

`giotto-reviewer` returned **APPROVED_WITH_NOTES** (iteration 1 of 2). Each finding was checked
against source:

| #   | Finding                                                  | Adjudication                                                                                                                                                                                                                                                                                                              |
| --- | -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| F1  | Six cards and non-Services titles contradict Anvil R1/R3 | **Rejected.** Gearoid overruled the conversion framing on 21 Oct 2026: "The skills is meant to describe the skills that I have. At the moment, it's more of a sales pitch for the services without telling what my skills are." The six skill-area titles are his direction; Anvil's R1/R3 no longer govern this section. |
| F2  | Table row L80 double-assigns a current card              | **Confirmed.** Superseded: the five-card names are retired, so the six titles are the only mapping.                                                                                                                                                                                                                       |
| F3  | Card focus unverified                                    | **Confirmed, pre-existing.** Checked by keyboard in a browser, both modes, at the local review; any fix is separate.                                                                                                                                                                                                      |
| F4  | Unverified claim that FA drops the title text            | **Confirmed.** The branch was unused; the fix is structural (icon and title as siblings).                                                                                                                                                                                                                                 |
| F5  | Which Font Awesome copy the bundle resolves              | **Confirmed.** Checked in the built output.                                                                                                                                                                                                                                                                               |
| F6  | Optical parity of glyphs                                 | **Confirmed.** Checked visually at the local review.                                                                                                                                                                                                                                                                      |
| F7  | Robot reads as a chatbot                                 | **Considered, kept.** The card is about building agents; `fa-terminal` names the interface, not the skill.                                                                                                                                                                                                                |
| F8  | No-JS state                                              | **Confirmed.** With JavaScript off, each card shows an empty decorative box; layout holds.                                                                                                                                                                                                                                |
| F9  | Stale comment and orphaned logos                         | **Confirmed.** Comment updated; unused logo files listed for deletion on Gearoid's word only.                                                                                                                                                                                                                             |
| F10 | Originality                                              | **Noted.** Not needed for this change.                                                                                                                                                                                                                                                                                    |

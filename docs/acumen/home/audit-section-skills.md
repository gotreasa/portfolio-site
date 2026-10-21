# Section audit: Skills (gearoid.eu home, `#skills`)

| Field  | Value                                                                                                                                                                    |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Skill  | `acumen-anvil-audit-section` (Anvil), with `objection-map`, `cta-optimize`, `social-proof-architecture` and `rewrite-for-conversion` applied at section scope            |
| Date   | 21 Oct 2026                                                                                                                                                              |
| Target | https://gearoid.eu/#skills; source `data/sections/skills.yaml`; rendered by toha v4.10.0 `layouts/partials/sections/skills.html` and `layouts/partials/cards/skill.html` |
| Status | **UNREVIEWED: no paired gate ran.** `anvil-reviewer` could not be dispatched from this session (no agent-dispatch tool available). See `## Review`.                      |
| Scope  | Spec only. No site file was changed.                                                                                                                                     |

## 1. Context locked before scoring

**Conversion goal of the page.** One action: the visitor books an appointment for contract work
("Book an Appointment" in About; the live fetch of 21 Oct 2026 shows it there, and no CTA in or
next to Skills).

**Visitor.** Hiring manager, CTO or recruiter for contract work. Positioning decided 21 Oct 2026:
four offers, agentic first (`presence/ssot/site-blocks.md:15-18`; `data/sections/services.yaml:23-34`).

**Awareness (Schwartz).** By the time a visitor reaches Skills, they are **product-aware**: they
know who he is and what he sells, and they are checking the detail. A recruiter who jumps here from
the navbar (`showOnNavbar: true`, `skills.yaml:6`) is **solution-aware**: they have a role spec
and are matching keywords.

**Scroll position: the brief and the source disagree.** The brief places Skills after About and
Services. The weights put it fifth: About 1 (`about.yaml:6`), Services 2 (`services.yaml:5`),
Experience 3 (`experiences.yaml:5`), Posts 4 (`posts.yaml:6`), Skills 5 (`skills.yaml:5`), then
Honours and awards and Education (live page, 21 Oct 2026). This audit uses the **actual position:
after Experience and Posts, before Honours**. The requirements in section 5 hold at either
position; only the proof-clause rule (R7) leans on what the visitor has already read.

**Journey map.** None from Luna for this site. The mapping below is Anvil's own assumption and is
labelled as such (`integrate-journey-map` rule: no journey map, so state the limitation).

**AIDA stage.** **Desire**, late. Experience has given the career story; Skills must turn "he has
done good work" into "he can do _our_ work, in _our_ stack".

**Target objection (named before scoring).** "Can he do the specific thing I am hiring for, with
the tools we use?" This is the Technical Evaluator's "Does this fit our stack?" in the
`objection-map` persona set, and the recruiter's keyword match. A second, quieter objection rides
with it: "Is this the same person the Services section described, or a different one?"
(consistency, Cialdini).

## 2. Current content (verbatim, `data/sections/skills.yaml`)

| #   | Card                   | Summary                                                                                                                                                                                                                                                                                           | Link                      |
| --- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| 1   | Software Craftsmanship | "Has a deep understanding of software engineering principles and best practices including agile, design patterns, hexagonal architecture, clean code, refactoring, and domain-driven design." (`:9-13`)                                                                                           | none                      |
| 2   | Extreme Programming    | "Applies and trains Extreme Programming (XP) techniques, such as direct client communication, pair programming, test-driven development (TDD), behaviour-driven development (BDD), continuous integration and continuous delivery (CI/CD), team code ownership, and coding standards." (`:15-20`) | none                      |
| 3   | Cloud                  | "Fond of distributed architectural patterns and technologies. Worked with IBM Cloud." (`:22-25`)                                                                                                                                                                                                  | none                      |
| 4   | Docker                 | "Builds most applications to run in containers. Prefers containerized development. Experienced with multi-stage, multi-arch build process." (`:27-32`)                                                                                                                                            | `https://www.docker.com/` |
| 5   | Git                    | "Experienced with git-based development (using the command-line interface). Mostly uses GitHub." (`:40-44`)                                                                                                                                                                                       | `https://git-scm.com/`    |
| 6   | Other technologies     | "Varying experience in HTML, CSS, JavaScript, TypeScript, Java, Python, C, C++, and SQL." (`:46-50`)                                                                                                                                                                                              | none                      |

A commented-out Linux card sits at `:34-38`.

Rendering facts that matter: each card is `col-xs-12 col-sm-6 col-lg-4` (one, two or three per
row), and when `url` is set the **whole card** becomes an anchor with `target="_blank"`
(`cards/skill.html:1,4`). The section has no CTA.

## 3. Score

**Score: 29.5 / 100.** This is on the line between "0-29: actively repelling" and "30-49:
significant problems". Either way, the section needs to be restructured, not edited.

| Dimension          | Weight | Score | Weighted | Rationale                                                                                                                                                                                                                                                                                                                                                                                     |
| ------------------ | ------ | ----- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Value Prop Clarity | 20%    | 3/10  | 6.0      | No card names any of the four offers. Agentic engineering, offer one, is absent from the section. The first card, "Software Craftsmanship", is the title of a service retired on 21 Oct 2026 (`site-blocks.md:18-19`). A visitor cannot say in 5 seconds how these skills serve what he sells (StoryBrand: the guide's competence must point at the hero's problem).                          |
| CTA Strength       | 15%    | 1/10  | 1.5      | No prompt. The only clickable elements are two whole-card links that take the visitor off-site to docker.com and git-scm.com in a new tab (`skills.yaml:32,44`; `cards/skill.html:4`). That is a Prompt pointing away from the goal (Fogg B=MAP: a Prompt must lead to the target behaviour).                                                                                                 |
| Social Proof       | 15%    | 2/10  | 3.0      | Every card is self-assertion. "Has a deep understanding" and "Builds most applications to run in containers" cannot be evidenced by the record (brief; no matching fact in `presence/ssot/facts.yaml`). The XP Coach credential that would back card 2 sits in About, four sections away (Cialdini: authority must be within reach of the claim; `social-proof-architecture` proximity rule). |
| Objection Handling | 15%    | 3/10  | 4.5      | The stack objection is partly met: languages and Docker are named. But "Varying experience" (`:49`) and "Worked with IBM Cloud." (`:25`) answer "can he?" with "a bit", and a Git card at the same weight as XP signals that table stakes are a headline skill (objection-map rule: a partly addressed objection is worse than silence, because it raises the doubt without resolving it).    |
| Emotional Tone     | 10%    | 4/10  | 4.0      | Late Desire needs calm confidence (`audit-section` benchmark: Decision = confidence). The cards hedge ("Varying", "Fond of", "Mostly uses") and use a third-person subjectless voice that matches neither About (first person, `about.yaml:18-20`) nor Services (imperative, live page).                                                                                                      |
| Information Scent  | 10%    | 3/10  | 3.0      | Cards 3 and 5 (Cloud, Git) carry scent for roles he is not selling; nothing carries scent for agentic engineering or principal engineering. A visitor arriving from Services finds no thread back to the offer they were weighing (Information Scent Theory, Pirolli and Card).                                                                                                               |
| Friction Level     | 10%    | 6/10  | 6.0      | Structurally light: six short cards in a scannable grid. Friction comes from card 2's seven-item list, which buries the keywords a scanner looks for (Nielsen: F-pattern scanning reads the first words of each block), and from claims a CTO stops to doubt.                                                                                                                                 |
| Specificity        | 5%     | 3/10  | 1.5      | Tools are named, which is good. There is no number, client, timeline or outcome on any card, though the record clears several for the portfolio surface.                                                                                                                                                                                                                                      |
| **Total**          |        |       | **29.5** | Weighted sum: 6.0 + 1.5 + 3.0 + 4.5 + 4.0 + 3.0 + 6.0 + 1.5                                                                                                                                                                                                                                                                                                                                   |

## 4. Top issues, by impact

### Issue 1. The cards describe the old positioning, not the four offers

**Violated:** StoryBrand (the guide's competence must map to the hero's problem), Information
Scent, Jobs-to-be-Done.
**Evidence:** Card order Software Craftsmanship, XP, Cloud, Docker, Git, Other
(`skills.yaml:9-50`) against the offers Agentic, Principal, Coaching, DevOps
(`services.yaml:24-34`). Zero agentic content.
**Fix:** Rebuild as five cards: one per offer, in Services order, plus one Languages card
(section 5, R1 to R3).
**Expected impact:** The visitor checking "can he do the agentic work?" finds the answer in the
first card instead of no card. This removes the main reason for a product-aware visitor to doubt
that the Services claims have depth behind them (Cialdini: consistency between what is claimed and
what is shown). For a site at this traffic, the measurable proxy is clicks from Skills cards to the
`/services/*` pages (R9), not a percentage lift; this spec does not invent one.

### Issue 2. Unevidenced claims, hedges and out-of-record items

**Violated:** Cialdini (authority needs verifiable specificity); `objection-map` rule "every claim
can generate a counter-objection: if you cannot prove it on the page, soften the claim".
**Evidence:** "Has a deep understanding" (`:12`), "Builds most applications to run in containers"
(`:30`), "Fond of" (`:25`), "Varying experience" (`:49`), "Mostly uses GitHub" (`:43`), C and C++
(`:50`; the record's language list is Bash, CSS, HTML, Java, JavaScript, Python, SQL and TypeScript,
`site-blocks.md:272`), en-US "containerized" (`:30`).
**Fix:** Every item on every card traces to a record block or a portfolio-cleared fact (R4 to R6).
Where a requirement needs a fact the record may not hold, section 5 marks it **[RECORD CHECK]**.
**Expected impact:** A CTO who tests any one claim in interview finds it true. This protects the
whole page, because one claim that fails a check discounts the claims around it (Cialdini:
authority).

### Issue 3. The only links send the visitor away

**Violated:** Fogg B=MAP (the Prompt must point at the target behaviour), Information Scent.
**Evidence:** `url: 'https://www.docker.com/'` (`:32`) and `url: 'https://git-scm.com/'` (`:44`)
make two whole cards exit links (`cards/skill.html:4`).
**Fix:** Remove both external URLs. Point each offer card at its own `/services/*` page, the same
routes Services uses (`services.yaml:25,28,31,34`). This is a low-commitment Prompt ("read how this
works") that fits product-aware Motivation at this depth, and keeps "Book an Appointment" as the
single high-commitment ask (`cta-optimize`: CTA progression).
**Implementation note for the crafter, not the author:** the theme partial opens every card URL in
a new tab with `rel="noopener"` (`cards/skill.html:4`). An internal link in a new tab is a small
Usable-level cost (Walter). The right fix is a site-level override of the card partial; that is a
separate `feat` change against this spec, not part of the content rewrite.

### Issue 4. Risk of duplicating Services

**Violated:** Semantic satiation and the "Redundant stages" failure in `funnel-map`.
**Evidence:** Services already states each offer and spends the strongest figures (gSmith
`other_authors` and `cycle_time`, MySA `end_users`, insurer `taught_personally` and `reach`, the
`deploy.*` set; `site-blocks.md:251-267`).
**Fix:** Services says **what the client gets**. Skills says **what he does it with**: tools and
practices first, then at most one proof clause that Services has not used (R6, R7).

### Issue 5. The section is the one part of the site not sourced from the record

**Violated:** Not a conversion framework; a drift risk that produces Issue 2. Recorded as finding A3
in `docs/site-remediation-plan.md` (cited at `site-blocks.md:77-79`; that plan was not read for
this audit).
**Fix (recommendation, Gearoid's call, outside this spec's write scope):** carry the five card
summaries as a record block in `presence/ssot/site-blocks.md`, joined by name as Services already
is (`services.yaml:8-21`).

## 5. Requirements for the rewrite

The content author writes against these. Each requirement says what it is for.

### Structure

- **R1. Five cards.** Four offer cards and one Languages card. Five fit the grid as 3 + 2 on
  desktop and stack cleanly on mobile (`col-xs-12`). Six would need a card with no job, which is
  noise (`funnel-map`: redundant stages). If a balanced 3 + 3 grid matters for design, that is
  Giotto's call; do not add a sixth card of filler to get it.
- **R2. Order.** (1) Agentic engineering and AI developer tooling, (2) Principal software
  engineering, (3) Technical coaching and training, (4) DevOps, (5) Languages. Cards 1 to 4 follow
  the Services order exactly, so the visitor reads the same story twice in the same sequence
  (Cialdini: consistency; Information Scent: parallel structure). Languages goes last because it is
  reference detail for keyword matching, not a reason to hire.
- **R3. Titles.** At most four words, so the title fits beside the 24 px logo at three cards per
  row. Each offer card's title must share its first word with the Services name (for example
  "Agentic engineering", "Principal engineering", "Coaching and training", "DevOps"), so the scent
  carries across sections. Exact wording is the author's.

### Every card

- **R4. Length.** Offer cards: 20 to 35 words, at most two sentences. Languages card: up to 55
  words (see card 5). About the length of the current card 2 (32 words, nearly all list) and long enough to carry
  one proof clause.
- **R5. Sentence one names tools and practices, front-loaded.** The first three to five words are
  the terms a scanner is looking for (Nielsen: F-pattern scanning). No adjectives of degree
  ("deep", "expert", "strong", "varying"), no preferences ("fond of", "prefers").
- **R6. Sentence two, if present, is one proof clause** built from a fact whose `publish:` line in
  `presence/ssot/facts.yaml` includes `portfolio`. Facts cleared for `cv` only may not be used on
  the site. Respect each fact's `note` (for example "never compute a multiplier").
- **R7. No fact already used in Services** (listed under Issue 4). The visitor has read those twice
  by this depth (Services, then Experience); a third time adds nothing (semantic satiation).
- **R8. Voice and spelling.** Subjectless and imperative, matching the Services cards ("Build...",
  "Teach and coach..."). British spelling ("behaviour", "organise", "containerised" if the word is
  used at all). No em dashes.
- **R9. Links.** Offer cards 1 to 4 link to `/services/agentic-engineering`,
  `/services/principal-software-engineering`, `/services/technical-coaching-and-training` and
  `/services/devops`. Card 5 has no link. No external URLs.
- **R10. Icons.** Reuse files in `assets/images/sections/skills/` where one fits. `docker.svg` is
  confirmed present; the folder could not be listed in this session, so whether a suitable icon for
  the agentic card exists is unverified. If none does, Giotto supplies one. Do not use a vendor
  logo (for example Anthropic's or Claude's) without checking that brand's usage terms.

### Card by card

**Card 1. Agentic engineering and AI developer tooling.** _Job at this position:_ prove the lead
offer has hands-on tooling behind it, for a CTO who has just read the Services claim.

- Name: Claude Code; building agents, skills and review tooling for software delivery. Source:
  `linkedin_headline` and `website_cv_summary` ("I build AI agent tooling on Claude Code",
  `site-blocks.md:119-121,295`).
- Proof clause: `vita.evaluation` (publish includes `portfolio`, `facts.yaml:406-410`), in a short
  form such as "changes evaluated with pre-registered, blind-graded A/B experiments". Its note
  governs: no run counts, never "better", never "fine-tuning".
- Must not appear: fine-tuning, GitHub Copilot, Cursor, beta-user counts, any test count (both
  `test_suite` facts are unpublished, `facts.yaml:235,405`), "fail-closed", "five consecutive
  releases" (`never_cite.yaml`). Do not repeat gSmith's `other_authors` or `cycle_time` (R7).
- **[RECORD CHECK]** Naming nWave or any contribution to it needs a portfolio-cleared fact; the
  `nwave` group in `facts.yaml:324-331` is empty by ruling.

**Card 2. Principal software engineering.** _Job:_ show the architecture and systems depth behind
"set technical direction", for the evaluator asking "has he owned systems like ours?".

- Name: platforms and practices from the record: Node.js, Cloudant, Salesforce, IBM Cloud, Cloud
  Foundry (`skills_by_category` provenance, `site-blocks.md:83-87`). This card absorbs the old
  Cloud card.
- Proof clause: `mysa.incentive_lead_time`, "cut the lead time on a new incentive from at least six
  months to a couple of days" (portfolio cleared, `facts.yaml:284-288`). It is not used in
  Services.
- Drop: "Fond of distributed architectural patterns", "Worked with IBM Cloud." as a standalone
  sentence.
- **[RECORD CHECK]** "Hexagonal architecture", "domain-driven design" and "design patterns" from
  the old card 1 are not in any block read for this audit. Keep them only if the record names them.
- Must not appear: AWS (removed by Gearoid, 21 Oct 2026), OpenShift, React (`never_cite.yaml`).

**Card 3. Technical coaching and training.** _Job:_ show the method he teaches, for the buyer
asking "what will my teams actually do differently?". This card merges the old Software
Craftsmanship and XP cards.

- Name, from `skills_by_category` (`site-blocks.md:287-289`): test-driven development, ATDD, BDD,
  pair programming, clean code, refactoring, continuous delivery, Extreme Programming. Pick the
  four to six most searched, not all eight.
- Proof clause, one of: `insurer.programme_shape` ("two weeks of hands-on training followed by six
  weeks of embedded coaching", `facts.yaml:159-163`) or `insurer.teams_concurrent` ("up to five
  cross-functional teams", `facts.yaml:175-179`). The XP Farm XP Coach certification
  (`website_cv_back_matter`, `site-blocks.md:303`) may be named as authority.
- Drop: "Has a deep understanding", "direct client communication", "team code ownership",
  "coding standards" (low scent for a buyer; length).
- Do not repeat `insurer.taught_personally` or `insurer.reach` (R7).

**Card 4. DevOps.** _Job:_ name the delivery toolchain, for the evaluator matching against their
own pipeline. This card absorbs the old Docker and Git cards.

- Name, from `skills_by_category` (`site-blocks.md:290-291`): Docker, Terraform, Jenkins, IBM
  UrbanCode Deploy; CI/CD. Git may appear as one item in the list, not as a card
  (`linkedin_skills` lists Git and GitLab, `site-blocks.md:161-162`).
- Proof clause: optional. The `deploy.*` facts are spent in Services (R7).
  `salesconnect.env_setup` ("from days to an hour", portfolio cleared, `facts.yaml:355-359`) is a
  candidate, but its note says the problem was producing a correct Linux-like environment at all;
  **[RECORD CHECK]** use it here only if the record ties it to tooling named on this card.
- Drop: "Builds most applications to run in containers", "Prefers containerized development".
- **[RECORD CHECK]** "multi-stage, multi-arch" builds are not in any block read for this audit.
  "Mostly uses GitHub" likewise.

**Card 5. Languages.** _Job:_ let a recruiter tick the language row of a role spec in one glance,
without implying languages he only coaches in.

- Content: the `skills` block (`site-blocks.md:272-275`, `publish: portfolio`), which names Bash,
  CSS, HTML, Java, JavaScript, Python, SQL and TypeScript, then frames COBOL and .NET as coaching
  contexts. **The framing sentence is mandatory if COBOL or .NET appear** (record section 8.7 ruling,
  narrated at `site-blocks.md:48-62`). The block is about 50 words; this is why R4 allows 55 here.
  Shortening is allowed only by dropping COBOL and .NET together with their sentence.
- Drop: "Varying experience", C, C++.

### Drop list (summary)

Cards: Cloud, Docker, Git as standalone cards; Software Craftsmanship as a separate card. Phrases:
"deep understanding", "Fond of", "Varying experience", "Builds most applications to run in
containers", "Prefers containerized development", "Mostly uses GitHub". Items: C, C++, AWS, React,
OpenShift. Links: docker.com, git-scm.com. The commented Linux card (`skills.yaml:34-38`) is dead
data; removing it is the author's call and has no conversion effect.

## 6. Testing

At a personal portfolio's traffic, an A/B test on this section would not reach significance in any
useful window. Per the `ab-hypothesis` rule, these are **"just do this"** fixes (clear violations),
not tests. The one measurement worth adding: count clicks from Skills cards to `/services/*` pages
for 90 days after the change, as a directional signal only.

## 7. Mobile note

At `col-xs-12` the five cards stack to one column, roughly five card heights. The section has no
form and no CTA of its own, so the mobile risks in `mobile-conversion-audit` (thumb zone, form
friction) do not apply. The one mobile-specific point: whole-card links (R9) are large touch
targets, which is good, but the card must look tappable (Giotto).

## Review

**Verdict: NEEDS_REVISION → resolved in the brief to the content author** (raw `anvil-reviewer`
verdict REJECTED, 21 Oct 2026). Diagnosis and score stand: the reviewer recomputed 29.5 from the
skill's weights. Each finding was re-verified against source by Koru, the orchestrator, because
the producing Anvil session could not dispatch or adjudicate.

| #   | Finding                                                     | Adjudication                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --- | ----------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Names drawn from `skills_by_category` are website-CV-scoped | **Rejected in part.** Clearance in the record is per entry and per fact, not per list: Node.js, Docker, Jenkins, Travis, Cloud Foundry, IBM Cloud, UrbanCode Deploy and the practices appear in the `cv` sections of experience entries whose `publish:` lines include `portfolio` (for example `presence/ssot/experience.md:763`). The narration at `site-blocks.md:84-90` traces each `skills_by_category` name to a record source. Accepted part: the card author cites the entry, not the list. |
| 2   | Terraform rests on private notes only                       | **Rejected.** `experience.md:770`, cv section of `ibm_software_craftsmanship_coach` ("Wrote infrastructure as code in Terraform as part of the XP Farm..."), an entry cleared for portfolio (`:763`).                                                                                                                                                                                                                                                                                               |
| 3   | Card 1 quote misattributed                                  | **Confirmed.** Cite the `services` block (`site-blocks.md`, publish: portfolio).                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 4   | Vita proof paraphrased                                      | **Confirmed in its fix, rejected in its evidence.** Use the cleared value of `vita.evaluation` verbatim (`facts.yaml:407`); the value carries no "His design, executed by Claude" text.                                                                                                                                                                                                                                                                                                             |
| 5   | Title example contradicts rule                              | **Confirmed.** Titles are the exact Services names.                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 6   | "Software Craftsmanship" misread as retired                 | **Confirmed.** Retired was "Software Craftsmanship Coach"; the term is his top LinkedIn skill. Decision put to Gearoid.                                                                                                                                                                                                                                                                                                                                                                             |
| 7   | Unsourced traffic premise; "semantic satiation"             | **Confirmed.** No A/B is proposed, so the premise is dropped rather than sourced; the phrase is cut.                                                                                                                                                                                                                                                                                                                                                                                                |
| 8   | TypeScript "occasionally"                                   | **Confirmed.** Decision put to Gearoid.                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 9   | Booking element not seen on service pages                   | **Confirmed as a note.** The embed loads by script, which a text fetch cannot show; it is the same embed the old pages carried. Checked in a browser at the local review.                                                                                                                                                                                                                                                                                                                           |
| 10  | AWS ruling unsourced                                        | **Rejected.** `docs/career-history.md:3392` (resumes repository): "C++ is correct in terms of skills but AWS should be removed".                                                                                                                                                                                                                                                                                                                                                                    |
| 11  | Band label                                                  | **Confirmed.** 29.5 falls in the rubric's gap; read as "actively repelling" (below 30).                                                                                                                                                                                                                                                                                                                                                                                                             |
| 12  | Five top issues                                             | **Confirmed.** Issue 5 (A3) is a note, not a conversion issue.                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 13  | Principal proof shows cadence, not architecture             | **Confirmed.** The content author chooses an architecture proof not already used by Services, or none.                                                                                                                                                                                                                                                                                                                                                                                              |
| 14  | "Card 2" ambiguous                                          | **Confirmed.** Read Section 3's "card 2" as the old Extreme Programming card.                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 15  | Bundled metric                                              | **Confirmed.** The 90-day click count is directional, bundled and not attributable.                                                                                                                                                                                                                                                                                                                                                                                                                 |

Signed: Koru, 21 Oct 2026.

## Validation (rewrite)

| Field  | Value                                                                                                                                                                                                                                                                                                                       |
| ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Skill  | `acumen-anvil-audit-section` (Anvil), validation pass on the rewritten section, with `cta-optimize` and `social-proof-architecture` applied at section scope                                                                                                                                                                |
| Date   | 21 Oct 2026                                                                                                                                                                                                                                                                                                                 |
| Target | Not live. Names, icons, links: `data/sections/skills.yaml:22-40`. Card text: `site_skills` block, `presence/ssot/site-blocks.md:283-303` (resumes repository). Rendered: `/tmp/claude-501/site-skills/index.html:1650-1782`. Partials: `layouts/partials/sections/skills.html:12-26`, `layouts/partials/cards/skill.html:7` |
| Status | **UNREVIEWED: no paired gate ran.** This Anvil session has no agent-dispatch tool, so `anvil-reviewer` did not run. `presence.json` was not read separately: the built HTML is the render of its `site_skills` values and was read instead.                                                                                 |
| Result | **69.0 / 100. Fails the 75/100 gate by 6.0 points.** Nine of ten requirements are met and R4 misses by one word on one card. The shortfall is in proof and Prompt visibility, which the requirements allowed to stay thin.                                                                                                  |

### Context (Section 1 holds)

Rendered order is unchanged: About, Services, Experience, Posts, Skills, Honours, Education
(`index.html:485,656,957,1368,1650,1868,2033`). **AIDA stage:** Desire, late. **Awareness:**
product-aware, or solution-aware for a recruiter who arrives from the navbar. **Target objection
(named before scoring):** "Can he do the specific thing I am hiring for, with the tools we use?",
and with it "Is this the same person Services described?" (Cialdini: consistency). Gearoid's
rulings are applied as given: C and C++ as "have written", TypeScript listed plainly, software
craftsmanship inside the coaching card (`site-blocks.md:29-32`).

### Rendered cards

| #   | Title                                        | Link                                         | Text (verbatim, `index.html`)                                                                                                                                                                                                                                                                                             | Words |
| --- | -------------------------------------------- | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----- |
| 1   | Agentic engineering and AI developer tooling | `/services/agentic-engineering/`             | "Build Claude Code agents, skills and review tooling, such as gSmith and Vita, and contribute to nWave, an AI-agent delivery methodology from the BriX partnership." (`:1677`)                                                                                                                                            | 25    |
| 2   | Principal software engineering               | `/services/principal-software-engineering/`  | "Architect Node.js microservices, lead development of an API layer connecting Salesforce and SugarCRM, and use SQL in data migration." (`:1701`)                                                                                                                                                                          | 19    |
| 3   | Technical coaching and training              | `/services/technical-coaching-and-training/` | "Teach and coach software craftsmanship and Extreme Programming: test-driven development, acceptance-test-driven development, behaviour-driven development, pair programming, refactoring and clean code. Delivered BriX Consulting's Software Craftsmanship Dojo to one team of 15 at Nederlandse Spoorwegen." (`:1725`) | 34    |
| 4   | DevOps                                       | `/services/devops/`                          | "Build continuous deployment on Jenkins and Docker, orchestrate deployment through IBM UrbanCode Deploy, and write infrastructure as code in Terraform." (`:1749`)                                                                                                                                                        | 20    |
| 5   | Languages                                    | none                                         | "Write Bash, CSS, HTML, Java, JavaScript, Python and TypeScript, use SQL, and have written C and C++. To September 2026, taught and coached Extreme Programming on a Fortune 100 engagement in COBOL, .NET, Java, Python and JavaScript: the practice, not the languages themselves." (`:1773`)                           | 43    |

All four link targets exist in the build (`/tmp/claude-501/site-skills/services/{agentic-engineering,principal-software-engineering,technical-coaching-and-training,devops}/index.html`).

### Score

| Dimension          | Weight | Old      | New  | Weighted | Rationale                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------------------ | ------ | -------- | ---- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Value Prop Clarity | 20%    | 3        | 8/10 | 16.0     | Cards 1 to 4 have the exact Services titles, in Services order (`index.html:674,693,712,731` against `:1673,1697,1721,1745`). A visitor can say in 5 seconds "these are the tools behind each offer" (StoryBrand: the guide's competence points at the hero's problem). The score is held below 9 because cards 2 and 4 are tool lists with no outcome. The Services/Skills split in Issue 4 accepts that.                                                   |
| CTA Strength       | 15%    | 1        | 6/10 | 9.0      | Each offer card now leads to its own service page, in the same tab (`cards/skill.html:7`). This is a low-commitment Prompt that suits product-aware Motivation, and it points at the goal (Fogg B=MAP). The Prompt is weak because it cannot be seen: the whole card is the link, with no text or arrow cue, and the `title` attribute shows only on desktop hover. Card 5 looks the same as cards 1 to 4 but does nothing when clicked (`index.html:1760`). |
| Social Proof       | 15%    | 2        | 5/10 | 7.5      | One proof clause in five cards: `ns.cohort` on card 3. Named systems and clients (Salesforce, SugarCRM, IBM UrbanCode Deploy, Nederlandse Spoorwegen) give some authority (Cialdini). Cards 1, 2 and 4 make claims with no evidence beside them (`social-proof-architecture` proximity rule). The XP Coach credential is still four sections away, in About (`index.html:544`).                                                                              |
| Objection Handling | 15%    | 3        | 7/10 | 10.5     | The stack objection now gets a direct answer: tools are named for each offer, there are no hedges, and the Languages framing stops any over-claim. Two claims on card 2 cannot be traced to anything this pass read (Fix 3). One claim that fails an interview check discounts the claims around it (`objection-map`: every claim can raise a counter-objection).                                                                                            |
| Emotional Tone     | 10%    | 4        | 8/10 | 8.0      | The cards speak with calm confidence in the subjectless imperative that Services uses, with no "Fond of" or "Varying". Late Desire calls for confidence, and the section has it. The past-tense proof clause on card 3 follows the Services pattern ("Personally taught", `index.html:716`).                                                                                                                                                                 |
| Information Scent  | 10%    | 3        | 8/10 | 8.0      | Same names and same sequence as Services, links to the same pages, and agentic first (Information Scent Theory: parallel structure). Two small leaks: the Docker whale icon on the DevOps card (`skills.yaml:36`) narrows a four-tool card to one vendor, and the word "cloud" no longer appears anywhere in the section, so a recruiter's keyword scan finds nothing.                                                                                       |
| Friction Level     | 10%    | 6        | 7/10 | 7.0      | Five short cards in a 3 + 2 grid. Card 3 carries six practices in 34 words, which is dense but inside R4. The five-language list now appears for the third time on the page (Services `:716`, Experience `:1014`, Skills `:1773`). Spec card 5 makes the framing mandatory, so this is accepted and not counted as a defect.                                                                                                                                 |
| Specificity        | 5%     | 3        | 6/10 | 3.0      | Named tools, systems and clients, one number ("one team of 15") and one date ("To September 2026"). Cards 1, 2 and 4 carry no number, client outcome or timeline.                                                                                                                                                                                                                                                                                            |
| **Total**          |        | **29.5** |      | **69.0** | 16.0 + 9.0 + 7.5 + 10.5 + 8.0 + 8.0 + 7.0 + 3.0 = 69.0. That is a gain of 39.5 points, in the "50-69: underperforming" band and **below the 75 gate**.                                                                                                                                                                                                                                                                                                       |

### Requirements, as adjudicated

The Review overrides Section 5 where they differ (#5: titles are the exact Services names; #13:
an architecture proof, or none, on card 2; #4: the Vita proof, if used, is the verbatim cleared
value).

| R   | Requirement                                                                                  | Verdict              | Evidence                                                                                                                                                                                                                                                                                                                         |
| --- | -------------------------------------------------------------------------------------------- | -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| R1  | Five cards: four offers plus Languages                                                       | **Met**              | `skills.yaml:23-40`; `index.html:1661-1777`                                                                                                                                                                                                                                                                                      |
| R2  | Order: Agentic, Principal, Coaching, DevOps, Languages                                       | **Met**              | Same sequence as Services (`index.html:674-731`)                                                                                                                                                                                                                                                                                 |
| R3  | Titles are the exact Services names (Review #5)                                              | **Met**              | `index.html:1673,1697,1721,1745` match `:674,693,712,731` character for character                                                                                                                                                                                                                                                |
| R4  | Offer cards 20 to 35 words, at most two sentences; Languages up to 55                        | **Not met (card 2)** | Card 2 is 19 words (`index.html:1701`). Cards 1, 3 and 4 are 25, 34 and 20; card 5 is 43. All cards have at most two sentences.                                                                                                                                                                                                  |
| R5  | Sentence one front-loads tools and practices; no degree adjectives or preferences            | **Met**              | "Build Claude Code agents", "Architect Node.js microservices", "Teach and coach software craftsmanship", "Build continuous deployment on Jenkins", "Write Bash, CSS, HTML". No "deep", "expert", "fond of" or "prefers" in any card.                                                                                             |
| R6  | A proof clause, if present, uses a portfolio-cleared fact and respects its note              | **Met**              | The only proof clause is `ns.cohort`, "one team of 15", `publish: cv, portfolio, linkedin, website-cv` (`presence/ssot/facts.yaml:310-314`, resumes repository). The note is respected: the clause says the cohort went through the Dojo and gives no completion figure (`ns.completion` is cleared for no surface, `:320-323`). |
| R7  | No fact already used in Services                                                             | **Met**              | Skills cites `ns.cohort` only. Services uses `gsmith.other_authors`, `gsmith.cycle_time`, `mysa.end_users`, `insurer.taught_personally`, `insurer.reach` and `deploy.*` (`site-blocks.md:265-281`). See Fix 4 for the `gsmith.other_authors` note.                                                                               |
| R8  | Subjectless imperative; British spelling; no em dashes                                       | **Met**              | Imperative throughout, with past-tense proof as Services uses it. "behaviour-driven" (`:1725`). No U+2014 in any of the five summaries.                                                                                                                                                                                          |
| R9  | Cards 1 to 4 link to the four service pages, same tab; card 5 no link; no external URLs      | **Met**              | `skills.yaml:25,29,33,37`. The trailing slash is Hugo's canonical form, and the pages exist in the build. `target="_blank"` is added only for `http(s)` URLs (`cards/skill.html:7`), so the internal links open in the same tab. Card 5 renders an `<a>` with no `href` (`index.html:1760`).                                     |
| R10 | Reuse icons from `assets/images/sections/skills/`; no new vendor logo without checking terms | **Met**              | `technology.svg`, `oop.svg`, `xp.svg`, `docker.svg`, `tools.svg` (`skills.yaml:24-40`). All resolve in the render (`index.html:1672-1768`). No new vendor logo was added; `docker.svg` was already in use. See Fix 5 for its effect on scent.                                                                                    |

**Spec card checks.** Card 1's [RECORD CHECK] on nWave is resolved: the record publishes the
contribution to portfolio through the BriX experience entry (`index.html:1087`), and the wording
matches it. Card 3 picked six of the eight practices, inside "four to six". Card 4 dropped Git and
"multi-stage, multi-arch", as allowed. Card 5 has "Varying" removed and keeps the framing sentence.

### Remaining fixes, by impact

**Fix 1. Three of four offer cards carry no proof** (Cialdini: authority and social proof;
`social-proof-architecture` proximity rule: proof in the same viewport as the claim). _Owner:
content author (Vita), from the record._

- Card 1: add one proof sentence from `vita.evaluation` (`facts.yaml:406-410`, portfolio
  cleared). The full cleared value is about 40 words, so verbatim use (Review #4) breaks R4's
  35-word ceiling. Two ways out, and Gearoid decides: (a) use only the method part, for example
  "Evaluated changes to Vita with pre-registered, blind-graded A/B experiments." (9 words, card
  total 34), which keeps the note (no run counts, never "better", never fine-tuning) but is not
  verbatim; or (b) raise R4 for card 1 alone. Recommendation: (a), because the method is the
  differentiator a CTO tests, and none of the note's prohibitions apply to it.
- Card 2: add an architecture-scale proof that Services has not used, such as `mysa.business_partners`
  ("10k" partner organisations, `facts.yaml:259-263`, portfolio cleared; already rendered in
  Experience at `index.html:1180`), or `mysa.incentive_lead_time` (`:284-288`). This also brings
  card 2 to 20 words or more (R4).
- Card 4: optional. `salesconnect.env_setup` ("from days to an hour", `:355-359`) only if the
  sentence states reproducibility, as its note requires. The spec's [RECORD CHECK] on tying it to
  this card's tools still applies.
- _Expected impact:_ Social Proof 5 to 7 and Specificity 6 to 7, which adds 3.5 points. A claim
  with its evidence beside it does not send the evaluator elsewhere for proof.

**Fix 2. The Prompt cannot be seen, and card 5 looks clickable but is not** (Fogg B=MAP: a Prompt
has to be noticed before it can fire; Walter: Usable; Information Scent). _Owner: Giotto (spec),
then the crafter._

- Give cards 1 to 4 a visible cue on every device, for example a short last line "How this
  engagement works" with a chevron. Card 5 does not get this cue, so its different behaviour shows.
  Do not rely on hover, because touch devices have none (`mobile-conversion-audit`, Section 7 of
  this spec).
- _Expected impact:_ CTA Strength 6 to 8, which adds 3.0 points. Measure it with the 90-day click
  count from Section 6 (directional only, Review #15).

**Fix 3. Two claims on card 2 could not be traced** (Cialdini: authority needs verifiable
specificity; `objection-map`: if you cannot prove it on the page, soften the claim). _Owner:
content author, [RECORD CHECK]._

- "use SQL in data migration": I do not see this in what I read. The nearest facts are
  cv-only, and they put the migration on Excel and Jupyter Notebooks (`data.migration_tooling`,
  `facts.yaml:82-86`) and SQL across the platforms in general (`data.sql_platforms`, `:87-91`).
  If `experience.md` or `career-history.md` does not tie SQL to the migration, remove "and use SQL
  in data migration". SQL is already on card 5, and removing the clause makes room for Fix 1.
- "Architect Node.js microservices": the portfolio surfaces I read say "a single-page application
  on Node.js" (`index.html:1263`). "Microservices" appears only in `linkedin_skills`
  (`site-blocks.md:157`), which has no `publish:` line. Confirm it against the record. Vita-reviewer's
  four rounds may already have done this; this pass did not read `experience.md`.
- _Expected impact:_ Objection Handling 7 to 8, which adds 1.5 points. Every claim then holds up if
  an interviewer checks it.

**Fix 4. gSmith appears without "now used by other authors"** (record rule, not a conversion
framework). The `gsmith.other_authors` note says "Say it whenever the tool is mentioned"
(`facts.yaml:226`), and R7 forbids repeating it here. Recommendation: remove "gSmith and" from
card 1, so it reads "such as Vita". Services already names gSmith with that fact two sections
higher (`index.html:678`), so the section loses nothing, and the Vita proof in Fix 1 becomes
coherent. This is Gearoid's call, because the conflict is between his record rule and this spec.

**Fix 5. Small scent and accessibility points** (Information Scent; Walter: Usable). _Owner:
Giotto or the crafter, low priority._

- The Docker whale on the DevOps card names one vendor for a card that names four tools. A neutral
  pipeline icon carries the category.
- Each icon's `alt` repeats the card title (`cards/skill.html:17`), so a screen reader reads the
  title twice. `alt=""` is correct for a decorative icon. This is a change to the vendored partial.
- Optional: "cloud" is no longer in the section. If the record clears IBM Cloud or Cloud Foundry
  for portfolio through an experience entry (Review #1), one of them on card 2 would restore the
  keyword (Jobs-to-be-Done: the recruiter's job is to match the role spec). Watch R4's 35-word
  ceiling.

**Not a fix.** The five-language list appears three times on the page. Spec card 5 makes the
framing mandatory, and Gearoid's rulings fixed its content.

### Projection

If Fixes 1 to 3 land as described: Social Proof 7 (10.5), CTA Strength 8 (12.0), Objection
Handling 8 (12.0), Specificity 7 (3.5), and the other four dimensions unchanged (16.0 + 8.0 + 8.0

- 7.0). The total is **77.0**, which clears the gate. This is a projection, not a score. The
  section needs a fresh `audit-section` pass once the fixes are built.

Signed: Anvil, 21 Oct 2026. UNREVIEWED: no paired gate ran.

## Validation (round 2)

| Field  | Value                                                                                                                                                                                                                                                                               |
| ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Skill  | `acumen-anvil-audit-section` (Anvil), second validation pass after the round 1 fixes, with `cta-optimize` and `social-proof-architecture` applied at section scope                                                                                                                  |
| Date   | 21 Oct 2026                                                                                                                                                                                                                                                                         |
| Target | Not live. Rendered: `/tmp/claude-501/site-skills/index.html:1650-1800`. Card text: `site_skills` block, `presence/ssot/site-blocks.md:285-307` (resumes repository). Partial: `layouts/partials/cards/skill.html:7,28-33`                                                           |
| Status | **UNREVIEWED: no paired gate ran.** This Anvil session has no agent-dispatch tool, so `anvil-reviewer` did not run. The service pages behind the four links were not opened in this pass, so whether each one describes "how this engagement works" is unverified here (see Fix 3). |
| Result | **77.0 / 100. Passes the 75/100 gate by 2.0 points.** R1 to R10 are all met. The margin is thin: a one-point drop in any 15% dimension leaves 75.5, and a two-point drop in one fails the gate.                                                                                     |

### Context (Section 1 holds)

Rendered order is unchanged, with Skills fifth, after Experience and Posts. **AIDA stage:** Desire,
late. **Awareness (Schwartz):** product-aware, or solution-aware for a recruiter who arrives from
the navbar. **Target objection (named before scoring):** "Can he do the specific thing I am hiring
for, with the tools we use?", with "Is this the same person Services described?" riding with it
(Cialdini: consistency).

### What changed, verified against the build

| Card   | Change                                                                                                                                                                                              | Evidence                                                                                                                                                                                                                                                                                                                                     |
| ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1      | gSmith removed (round 1 Fix 4); adoption proof added: "such as Vita, which the owner and every contractor in the BriX partnership use"; nWave now "the partnership's AI-agent delivery methodology" | `index.html:1677`. Adoption traces to `experience.md:876` (results of `untangled_code_ltd_founder_technical_coach`, publish includes portfolio at `:858`; cleared "without the count" on 14 Oct 2026, `:891`). nWave wording matches the BriX entry as rendered (`index.html:1087`) and Gearoid's "contribute" ruling (`experience.md:894`). |
| 2      | Scale proof added: "for a partner platform serving 10k partner organisations"                                                                                                                       | `index.html:1705`. `mysa.business_partners`, value "10k", publish `cv, portfolio, linkedin, website-cv` (`facts.yaml:259-263`, resumes repository). Not used by Services (`site-blocks.md:264-283`).                                                                                                                                         |
| 1 to 4 | Visible cue "How this engagement works ›"                                                                                                                                                           | Rendered at `index.html:1680,1708,1736,1764`. The partial adds it only for an internal URL (`cards/skill.html:31-33`), so it shows on touch devices and does not depend on hover. Card 5 has no cue (`index.html:1788-1792`).                                                                                                                |
| 4      | Unchanged                                                                                                                                                                                           | `index.html:1761`. `salesconnect.env_setup` not used.                                                                                                                                                                                                                                                                                        |

### Adjudication of round 1 Fix 3 (rejected by the caller)

**Rejection confirmed. Round 1 Fix 3 was a false positive.** Round 1 said it had not read
`experience.md` (Fix 3, last bullet), and both claims are in it:

- "Architect Node.js microservices": `experience.md:682`, "Architected Node.js microservices for
  partner relationship management (PRM) on Salesforce".
- "use SQL in data migration": `experience.md:685`, "used SQL and Excel on the data migration".
- Both sit in `ibm_implementation_architect_software_engineering_lead`, `publish: cv, linkedin,
portfolio, website-cv` (`experience.md:677`). Under Review #1 (clearance is per entry and per
  fact), that clears them for this surface.

Effect on the score: round 1 held Objection Handling at 7 for these two claims. With both traced,
it rises to 8 on the evidence, not on a change to the page. The round 1 projection counted the same
point for a different reason (the claims softened or confirmed), so the arithmetic is unchanged.

### Rendered cards

| #   | Title                                        | Text (verbatim, `index.html`)                                                                                                                                                                                              | Words | Sentences |
| --- | -------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----- | --------- |
| 1   | Agentic engineering and AI developer tooling | "Build Claude Code agents, skills and review tooling, such as Vita, which the owner and every contractor in the BriX partnership use, and contribute to nWave, the partnership's AI-agent delivery methodology." (`:1677`) | 31    | 1         |
| 2   | Principal software engineering               | "Architect Node.js microservices for a partner platform serving 10k partner organisations, lead development of an API layer connecting Salesforce and SugarCRM, and use SQL in data migration." (`:1705`)                  | 27    | 1         |
| 3   | Technical coaching and training              | Unchanged from round 1 (`:1733`)                                                                                                                                                                                           | 34    | 2         |
| 4   | DevOps                                       | Unchanged from round 1 (`:1761`)                                                                                                                                                                                           | 20    | 1         |
| 5   | Languages                                    | Unchanged from round 1 (`:1789`)                                                                                                                                                                                           | 43    | 2         |

Word counts are of the summary paragraph only. The cue line is a Prompt, not summary text, so R4
does not count it.

### Score

| Dimension          | Weight | R1       | R2   | Weighted | Rationale                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ------------------ | ------ | -------- | ---- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Value Prop Clarity | 20%    | 8        | 8/10 | 16.0     | Titles and order still mirror Services exactly (`index.html:1673,1701,1729,1757` against `:674,693,712,731`). Cards 1 and 2 now pair the tools with a reason to believe them. Held below 9: card 4 is still a tool list, and card 1 does not say what Vita is, so a navbar arrival who skipped Experience (`index.html:1063`) reads adoption of an unnamed tool (StoryBrand: the guide's competence must be legible to the hero).                             |
| CTA Strength       | 15%    | 6        | 8/10 | 12.0     | The Prompt is now visible on every device, its copy tells the visitor what the next page holds, and card 5's lack of it signals that card 5 is not a link (Fogg B=MAP: a Prompt must be noticed, and its commitment must match product-aware Motivation; `cta-optimize` hierarchy: specific and scent-bearing, well above "Learn More"). Held below 9: the cue is bold text, not a button-like affordance, and it is the same four words on all four cards.   |
| Social Proof       | 15%    | 5        | 7/10 | 10.5     | Three of five cards now carry proof beside the claim (`social-proof-architecture` proximity rule): consensus on card 1 (adoption across the BriX partnership), scale on card 2 (10k partner organisations), a named client and cohort on card 3. Held at 7: card 1's consensus is unquantified, card 2's figure is scale rather than outcome, card 4 has none, and the XP Coach credential is still in About (Cialdini: authority within reach of the claim). |
| Objection Handling | 15%    | 7        | 8/10 | 12.0     | Every claim on cards 1 and 2 now traces to the record (adjudication above), so the stack objection meets claims that survive an interview check (`objection-map`: a claim that cannot be proved raises a counter-objection). Held at 8: "every contractor" invites "how many?", and the honest answer is a count the record keeps off every surface (`facts.yaml:393-396`), so the claim cannot be tightened on the page.                                     |
| Emotional Tone     | 10%    | 8        | 8/10 | 8.0      | Calm, subjectless imperative throughout, matching Services. Late Desire calls for confidence, and the section carries it. Card 1 is now one 31-word sentence with a nested relative clause, which reads a little heavier than its neighbours, but not hedged.                                                                                                                                                                                                 |
| Information Scent  | 10%    | 8        | 8/10 | 8.0      | The cue adds forward scent towards the service pages, and card 2's "partner platform" echoes Services' "partner platform serving 200k users" (`index.html:697`), so the two sections visibly describe the same system (Information Scent Theory: parallel structure; Cialdini: consistency). Held at 8: round 1 Fix 5 is not applied (Docker whale on a four-tool card; "cloud" absent from the section).                                                     |
| Friction Level     | 10%    | 7        | 7/10 | 7.0      | Five cards, 3 + 2. Each offer card grew by one line (the cue) and cards 1 and 2 by about a line of text, so the section is taller on mobile, still inside R4. "partner platform serving 10k partner organisations" repeats "partner" in five words, a small reading bump.                                                                                                                                                                                     |
| Specificity        | 5%     | 6        | 7/10 | 3.5      | Added a number (10k) and named artefacts (Vita, nWave, BriX) to the existing named tools, client, cohort and date. Card 4 still has no number, client or timeline.                                                                                                                                                                                                                                                                                            |
| **Total**          |        | **69.0** |      | **77.0** | 16.0 + 12.0 + 10.5 + 12.0 + 8.0 + 8.0 + 7.0 + 3.5 = 77.0. A gain of 8.0 points, into the "70-89: solid" band, and **above the 75 gate by 2.0**.                                                                                                                                                                                                                                                                                                               |

The total equals the round 1 projection. That is because each projected dimension moved by the
projected amount (Social Proof +2, CTA Strength +2, Objection Handling +1, Specificity +1); the
Objection Handling point arrived through the Fix 3 rejection rather than a copy change. Each score
above was set from the rendered page, not carried from the projection.

### Requirements

| R   | Requirement                                                                             | Verdict                                | Evidence                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --- | --------------------------------------------------------------------------------------- | -------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| R1  | Five cards: four offers plus Languages                                                  | **Met**                                | `index.html:1661-1795`                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| R2  | Order: Agentic, Principal, Coaching, DevOps, Languages                                  | **Met**                                | `index.html:1673,1701,1729,1757,1785`; same sequence as Services                                                                                                                                                                                                                                                                                                                                                                                          |
| R3  | Titles are the exact Services names (Review #5)                                         | **Met**                                | `index.html:1673,1701,1729,1757` match `:674,693,712,731`                                                                                                                                                                                                                                                                                                                                                                                                 |
| R4  | Offer cards 20 to 35 words, at most two sentences; Languages up to 55                   | **Met** (was not met)                  | 31, 27, 34, 20 and 43 words; 1, 1, 2, 1 and 2 sentences. Card 2 rose from 19 to 27.                                                                                                                                                                                                                                                                                                                                                                       |
| R5  | Sentence one front-loads tools and practices; no degree adjectives or preferences       | **Met**                                | Openings unchanged: "Build Claude Code agents", "Architect Node.js microservices". No "deep", "expert", "fond of" or "prefers".                                                                                                                                                                                                                                                                                                                           |
| R6  | A proof clause uses a portfolio-cleared fact and respects its note                      | **Met, with a record check on card 1** | Card 2: `mysa.business_partners` (`facts.yaml:259-263`), note respected (no contemporaneous claim is made). Card 3: `ns.cohort` (`facts.yaml:310-314`). Card 1: the adoption line is not a `facts.yaml` fact; it is an experience result (`experience.md:876`) on a portfolio-cleared entry (`:858`), which Review #1's per-entry reading accepts. See Fix 1 for the record check. No run count, test count or beta count appears (`facts.yaml:393-410`). |
| R7  | No fact already used in Services                                                        | **Met**                                | Services uses `gsmith.*`, `mysa.end_users`, `insurer.*`, `deploy.*` (`site-blocks.md:264-283`). Skills uses `mysa.business_partners` and `ns.cohort`. gSmith is gone from card 1, which also clears round 1 Fix 4. "10k" does appear once higher on the page, in Experience (`index.html:1180`); R7 does not cover Experience.                                                                                                                            |
| R8  | Subjectless imperative; British spelling; no em dashes                                  | **Met**                                | Imperative throughout; "organisations" (`:1705`), "behaviour-driven" (`:1733`). No U+2014 in any summary or in the cue.                                                                                                                                                                                                                                                                                                                                   |
| R9  | Cards 1 to 4 link to the four service pages, same tab; card 5 no link; no external URLs | **Met**                                | `index.html:1664,1692,1720,1748`; card 5 has no `href` (`:1776`); no `target` on internal links (`cards/skill.html:7`).                                                                                                                                                                                                                                                                                                                                   |
| R10 | Reuse icons; no new vendor logo without checking terms                                  | **Met**                                | Unchanged: `technology.svg`, `oop.svg`, `xp.svg`, `docker.svg`, `tools.svg` (`index.html:1672,1700,1728,1756,1784`).                                                                                                                                                                                                                                                                                                                                      |

### Round 1 fixes, status

| Fix                                | Status                                                                                                                                                                                             |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1. Proof on cards 1, 2 and 4       | **Done for cards 1 and 2.** Card 1 used adoption instead of `vita.evaluation` (the caller's call, because the verbatim value breaks R4); card 4 left without proof, which the fix marked optional. |
| 2. Visible Prompt; card 5 distinct | **Done.**                                                                                                                                                                                          |
| 3. Untraced claims on card 2       | **Rejected with evidence, and the rejection is confirmed** (adjudication above).                                                                                                                   |
| 4. Remove gSmith from card 1       | **Done.**                                                                                                                                                                                          |
| 5. Scent and accessibility points  | **Not done.** Carried forward as Fix 2 below.                                                                                                                                                      |

### Remaining fixes, by impact

The gate is passed, so none of these blocks shipping. They widen a 2.0-point margin.

**Fix 1. Card 1 proves adoption of a tool it does not name the job of** (Cialdini: social proof
is strongest when the reader can see what was adopted; Information Scent; `objection-map`: every
claim can raise a counter-objection). _Owner: content author (Vita), from the record._

- Replace "Vita, which the owner and every contractor in the BriX partnership use," with "Vita, an
  AI job-application assistant used by the owner and every contractor in the BriX partnership,".
  "AI job-application assistant" is the record's own phrase (`experience.md:865`). Card 1 becomes
  35 words, exactly at the R4 ceiling, and stays one sentence.
- Do not add a user count: it is kept off every surface (`facts.yaml:393-396`). Do not reintroduce
  gSmith beside it: the record warns that "used by" must not blur the two tools' different
  maturity (`experience.md:925-927`).
- **[RECORD CHECK]** The adoption line lives in the entry's `### results`, while the record's header
  says the publish step emits `portfolio_prose` alone (`experience.md:66-69`), and the clearance note
  says "cleared 14 Oct 2026 without the count" without naming surfaces (`:891`). The claim is true;
  the open point is whether it is cleared for this surface. Vita or Gearoid confirms. If it is not
  cleared, the fallback is round 1 Fix 1 option (a), the method part of `vita.evaluation`.
- _Expected impact:_ Value Prop Clarity 8 to 9 (+2.0). A navbar arrival who skipped Experience
  learns what the proof is about without leaving the card.

**Fix 2. Round 1 Fix 5, carried forward** (Information Scent; Walter: Usable; Jobs-to-be-Done).
_Owner: Giotto or the crafter, low priority._

- Replace the Docker whale on the DevOps card with a neutral pipeline icon, so a four-tool card is
  not branded as one vendor.
- Set `alt=""` on the decorative card icon (`cards/skill.html:17`), so a screen reader does not read
  each title twice.
- Optional: restore the "cloud" keyword for a recruiter's role-spec scan, through IBM Cloud or
  Cloud Foundry on card 2, only if an experience entry cleared for portfolio names it (Review #1).
  Card 2 has 8 words of headroom under R4.
- _Expected impact:_ Information Scent 8 to 9 (+1.0).

**Fix 3. Confirm the cue's promise at its destination** (Information Scent Theory: a Prompt's
words are a promise, and scent breaks if the next page does not keep it; Fogg: a Prompt that
disappoints lowers Motivation for the next one). _Owner: Gearoid, at the local review._

- Open each of the four `/services/*` pages and check that each describes how the engagement runs
  (shape, length, what the client gets). This pass did not open them. If one does not, change that
  card's cue to match what the page does hold, rather than the page to match the cue.
- _Expected impact:_ protects CTA Strength at 8. No score change if the pages keep the promise.

**Optional, not scored.** A proof clause on card 4 would raise Social Proof towards 8 (+1.5).
`salesconnect.env_setup` (`facts.yaml:355-359`) is the only candidate seen, and the round 1
[RECORD CHECK] still applies: its note requires the sentence to state reproducibility, and the
record must tie it to tooling named on this card.

**Not a fix.** The cue repeats the same four words on four cards. `cta-optimize` flags copy repeated
three or more times, but that rule targets CTAs competing down a page. Here the four cues sit in one
grid, one per card, and a uniform cue in a card grid is an affordance: it teaches "these cards go
somewhere". Varying the copy per card is a refinement to test only if traffic ever allows it
(Section 6), not a defect.

### Projection

If Fixes 1 and 2 land: Value Prop Clarity 9 (18.0) and Information Scent 9 (9.0), the other six
unchanged, for **80.0**. This is a projection, not a score.

Signed: Anvil, 21 Oct 2026. UNREVIEWED: no paired gate ran.

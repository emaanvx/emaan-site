# emaan-site

Personal brand site for Emaan Khan. Static HTML/CSS, no build step, no framework.

Built to the seven-box structure from MKTG 4560 Module 3 (Header, Navigation, Hero,
Content, Proof, Action, Footer) in the Creator archetype voice: show the build, not
just the result. One action on the page — book a 15 minute call.

## Run

    python3 -m http.server 8731     # then open http://localhost:8731

## Layout

    index.html        home — all seven boxes
    styles.css        design system (near-black canvas, Instrument Serif + Public Sans + JetBrains Mono)
    post.css          long-form reading layout
    policies.html     social media policy + AI disclosure (required by the seven-box footer)
    writing/          posts; copy _template.html for a new one
    media/            showreel.mp4, poster.jpg, on-set.jpg

## Before it goes live — TODO

- [ ] Real Calendly URL (two places in index.html, one per post page)
- [ ] media/showreel.mp4 + media/poster.jpg
- [ ] media/on-set.jpg (on set, not a headshot)
- [ ] Real before/after numbers in the three case studies — placeholders are bracketed
- [ ] Write the three posts (currently template stubs)
- [ ] Domain + hosting

## Course context

Assignment 2 (15%) is written in class Wed Oct 7, details released 8:30am that day.
Assignment 3 (30%) is managing and promoting this site, details released Oct 21,
due Nov 17. The blog needs to be postable-to by then.

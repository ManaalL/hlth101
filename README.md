# HLTH 101 Interactive

An interactive review site for HLTH 101 (Introduction to Health 1) at the University of Waterloo, Fall 2026.

Manaal Lakhani, Honours Sciences @ UWaterloo. Built with help from Claude.

Live site: https://manaall.github.io/hlth101/

## What is in it
- One unit per lecture week (Weeks 1 to 5 so far), each with chapters, a free-explore figure, endless practice, a mini exam and a glossary.
- Term trainer with spaced repetition (Leitner boxes saved in the browser).
- Midterm prep: tonight's plan, practice midterm, written review, study plan, mistake log and a countdown.
- Pulse, a study guide in the corner that answers from the course material offline.

Questions on this site are original practice questions written from the lecture slides. They are not the course's quiz or exam questions.

## Adding a week
1. Add `data/W6.js` following `SCHEMA.md`.
2. Run `node build.js`.
3. Commit and push. GitHub Pages redeploys on its own.

Progress is saved in the browser by stable item IDs, so updates do not wipe it.

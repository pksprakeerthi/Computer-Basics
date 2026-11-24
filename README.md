# Computer Basics — Checkpoint 01

**An interactive, gamified learning experience that teaches computer fundamentals through cybersecurity-focused lessons, knowledge checks, and practical simulations.**

## Overview

Computer Basics — Checkpoint 01 is a browser-based learning application designed to build a strong foundation in computer systems and cybersecurity.

It takes learners through eight structured modules, interactive knowledge checks, practical cyber labs, and a final checkpoint examination. The experience combines educational content with progress tracking and gamification to make technical learning more engaging.

## Features

- **Interactive learning modules** — Eight structured modules covering foundational computer concepts.
- **Knowledge checks** — Module-level assessments with randomized questions and completion criteria.
- **Practical cyber labs** — Safe, browser-based simulations that introduce cybersecurity investigation concepts without executing real malware.
- **Final checkpoint exam** — A randomized 30-question assessment with a timed examination experience.
- **Progress dashboard** — Track completed modules, practical labs, experience points, levels, and achievements.
- **Certificate of completion** — Unlock a certificate after passing the final examination.
- **Persistent progress** — Learning progress is stored locally in the browser using `localStorage`.
- **Responsive interface** — Designed to work across desktop and smaller screens.

## Learning Experience

| Component | Description |
|---|---|
| Learning modules | 8 structured modules |
| Module assessments | Knowledge checks with a 75% completion threshold |
| Practical cyber labs | Interactive security simulations |
| Final examination | 30 randomized questions |
| Passing score | 80% (24 out of 30) |
| Certificate | Unlocked after passing the final exam |

## Technology Stack

- HTML5
- CSS3
- JavaScript
- Browser Local Storage

No frameworks, package installation, backend, or build process are required.

## Getting Started

### Run locally

1. Clone the repository:

   ```bash
   git clone https://github.com/pksprakeerthi/Computer-Basics.git
   ```

2. Open the project directory:

   ```bash
   cd Computer-Basics
   ```

3. Open `index.html` in your browser.

That's it. The application runs directly in the browser.

## Project Structure

```text
Computer-Basics/
│
├── index.html      # Application structure
├── styles.css      # Styling and responsive layout
├── app.js          # Learning content, assessments,
│                   # simulations, and application logic
├── README.md       # Project documentation
└── .gitignore      # Excluded files
```

## Progress and Data Storage

The application uses browser `localStorage` to save learning progress.

- Progress is stored on the current browser and device.
- Clearing browser storage can erase saved progress.
- Progress does not automatically synchronize across devices or browsers.

## Safety

The practical cyber labs are educational simulations. They are designed to demonstrate security concepts without running actual malware or performing real-world attacks.

## Future Development

Potential improvements include:

- Additional learning checkpoints.
- Expanded practical cybersecurity simulations.
- More assessment categories and question sets.
- Improved progress analytics.
- Optional cross-device progress synchronization.

## Repository

**GitHub:** https://github.com/pksprakeerthi/Computer-Basics

---

*Computer Basics — Checkpoint 01 | An interactive foundation for understanding computers and cybersecurity.*

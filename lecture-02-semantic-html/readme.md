# Lecture 02 – Semantic HTML & Structure

## 1. What I Implemented This Lecture
* **Semantic Header:** Created a structured header using `<h1>` for my name and a detailed personal bio as an IT Network Engineer.
* **Portfolio Section:** Implemented a dedicated works section utilizing `<section>`, `<figure>`, and `<figcaption>` to properly associate project descriptions with their content.
* **Accessibility Navigation:** Added a "Skip to content" link at the very top of the document to improve keyboard navigation.

## 2. Semantic Decisions I Made (REQUIRED)

### Decision 1
* **Element(s) used:** `<header>` and `<footer>`
* **Where in the page:** The top and bottom of the document.
* **Why this element is semantically correct:** These provide clear landmarks for screen readers and search engines to identify introductory content (branding/roles) and site-wide metadata (social links/copyright), rather than using generic `<div>` tags.

### Decision 2
* **Element(s) used:** `<main>` with an `id="main"`
* **Where in the page:** Wrapping the primary content of the portfolio.
* **Why this element is semantically correct:** It informs the browser where the unique content of the page begins, allowing the "Skip to content" link to function correctly for accessibility.

## 3. Accessibility Considerations
* **Skip Link:** Included a hidden-by-default link to allow keyboard users and screen reader users to bypass the header and jump directly to the portfolio content.
* **Link Clarity:** Used descriptive text for links (e.g., "GitHub Profile") instead of "Click Here."

## 4. What I Learned
I learned how to group media and captions properly using semantic tags like `<figure>` instead of just using nested `<div>` tags. This improves the "meaning" of the code for non-visual browsers.

## 5. What I Still Need to Improve
I need to practice more complex table structures for displaying network configurations and focus on advanced form accessibility (labels, fieldsets, and ARIA roles).

## 6. Notes about AI Usage
* **Tool used:** Gemini
* **What I accepted as-is:** The basic HTML5 boilerplate structure and the initial markdown layout.
* **What I modified manually:** Updated all personal bio details, added my specific degree info from Savonia UAS, and corrected the social media links to my actual profiles.

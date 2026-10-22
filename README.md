# Clement — UI/UX Designer Portfolio

A minimal, premium, responsive portfolio built with plain HTML, CSS, and JavaScript. No framework or build step is required.

## 1. Open the site
1. Extract the ZIP file.
2. Open the `clement-uiux-portfolio` folder in VS Code.
3. Open `index.html` with the VS Code Live Server extension, or open the file directly in a browser.
4. Test on desktop and mobile widths.

## 2. Folder structure
```text
clement-uiux-portfolio/
├── index.html
├── styles.css
├── script.js
├── README.md
└── assets/
    └── images/
        ├── profile-photo.svg
        ├── bmp-cover.svg
        ├── bmp-screen-dashboard.svg
        ├── bmp-screen-alarms.svg
        ├── bmp-screen-data-explorer.svg
        ├── bmp-screen-hierarchy.svg
        ├── homebuddy-cover.svg
        ├── homebuddy-screen-discovery.svg
        ├── homebuddy-screen-details.svg
        ├── homebuddy-screen-search.svg
        ├── homebuddy-screen-mobile.svg
        ├── pos-cover.svg
        ├── pos-screen-dashboard.svg
        ├── pos-screen-checkout.svg
        ├── pos-screen-inventory.svg
        └── pos-screen-reports.svg
```

## 3. Image placement: exact filenames
The SVG files included are neutral visual placeholders so the website works immediately. Replace each placeholder with an export of your own design. For simplest replacement, keep the same filename and export your image as SVG, or update the corresponding `src` in `index.html` / `script.js` if using PNG or JPG.

| Filename | What to put there | Where used |
|---|---|---|
| `profile-photo.svg` | Your professional portrait/headshot | Home hero |
| `bmp-cover.svg` | BMP hero mockup/cover, ideally a composition of 1–3 key screens | BMP project card and case study header |
| `bmp-screen-dashboard.svg` | BMP overview dashboard | BMP case study selected screens |
| `bmp-screen-alarms.svg` | BMP alarm list or alarm details/audit trail | BMP case study selected screens |
| `bmp-screen-data-explorer.svg` | BMP chart/data explorer | BMP case study selected screens |
| `bmp-screen-hierarchy.svg` | BMP site hierarchy screen | BMP case study selected screens |
| `homebuddy-cover.svg` | Home Buddy hero mockup/cover, ideally browser/device mockup | Home Buddy card and case study header |
| `homebuddy-screen-discovery.svg` | Home Buddy home page or listing discovery | Home Buddy case study |
| `homebuddy-screen-details.svg` | Property detail page | Home Buddy case study |
| `homebuddy-screen-search.svg` | Search/filter results screen | Home Buddy case study |
| `homebuddy-screen-mobile.svg` | Mobile Home Buddy screen/flow | Home Buddy case study |
| `pos-cover.svg` | POS/inventory hero mockup/cover, ideally desktop + mobile screens | POS card and case study header |
| `pos-screen-dashboard.svg` | Sales/overview dashboard | POS case study |
| `pos-screen-checkout.svg` | POS checkout/transaction flow | POS case study |
| `pos-screen-inventory.svg` | Product/stock management screen | POS case study |
| `pos-screen-reports.svg` | Reports/analytics screen | POS case study |

### What should a cover/mockup look like?
Make each cover a wide, landscape composition. Put one strong screen in the centre, or combine a desktop screen with one or two overlapping mobile/tablet screens. Use a quiet neutral background and avoid adding a lot of tiny text. The cover should communicate the product quickly. Export at roughly 1600–2000 px wide if exporting PNG/JPG.

## 4. Where to add your Figma prototype links
Open `script.js` and find the `projectData` object near the top. Search for `prototype:`. Each project has one property:
- BMP: `prototype: "https://www.figma.com/"`
- Home Buddy: `prototype: "https://www.figma.com/"`
- POS: `prototype: "https://www.figma.com/"`

Replace each URL with the actual share/prototype link, for example:
```js
prototype: "https://www.figma.com/proto/YOUR_FILE_ID/your-project"
```
Also update the matching `prototypeLabel` so it reads something like `"View interactive BMP prototype"`. Do not leave the generic Figma home-page URL in your published portfolio.

## 5. Where to update your personal details
Open `index.html`:
- Find `Clement` to change your display name/wordmark.
- Find `your.email@example.com` and replace it with your professional email.
- Find `href="#"` in the social links and replace each with your real Behance, LinkedIn, and Figma profile URLs.
- Find the “A LITTLE ABOUT ME” section and rewrite the paragraph to reflect your real background and strengths.
- Update “Based in Nigeria” and availability text if needed.
- The current external Google Fonts connection is optional; the site uses fallback fonts if offline.

## 6. About the case studies
The project case studies open in a modal when a visitor clicks a project cover or arrow. Their content is in `script.js`, in `projectData`:
- `overview`
- `problem`
- `goals`
- `roles`
- `features`
- `decisions`
- `outcome`
- `screens`

The BMP content uses the details provided: Admin Users, Control Engineers, Asset Owners, and Executives; alarm management and audit trail; data explorer; and site hierarchy (Site → SBMS → Rack → Pack).

The Home Buddy and POS copy is starter copy based on the short project descriptions. **Edit it to match what you actually designed.** Remove any feature you did not build/design and do not claim research, testing, or measured outcomes unless you really did them. If a project was conceptual, label it as a concept.

## 7. How to replace a placeholder image without changing code
If you export your Figma cover as PNG:
1. Save it as `bmp-cover.png` in `assets/images/`.
2. In `index.html`, change the BMP card's `src` from `assets/images/bmp-cover.svg` to `assets/images/bmp-cover.png`.
3. In `script.js`, change the BMP `cover` value from `assets/images/bmp-cover.svg` to `assets/images/bmp-cover.png`.
4. Repeat for each screen you replace. Screen image paths are inside the relevant project's `screens` array in `script.js`.

If you want to keep the code unchanged, save/convert your export to the same filename and format as the placeholder.

## 8. Final checks before publishing
- Replace all placeholder images with your own work.
- Replace all prototype and social links.
- Update your name, email, bio, role, and dates.
- Open every project case study and test every link.
- Check mobile layout and keyboard navigation.
- Ensure you have permission to publish any client/employer work.
- Do not claim outcomes, testing, or research you cannot substantiate.

## Notes
This is a static portfolio starter, so there is no backend or contact form submission. The email link opens the visitor's email app. If you later want a working form, connect a form service or add a backend.

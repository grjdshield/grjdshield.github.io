# Phishing Website Detector - Landing Page

Official introduction page of the Phishing Website Detector Chrome extension.

## Files

| File / folder | Purpose |
|---|---|
| `index.html` | The landing page |
| `style.css` | Design (same colors as the extension) |
| `script.js` | Mobile menu, screenshot viewer |
| `images/` | Screenshots and icon |
| `downloads/PhishingDetection.zip` | The extension that visitors download |

## Publish for free with GitHub Pages

1. Create a GitHub account and a new **public** repository (example: `phishing-detector`).
2. Upload everything inside this folder (keep the `images` and `downloads` folders).
3. Go to **Settings > Pages**.
4. Under **Branch**, choose `main` and `/ (root)`, then click **Save**.
5. After 1 to 2 minutes the page is live at
   `https://YOUR-USERNAME.github.io/phishing-detector/`

## Things to update later

- **New version of the extension:** replace `downloads/PhishingDetection.zip`.
- **Published on the Chrome Web Store:** in `index.html`, find `id="storeButton"`,
  put the store link in `href`, and remove `is-disabled` and `aria-disabled="true"`.
- **New screenshots:** replace the files in `images/` with the same file names.

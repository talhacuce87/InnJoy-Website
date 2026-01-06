# InnJoy Website

Landing page and subpages for InnJoy, a mobile‑first guest services platform for hotels.

## Structure
 - `index.html`: Home (Hero, value proposition, features, sample events, security, footer)
 - `guest.html`: Guest flow
 - `admin.html`: Hotels (Admin) flow
 - `faq.html`: Frequently Asked Questions
 - `security.html`: Security & Integrations
 - `styles/main.css`: Shared styles
 - `scripts/main.js`: Parallax and event slider; hero swap logic

## Run Locally
The simplest way is to open `index.html` directly in your browser.

Alternatively, serve with a local web server:

### PowerShell (Windows)
```powershell
# If Python is installed
python -m http.server 8080 -d "c:\Users\eFJey\Desktop\InnJoy WebSite"
# Then open in your browser:
# http://localhost:8080
```

### VS Code Live Server
- Install the "Live Server" extension
- Choose "Open with Live Server" on `index.html`

## SEO & Meta
 - Title, description and keywords are included
 - JSON‑LD defined for Organization

## Notes
 - Backend integrations are illustrative (Firebase Authentication, Firestore)
 - Contact/Demo and pricing/payment pages are not included.

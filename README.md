# Md. Iqbal Hasan — Portfolio

A personal portfolio site built from scratch with vanilla HTML, CSS, and JavaScript — no frameworks, no build step. Showcases my work across app development, web development, and AI, alongside a parallel practice in astrophotography and video editing.

**🔗 Live site:** [https://iqbalhasan-portfolio.netlify.app/]

![status](https://img.shields.io/badge/status-active-brightgreen) ![made with](https://img.shields.io/badge/made%20with-HTML%2FCSS%2FJS-1f6feb)

---

## ✨ Features

- **Animated starfield hero** rendered on `<canvas>`, with a typing-effect intro line
- **Scroll-reveal animations** for sections as they enter the viewport
- **Dynamic project grid** — projects, tags, and links are rendered from a single JS data array, so adding a new build means editing one object, not the markup
- **Certificate lightbox** — click any certificate button in the timeline to view it full-size
- **Astrophotography slideshow** with prev/next controls, dot navigation, and a live counter
- **Reels row** linking out to Instagram/Facebook video edits
- **Fully responsive** with a mobile nav drawer
- **Zero dependencies** at runtime — just Google Fonts

## 🛠️ Tech Stack

| Layer | Tech |
|---|---|
| Markup | HTML5 |
| Styling | CSS3 (custom properties, no framework) |
| Behavior | Vanilla JavaScript (ES6+) |
| Fonts | Space Grotesk, IBM Plex Sans, IBM Plex Mono (Google Fonts) |

## 📁 Project Structure

```
Portfolio/
├── index.html          # Page structure & content
├── style.css           # All styling
├── script.js           # Starfield, slideshow, project rendering, interactions
└── assets/
    ├── nav.png              # Logo mark
    ├── profile_pic.jpg      # Hero portrait
    ├── certificates/        # Hackathon / workshop certificates
    ├── projects/             # Per-project screenshots
    │   ├── clearsign/
    │   ├── expense-traker/
    │   └── VUPC/
    ├── reels/                # Reel thumbnails
    └── slideshow/            # Astrophotography gallery images
```

## 🚀 Getting Started

No build tools required — it's static HTML/CSS/JS.

```bash
cd portfolio
git clone [https://github.com/iqbalhasanshanto-dev/portfolio.git](https://github.com/iqbalhasanshanto-dev/portfolio_Iqbal_hasan)
```

Then just open `index.html` in a browser, or serve it locally:

```bash
# Python
python3 -m http.server 8000

# Node
npx serve .
```

Visit `http://localhost:8000`.

## ✏️ Customizing

- **Add a project** — edit the `PROJECTS` array at the top of `script.js` (title, description, tags, status, `liveUrl`, image path). The grid re-renders automatically.
- **Swap the hero photo** — replace `assets/profile_pic.jpg`.
- **Update the astrophotography gallery** — edit the `GALLERY` array in `script.js` and drop matching images in `assets/slideshow/`.
- **Update reels** — edit the `VIDEOS` array and drop thumbnails in `assets/reels/`.
- **Resume download** — wire up the `Download Resume` button's `href` in `index.html` to your resume PDF.

## 📌 Current Projects Featured

- **ClearSign** — a medical app in progress focused on making critical health information clearer and faster to act on
- **Expense Tracker** — a full-stack budgeting app with clean data handling and a UI/UX-first design
- **VUPC** — a live, deployed website with a focus on clean frontend execution ([view live](https://vupc-official-web.vercel.app/))

## 📬 Contact

- **Email:** mdiqbalhasan.dev@gmail.com
- **GitHub:** [@iqbalhasanshanto-dev](https://github.com/iqbalhasanshanto-dev)
- **LinkedIn:** [Md. Iqbal Hasan](https://www.linkedin.com/in/md-iqbal-hasan-7343b6406)
- **Instagram:** [@iqbal_hasan_shanto](https://www.instagram.com/iqbal_hasan_shanto/)

## 📄 License

Feel free to reference the layout/structure for learning purposes, but please don't copy the content or branding as your own. If you'd like to reuse the code, add an explicit license (e.g. MIT) here.

---

Designed & coded from scratch by Md. Iqbal Hasan.

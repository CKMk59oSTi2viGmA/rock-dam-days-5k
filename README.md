# Rock Dam Days 5K Website

Static website for the annual Rock Dam Days 5K Run/Walk at Rock Dam Lake, Clark County, WI.

## Project Structure

```
rock-dam-days-5k/
├── index.html          ← Main page (all sections in one file)
├── css/
│   └── style.css       ← All styling (colors, layout, responsive)
├── js/
│   └── countdown.js    ← Countdown timer to race day
├── assets/
│   └── images/
│       └── logo.png    ← Event logo
├── .gitignore
└── README.md
```

## Local Development

Open `index.html` directly in a browser. No build step or server needed.

For live-reload during editing, use the VS Code "Live Server" extension.

## Deployment

This site is designed for free hosting on GitHub Pages or Cloudflare Pages. Push to a GitHub repo and enable Pages in the repo settings.

## Yearly Updates

To update for next year:
1. Update the date in `index.html` (hero section and detail cards)
2. Update the year in the countdown target in `js/countdown.js`
3. Update sponsor names/logos in the sponsors section
4. Update the Facebook link in the footer

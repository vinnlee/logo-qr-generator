# Logo QR Code Generator

A web app that generates scannable QR codes with your logo embedded as the background.

## What it does

Upload a logo, enter a URL or text, and the app produces a QR code where your logo shows through the pattern. The QR dots are only drawn where the logo's brightness would confuse a scanner, everywhere else, the logo itself provides the correct light/dark value. The result looks like a branded image but scans reliably.

**Key features:**

- Upload any logo (PNG, JPG, SVG...)
- Auto-extracts your brand's dominant color and applies it to the QR finder squares
- Customize dot style (square, rounded, circle), dot size, and colors
- Export as PNG or SVG
- Everything runs in the browser (no files are sent to a server)

## How it works

1. Your logo is drawn as the full canvas background
2. The app checks the brightness of each QR module position against the logo pixels at that location
3. A dot is only drawn if the logo's brightness doesn't already match what the QR code needs (dark vs. light)
4. The three finder squares (corner markers) and alignment patterns are always drawn on top in your brand color
5. Error correction level H (30% tolerance) handles any modules left uncovered by the logo

This means the logo stays visually dominant, dots only appear where necessary for scannability.

## Tech stack

- Next.js (App Router, client-side only)
- TypeScript
- Tailwind CSS

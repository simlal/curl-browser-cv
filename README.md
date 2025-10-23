# curl-browser-cv

A lightweight **Next.js** app that serves your CV either as a styled web page or directly in the terminal via `curl` or `wget`, with optional color output.

App uses a simple middleware to detect if the request comes from a terminal client or a browser. If the request comes from a browser, it serves a nicely styled HTML version.
When triggered, it dynamically generates and returns a plain‑text or ANSI‑colored version of the CV instead of the HTML page using an internal `CVGenerator` class.

This allows the same endpoint to serve both a styled browser view and a terminal‑friendly output without separate routes or files.

## 🚀 Live Demo

**Browser:** [https://curl-cv.simlal.dev/](https://curl-cv.simlal.dev/)

## 📄 View in Terminal

### Plain version

```bash
# For terminals without color support
curl https://curl-cv.simlal.dev/

```bash
# If you prefer wget instead
wget -qO - https://curl-cv.simlal.dev/
```

### Colored version

```bash
# For terminals with color color
curl -G -d 'colorTerm=true' https://curl-cv.simlal.dev/
```

```bash
# Again if you prefer wget instead
wget -qO - "https://curl-cv.simlal.dev//?colorTerm=true"
```

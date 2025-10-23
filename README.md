# curl-browser-cv

A lightweight **Next.js** app that serves your CV either as a styled web page or directly in the terminal via `curl` or `wget`, with optional color output.

App uses a simple middleware to detect if the request comes from a terminal client or a browser.

## 🚀 Live self-hosted app

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
wget -qO - "https://curl-cv.simlal.dev/?colorTerm=true"
```

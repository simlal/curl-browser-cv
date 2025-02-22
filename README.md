# curl-browser-cv

Minimalistic Next.js app that can serve my CV in a browser or terminal.

## Deployed at

Check it out at [https://simlal-curl-cv.vercel.app/](https://simlal-curl-cv.vercel.app/)

or directly in your terminal:

**Plain version:**

```bash
# Use this command if your terminal does not support color
curl https://simlal-curl-cv.vercel.app/
```

```bash
# If you prefer wget instead
wget -qO - https://simlal-curl-cv.vercel.app/
```

**Color version:**

```bash
# Use this command if your terminal supports color
curl -G -d 'colorTerm=true' https://simlal-curl-cv.vercel.app/
```

```bash
# Again if you prefer wget instead
wget -qO - "https://simlal-curl-cv.vercel.app//?colorTerm=true"
```

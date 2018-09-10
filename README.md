# React/NextJS with CosmicJS Starter
A simple starter for building SEO friendly react apps that leverage [CosmicJS](https://cosmicjs.com) as the backend and CMS.

Sass is used for styles.
Api requests are made using the [CosmicJS NPM package](https://www.npmjs.com/package/cosmicjs).

## Getting Started
- Clone and `npm install`
- Add a `.env` file to the root of your project with your CosmicJS environment variables.
- `npm run dev`

### Environment Variables
```
COSMIC_BUCKET=XXXX
COSMIC_WRITE_KEY=XXXX
COSMIC_READ_KEY=XXXX
```

## Deploying to now

To deploy to now just add keys via your console before running `now`:
```sh
$ now secret add COSMIC_BUCKET XXXX
$ now secret add COSMIC_WRITE_KEY XXXX
$ now secret add COSMIC_READ_KEY XXXX
```

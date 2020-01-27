# Contributing
If you'd like to contribute, fantasic! Please fork and submit pull requests with improvements and new features.

All of the source files are in the `src/scss` directory. Feel free to use the `index.html` in the `src` directory to
 view and test Griddle or your new feature or improvement. Only the `.scss` files in the `src/scss` directory gets
  bundled up into the `dist` directory. 

Here are a few commands for you to know.
## Commands 

### Install Dependencies
```bash
$ yarn
# or 
$ npm install
```

### Build

Build for **production**.

```bash
$ yarn build:production
# or
$ npm run build:production
```

You can build Griddle for development and have Webpack watch for any files changes.

```bash
$ yarn watch
# or
$ npm run watch 
```

Or you can do a one time build for development.

```bash
$ yarn build:dev
# or
$ npm run build:dev
```

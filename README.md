# Succint React Starter

Thanks to Brian Holt for the inspiration!

## Why did I build this?
COMING SOON

## What's included?
INTRO COMING SOON

### CSS

I've used the very basic (Marx classless framework/reset)[https://mblode.github.io/marx/] to provide a starting point for basic prototyping with a tolerable UI while maintaining symantic and accessibility standards. Removing it is as simple as deleting the cdn link from `index.html`.

I've also provided a few basic overrides for the nav bar and button styling, which also serve as examples of how the styling files can be structured within the project.

### Sample files

I've included a navbar, a sample page, and a footer. The purpose was two-fold. First, to have the documentation presented nicely and second to provide a working reference of my preferred React setup.

### The package.json

It's fairly self-explanatory, but here's what's included and why:
- INFO TO COME

### The config files

I've set up a basic `.babelrc`, `.eslintrc.json`, and `.prettierrc` so that you can start using this right away.

## Getting set up

### VS Code

This is my preferred editor. I recommend using the following extensions:
- npm Intellisense
- Prettier - Code formatter
- ESLint
- vscode-styled-components (if you'll be using Emotion)

I can also recommend a couple extensions I find helpful in general front end development:
- Author Rename Tag
- Bracket Pair Colorizer
- Intellisense for CSS class names

### Up and running

You'll need to get into your project folder and install the packages first.

```
cd /path/to/your/project/folder
npm install
```

If you open up your project in your text editor, in the package.json file you'll find some scripts you can run in your terminal that can be run as follows:

`npm run format` - runs Prettier
`npm run test` - runs your Jest tests
`npm run testu` - runs the snapshot updates on Jest tests
`npm run testw` - runs Jest with the watch argument, making repeatedly running tests more useful
`npm run testc` - runs Jest with a coverage report, which is generated in a coverage folder in the root
`npm run lint` - runs ESLint on all `.js` and `.jsx` files in the `src` directory
`npm run dev` - runs Parcel and tells it which file to user to start the app. In this case, `index.html`.
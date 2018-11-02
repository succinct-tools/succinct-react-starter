# Succint React Starter

Thanks to [Brian Holt](https://github.com/btholt) for the inspiration!

## Why did I build this?
Create React App is a great starting point, but I wanted something a bit more custom. Parcel instead of Webpack, for example. I also wanted to see if I could build something I would use myself and make getting little experiments up and running quickly easier.

## What's included?
I've kept things as simple, streamlined, and modular as I could. Hopefully this allows me and anyone else using this setup to swap things out easily.

### CSS/Sass

I've used the very basic [Marx classless framework/reset](https://mblode.github.io/marx/) to provide a starting point for basic prototyping with a tolerable UI while maintaining symantic and accessibility standards. Removing it is as simple as deleting the cdn link from `index.html`.

I've also provided a few basic overrides for the nav bar and button styling, which also serve as examples of how the styling files can be structured within the project.

On a more formal project, I would probably use [Bulma](https://bulma.io/) via [Trunx](https://github.com/fibo/trunx).

### Sample files

I've included a navbar, a sample page, and a footer, which also act as the demo app and landing page for the project. The purpose was two-fold. First, to have the documentation presented nicely and second to provide a working reference of my preferred React setup.

### The package.json

It's fairly self-explanatory, but here's what's included, with links to each package so you can read the documentation.

#### devDependencies
- [babel-core](https://www.npmjs.com/package/babel-core)
- [babel-eslint](https://www.npmjs.com/package/babel-eslint)
- [babel-plugin-transform-class-properties](https://www.npmjs.com/package/babel-plugin-transform-class-properties)
- [babel-preset-env](https://www.npmjs.com/package/babel-preset-env)
- [babel-preset-react](https://www.npmjs.com/package/babel-preset-react)
- [eslint](https://www.npmjs.com/package/eslint)
- [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier)
- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)
- [eslint-plugin-jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y)
- [eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier)
- [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)
- [jest](https://www.npmjs.com/package/jest)
- [parcel-bundler](https://www.npmjs.com/package/parcel-bundler)
- [prettier](https://www.npmjs.com/package/prettier)
- [react-test-renderer](https://www.npmjs.com/package/react-test-renderer)
- [sass](https://www.npmjs.com/package/sass)

#### dependencies
- [@reach/router](https://www.npmjs.com/package/@reach/router)
- [emotion](https://www.npmjs.com/package/emotion)
- [identity-obj-proxy](https://www.npmjs.com/package/identity-obj-proxy)
- [react](https://www.npmjs.com/package/react)
- [react-dom](https://www.npmjs.com/package/react-dom)
- [react-emotion](https://www.npmjs.com/package/react-emotion)
- [react-loadable](https://www.npmjs.com/package/react-loadable)


### The config files

I've set up a basic `.babelrc`, `.eslintrc.json`, and `.prettierrc` so that you can start using this right away. They contain what I consider to be a good balance between customization and letting the defaults handle things.

## Getting set up

### VS Code

This is my preferred editor. I recommend using the following extensions:
- [npm Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [vscode-styled-components](https://marketplace.visualstudio.com/items?itemName=mf.vscode-styled-components) (if you'll be using Emotion)

I can also recommend a couple extensions I find helpful in general front end development:
- [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)
- [Bracket Pair Colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer)
- [Intellisense for CSS class names](https://marketplace.visualstudio.com/items?itemName=Zignd.html-css-class-completion)

### Dev Tools

I recommend you also install the [React](https://github.com/facebook/react-devtools) and [Redux](https://github.com/zalmoxisus/redux-devtools-extension) (if you're using it) developer tools in your browser. It will make debugging easier.

### Up and running

You'll need to get into your project folder and install the packages first.

```
cd /path/to/your/project/folder
npm install
```

If you open up your project in your text editor, in the package.json file you'll find some scripts you can run in your terminal that can be run as follows:

- `npm run format` - runs Prettier
- `npm run test` - runs your Jest tests
- `npm run testu` - runs the snapshot updates on Jest tests
- `npm run testw` - runs Jest with the watch argument, making repeatedly running tests more useful
- `npm run testc` - runs Jest with a coverage report, which is generated in a coverage folder in the root
- `npm run lint` - runs ESLint on all `.js` and `.jsx` files in the `src` directory
- `npm run dev` - runs Parcel and tells it which file to user to start the app. In this case, `index.html`.

Once you've got it installed, to start the project server, run `npm run dev` and it will be running at `http://localhost:1234`.

## ToDo list
- Finish the demo page.
- Currently the local server only runs on http. Getting something going with https is ideal.
- Configure a localstorage example.
- Set up a code-splitting example.
- Set up an emotion example.
# express-mongo-blog
Blog application built using express.js and mongodb with ejs template engine

## what dependencies and dev-dependecies have been used?
```json
{
    "dependencies": {
    "@popperjs/core": "^2.6.0",
    "bcrypt": "^5.0.0",
    "bootstrap": "^5.0.0-beta1",
    "cors": "^2.8.5",
    "dotenv": "^8.2.0",
    "ejs": "^3.1.5",
    "express": "^4.17.1",
    "express-validator": "^6.9.0",
    "mongoose": "^5.11.8",
    "morgan": "^1.10.0"
  },
  "devDependencies": {
    "autoprefixer": "^10.1.0",
    "css-loader": "^5.0.1",
    "nodemon": "^2.0.6",
    "postcss": "^8.2.1",
    "postcss-loader": "^4.1.0",
    "sass": "^1.30.0",
    "sass-loader": "^10.1.0",
    "style-loader": "^2.0.0",
    "ts-loader": "^8.0.12",
    "typescript": "^4.1.3",
    "webpack": "^5.11.0",
    "webpack-cli": "^4.3.0",
    "webpack-dashboard": "^3.2.1"
  }
}
```
If you take a look at the `package.json` file you will find a bunch of dependencies.
These dependencies have been included for the following reasons.

### `dependencies`
**`express`** The backend framework. <br>
**`ejs`** Templating engine used. <br>
**`bcrypt`** For hashing user password befoer storing it in the database. <br>
**`morgan`** For logging server informations. <br>
**`dotenv`** To load enironment variables. <br>

**`bootstrap` and `@popperjs/core`** If you want to use bootstrap for your frontend and want to bundle and ship with your own 
styles you will have to install these two dependencies. The bootstrap is version 5 which does not use `jquery` as a dependency. <br>

### `dev-dependencies`
**`css-loader`, `postcss`, `postcss-loader`, `autoprefixer`, `sass-loader`, `sass` and `style-loader`** These dependencies are 
neeeded to compile all `css` and `scss` styles to one minified css bundle to ship. `postcss` and `autoprefixer` is also needed
to compile the bootstrap `sass` files. <br>

**`webpack` and `webpack-cli`** For building and bundling all static files. <br>

**`webpack-dashboard`** To analyze the dependencies size for optimization. <br>

**`typescript` and `ts-loader`** For compiling typescript files. <br>

**`nodemon`** For reloading the dev server in development after file changes. <br>


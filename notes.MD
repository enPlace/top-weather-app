https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/webpack


STEPS 
1. npm init -y
2. npm install webpack webpack-cli --save-dev
3. in package.json: 
    -  "main": "index.js", (remove)
    +  "private": true, (add)

4. directory: 
├── dist
│   ├── bundle.js
│   └── index.html
├── src
│   ├── index.js 
    └── other js files 

├── package-lock.json
├── package.json
└── webpack.config.js (view this repository's config to see what to add)

5. command for bundling: 
    npx webpack


on config files: 
As of version 4, webpack doesn't require any configuration, but most projects will need a more complex setup, which is why webpack supports a configuration file.
https://webpack.js.org/guides/getting-started/

6. css files: 
6a. npm install --save-dev style-loader css-loader
6b. add to config: 
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

7. image files: 
    add to config
        {//for imgs
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
        },

8. html webpack plugin: https://webpack.js.org/guides/output-management/#setting-up-htmlwebpackplugin
    npm install --save-dev html-webpack-plugin

9. debugging: 
    in .config file: 
        mode: 'development', // | 'production' | 'none'
        devtool: 'inline-source-map'


10. live reload. Check out the watch and webpack-dev-server (also middleware)sections here 
        https://webpack.js.org/guides/development/#choosing-a-development-tool



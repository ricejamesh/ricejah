# ricejah
Initial version.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm run test:unit
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Deploying a subfolder to GitHub Pages
https://gist.github.com/cobyism/4730490


Sometimes you want to have a subdirectory on the master branch be the root directory of a repository’s gh-pages branch. This is useful for things like sites developed with Yeoman, or if you have a Jekyll site contained in the master branch alongside the rest of your code.

For the sake of this example, let’s pretend the subfolder containing your site is named dist.

Step 1
Remove the dist directory from the project’s .gitignore file (it’s ignored by default by Yeoman).

Step 2
Make sure git knows about your subtree (the subfolder with your site).

```
git add dist && git commit -m "Initial dist subtree commit"
```

Step 3
Use subtree push to send it to the gh-pages branch on GitHub.

```
git subtree push --prefix dist origin gh-pages
```
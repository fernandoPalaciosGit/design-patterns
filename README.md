[![Build Status](https://travis-ci.org/fernandoPalaciosGit/design-patterns.svg?branch=master)](https://travis-ci.org/fernandoPalaciosGit/design-patterns)


## Design patterns examples

- Run Mocha test and istanbul coverage
```bash
$npm install
$bower install
$npm run app
```

- [**Travis CI report**](https://travis-ci.org/fernandoPalaciosGit/design-patterns)
- [**Istanbul Coverage report**](http://fernandopalaciosgit.github.io/design-patterns/test/coverage/html/index.html)
- [To create a new coverage report from unit test, follow Readme instructions on gh-pages branch](https://github.com/fernandoPalaciosGit/design-patterns/tree/gh-pages)


## Commit on coverage on branch gh-page

```markdown
git checkout gh-pages
git add . && git commit -am "new test coverage"
git pull origin gh-pages
git pull origin master
npm run coverage
git commit -am "new coverage report"
git push origin -u gh-pages
git checkout master
```

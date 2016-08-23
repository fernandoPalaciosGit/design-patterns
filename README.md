[![Build Status](https://travis-ci.org/fernandoPalaciosGit/design-patterns.svg?branch=master)](https://travis-ci.org/fernandoPalaciosGit/design-patterns)


## Design patterns examples

- Run Mocha test and istanbul coverage
```bash
$npm install
$bower install
$npm run app # open coverage into: test/coverage/html
```

- [**Travis CI report**](https://travis-ci.org/fernandoPalaciosGit/design-patterns)
- [**Istanbul Coverage report**](http://fernandopalaciosgit.github.io/design-patterns/test/coverage/html/index.html)

## Commit on coverage on branch gh-page

```markdown
git checkout gh-pages
git fetch
git rebase origin/master
git commit -am "merge with local"
#git merge origin/master
npm run coverage
git commit -am "new coverage report"
git push origin -u gh-pages
```

[![Build Status](https://travis-ci.org/fernandoPalaciosGit/design-patterns.svg?branch=master)](https://travis-ci.org/fernandoPalaciosGit/design-patterns)


## Design patterns examples

- Initialize application
```bash
$npm install
$bower install
$npm run app
```

- Run Mocha test and istanbul coverage
```bash
$npm run coverage # ./test/coverage/html/index.html
```

- Create new examples and design with TDD
```bash
$npm run test
```

- [**Travis CI report**](https://travis-ci.org/fernandoPalaciosGit/design-patterns)
- [**Istanbul Coverage report**](http://fernandopalaciosgit.github.io/design-patterns/test/coverage/html/index.html)
- [To create a new coverage report from unit test, follow Readme instructions on gh-pages branch](https://github.com/fernandoPalaciosGit/design-patterns/tree/gh-pages)


## Commit on coverage on branch gh-page

```markdown
git checkout gh-pages
git fetch
git rebase origin/master
#on Merge conflict: solve and continuous with git status instructions
npm run coverage
git commit -am "new coverage report"
git pull origin gh-pages
git commit -am "merge with local"
git push origin -u gh-pages
```

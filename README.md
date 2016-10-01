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

- Run disc reporter bundle
```bash
$npm run disc # ./disc/[osmani-oreilly/platzi].html
```

- Create new examples and design with TDD
```bash
$npm run test
```

- Debug mocha tests
- Needs turn on web container, environments enabled: APACHE_HOST + APACHE_PORT
```bash
# For breakpoint steps definition on browser debugger might not pause execution there (because UglifyJS concat).
# I've found that setting the breakpoint on the *first line* and stepping onto the following lines is more reliable.
$npm run debug-mocha-osmanioreilly
$npm run debug-mocha-platzi
```

- [**Travis CI report**](https://travis-ci.org/fernandoPalaciosGit/design-patterns)
- [**Istanbul Coverage report**](http://fernandopalaciosgit.github.io/design-patterns/test/coverage/html/index.html)
- **Module tree report:** [design-patterns](http://fernandopalaciosgit.github.io/design-patterns/disc/osmani-oreilly.html), [platzy examples](http://fernandopalaciosgit.github.io/design-patterns/disc/platzi.html)
- [To create a new coverage report from unit test, follow Readme instructions on gh-pages branch](https://github.com/fernandoPalaciosGit/design-patterns/tree/gh-pages)

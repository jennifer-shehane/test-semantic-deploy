# test-semantic-deploy

[![Build status][ci-image] ][ci-url]
[![CircleCI](https://circleci.com/gh/bahmutov/test-semantic-deploy.svg?style=svg)](https://circleci.com/gh/bahmutov/test-semantic-deploy)
[![CLA assistant](https://cla-assistant.io/readme/badge/bahmutov/test-semantic-deploy)](https://cla-assistant.io/bahmutov/test-semantic-deploy)

A small Hexo static blog site, deployed automatically if there are meaningful
commits since last deploys. Used to test
[semantic-action](https://github.com/bahmutov/semantic-action) tool.

See configuration in `release` object inside [package.json](package.json).

After deploy, check deployed build information:

```text
$ curl https://glebbahmutov.com/test-semantic-deploy/build.json
{
  "id": "05f40c3ffdeb35b01adbf30d6753f3e52854e5e4",
  "short": "05f40c3",
  "savedAt": "2017-07-26T16:48:55.887Z",
  "version": "1.0.0"
}
```

[ci-image]: https://travis-ci.org/bahmutov/test-semantic-deploy.svg?branch=master
[ci-url]: https://travis-ci.org/bahmutov/test-semantic-deploy

# test-semantic-deploy

A small Hexo static blog site, deployed automatically if there are meaningful
commits since last deploys. Used to test
[semantic-action](https://github.com/bahmutov/semantic-action) tool.

See configuration in `release` object inside [package.json](package.json)

After deploy, check deployed build information

```text
$ curl https://glebbahmutov.com/test-semantic-deploy/build.json
{
  "id": "05f40c3ffdeb35b01adbf30d6753f3e52854e5e4",
  "short": "05f40c3",
  "savedAt": "2017-07-26T16:48:55.887Z",
  "version": "1.0.0"
}
```

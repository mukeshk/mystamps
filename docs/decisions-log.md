# Bugs, workarounds and project's decisions

| Date/Type | Description |
| --------- | ----------- |
| 22.05.2020 Workaround | [php-coder/mystamps#1398](https://github.com/php-coder/mystamps/issues/1398): After we switched to use HTTPS for a **0pdd** badge, it didn't show up in README.md file. Workaround: get back to using of HTTP in a link. Bug: [yegor256/0pdd#289](https://github.com/yegor256/0pdd/issues/289) Commits: [2d53575d](https://github.com/php-coder/mystamps/commit/2d53575d1c6a7b8ee9681d438fc4622e799e36c5) |
| 07.04.2020 Decision   | Add new type of change of commits: `improve` We need this because many changes in a series import are naturally fit into this category: they aren't new features as they are small, they aren't bugs as they were discovered during site usage. Unfortunately there is no related type in the current conventional commits specification. See discussions: [conventional-commits/conventionalcommits.org#66](https://github.com/conventional-commits/conventionalcommits.org/issues/66) and [conventional-commits/conventionalcommits.org#78](https://github.com/conventional-commits/conventionalcommits.org/issues/78)
| 07.03.2020 Workaround | [php-coder/mystamps#1072](https://github.com/php-coder/mystamps/issues/1072): AJAX-related tests don't work in **htmlunit** and fail with `ReferenceError: "Headers" is not defined`. When the code got updated to use another version of constructor of `Headers` class, tests fail with error `ReferenceError: "fetch" is not defined` error. Bug: [HtmlUnit/htmlunit#78](https://github.com/HtmlUnit/htmlunit/issues/78) Workaround: because "the fetch api is not supported so far", let's use axios library instead. Commits: [f224e94](https://github.com/php-coder/mystamps/commit/f224e944b367036458ce9d7ce0c596504766ef8e) |
| 07.03.2020 Workaround | [php-coder/mystamps#1072](https://github.com/php-coder/mystamps/issues/1072): `sendKeys()` method from **htmlunit** fails with `StringIndexOutOfBoundsException: start > length()` exception when we fill a field again. Bug: [HtmlUnit/htmlunit#142](https://github.com/HtmlUnit/htmlunit/issues/142) Workaround: open a page on every test to avoid a state from other tests. Commits: [943afba](https://github.com/php-coder/mystamps/commit/943afba4f60b3df47e678a274186b80702e7562c) |
| 09.02.2020 Workaround | **pdd** fails to parse files in charsets other than UTF-8 with error `invalid byte sequence in UTF-8`. Workaround: exclude `src/test/wiremock` directory. Bug: [yegor256/pdd#143](https://github.com/yegor256/pdd/issues/143) Commits: [30aab7d](https://github.com/php-coder/mystamps/commit/30aab7dc8c265804efef382422e7cae9e53187f3), [ab563b6](https://github.com/php-coder/mystamps/commit/ab563b653279625120121babccdfd915181ee46d) |
| 07.02.2020 Workaround | [php-coder/mystamps#1248](https://github.com/php-coder/mystamps/issues/1248): **wiremock** logs warnings for static resources when there is no stub mapping. Workaround: create mappings for such resources. Bug: [tomakehurst/wiremock#1247](https://github.com/tomakehurst/wiremock/issues/1247) Commits: [0018ad4](https://github.com/php-coder/mystamps/commit/0018ad44a21379b8179f94e954795c66b6d50bbc) |
| 24.11.2019 Workaround | [php-coder/mystamps#1156](https://github.com/php-coder/mystamps/issues/1156) After updating **html5validator** to 0.3.2, the `--ignore-re` has stopped to work. Workaround: revert and pin the version to 0.3.1 Bug: [svenkreiss/html5validator#64](https://github.com/svenkreiss/html5validator/issues/64) Commits: [9a0d695](https://github.com/php-coder/mystamps/commit/9a0d695ccac1deeba0c4280779bbac11ebf3ac4d) |
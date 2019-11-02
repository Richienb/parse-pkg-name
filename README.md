# Parse package name [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/parse-pkg-name/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/parse-pkg-name)

Parse a package name, returning the name and org parts.

[![NPM Badge](https://nodei.co/npm/parse-pkg-name.png)](https://npmjs.com/package/parse-pkg-name)

## Install

```sh
npm install parse-pkg-name
```

## Usage

```js
const parsePackageName = require("parse-pkg-name");

parsePackageName("a");
//=> { org: undefined, name: "a" }

parsePackageName("@a/b");
//=> { org: "a", name: "b" }
```

## API

### parsePackageName(name)

#### name

Type: `string`

The package name to parse.

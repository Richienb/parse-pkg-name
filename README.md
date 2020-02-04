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

parsePackageName.from({ org: undefined, name: "a" })
//=> "a"

parsePackageName.from({ org: "a", name: "b" })
//=> "@a/b"
```

## API

### parsePackageName(name)

#### name

Type: `string`

The package name to parse.

### parsePackageName(data)

#### data

Type: `object`

The parsed package data.

## Upgrading from 1.x

- Minimum supported version is now Node.js 10.

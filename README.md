# aul-knex adapter to leverage knex query builder with aul

[![Greenkeeper badge](https://badges.greenkeeper.io/zemd/aul-knex.svg)](https://greenkeeper.io/)

> Adapter to be used with aul executor

[![npm version](https://badge.fury.io/js/aul-knex.svg)](https://www.npmjs.com/package/aul-knex)
[![Code Climate](https://codeclimate.com/github/zemd/aul-knex/badges/gpa.svg)](https://codeclimate.com/github/zemd/aul-knex)
[![dependencies:?](https://img.shields.io/david/zemd/aul-knex.svg)](https://david-dm.org/zemd/aul-knex)
[![devDependencies:?](https://img.shields.io/david/dev/zemd/aul-knex.svg?style=flat)](https://david-dm.org/zemd/aul-knex)

## Installation

```bash
npm install aul-knex --save
```

or

```bash
yarn add aul-knex
```

## Usage

```javascript
const {Criteria, Executor} = require("aul");
const KnexAdapter = require("aul-knex");

const executor = new Executor({
  path: [path.join(__dirname, "./node_modules/aul-knex/filters")]
});

executor.setAdapter(new KnexAdapter({
  client: "pg",
  connection: "postgres://user:password@localhost:5432/database_name",
  searchPath: "public"
}));
```

## License

aul-knex is released under the MIT license.

## Donate

[![](https://img.shields.io/badge/patreon-donate-yellow.svg)](https://www.patreon.com/red_rabbit)
[![](https://img.shields.io/badge/flattr-donate-yellow.svg)](https://flattr.com/profile/red_rabbit)

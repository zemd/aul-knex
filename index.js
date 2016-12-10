"use strict";

const knex = require("knex");

class KnexAdapter {

  constructor(opts = {}) {
    this.opts = opts;
  }

  getProvider(source) {
    return knex(this.opts).from(source);
  }

  execute(builder) {
    return Promise.resolve(builder);
  }

  dispose(builder) {
    builder.destroy();
  }
}

module.exports = KnexAdapter;

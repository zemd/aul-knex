"use strict";

const knex = require("knex");
const logger = require("logtown").getLogger("aul-knex");

class KnexAdapter {

  constructor(opts = {}) {
    this.opts = opts;
  }

  getProvider(source) {
    const knexjs = knex(this.opts);
    const provider = knexjs.from(source);
    provider.raw = knexjs.raw.bind(knexjs);
    return provider;
  }

  execute(builder) {
    logger.debug(`Executing query: ${builder.toString()}`);
    return Promise.resolve(builder);
  }

  dispose(builder) {
    builder.destroy();
  }
}

module.exports = KnexAdapter;

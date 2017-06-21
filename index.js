"use strict";

const knex = require("knex");
const logger = require("logtown").getLogger("aul-knex");

class KnexAdapter {

  constructor(opts = {}) {
    this.opts = opts;
    this.knexjs = knex(this.opts);
  }

  getProvider(source) {
    const provider = this.knexjs.from(source);
    provider.raw = this.knexjs.raw.bind(this.knexjs);
    return provider;
  }

  execute(builder) {
    logger.debug(`Executing query: ${builder.toString()}`);
    return Promise.resolve(builder);
  }

  dispose(builder) {
    return builder.destroy();
  }
}

module.exports = KnexAdapter;

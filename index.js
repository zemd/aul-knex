"use strict";

const knex = require("knex");
const logger = require("logtown").getLogger("aul-knex");

class KnexAdapter {

  constructor(opts = {}) {
    this.opts = opts;
  }

  getProvider(source) {
    return knex(this.opts).from(source);
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

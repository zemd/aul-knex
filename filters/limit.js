"use strict";

module.exports = ({limit = 100, skip = 0}) => {
  return async (knex, next) => {
    knex.limit(limit).offset(skip);
    await next();
  }
};

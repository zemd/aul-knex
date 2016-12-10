"use strict";

// Very basic `where` filter
module.exports = ({column, operator = "=", value}) => {
  if (["=", ">", "<", "<=", ">="].indexOf(operator) === -1) {
    throw new Error(`Unknown operator ${operator}`);
  }
  return async (knex, next) => {
    knex.where(column, operator, value);
    await next();
  };
};

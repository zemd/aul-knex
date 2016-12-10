"use strict";

module.exports = ({active = true}) => {
  return async (knex, next) => {
    knex.andWhere("active", "=", !!active);
    await next();
  };
};

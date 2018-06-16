/**
 * Products.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: "products",
  primaryKey: "product_id",
  attributes: {
    createdAt: false,
    updatedAt: false,
    id: false,
    product_id: {
      type: "number",
      columnName: "product_id",
      autoIncrement: true
    },
    product_name: {
      type: "string",
      columnName: "product_name"
    },
    product_des: {
      type: "string",
      columnName: "product_des"
    },
    product_price: {
      type: "float",
      columnName: "product_price"
    }
  }
};

/**
 * Product_images.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: "product_images",
  primaryKey: "product_img_id",
  attributes: {
    createdAt: false,
    updatedAt: false,
    id: false,
    product_img_id: {
      type: "number",
      columnName: "product_img_id",
      autoIncrement: true
    },
    product_img_name: {
      type: "string",
      columnName: "product_img_name"
    },
    product_id: {
      type: "number",
      columnName: "product_id"
    }
  }
};

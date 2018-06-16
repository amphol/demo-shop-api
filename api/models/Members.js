/**
 * Members.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
var bcrypt = require("bcryptjs");

module.exports = {
  tableName: "members",
  primaryKey: "member_id",
  attributes: {
    createdAt: false,
    updatedAt: false,
    id: false,
    member_id: {
      type: "number",
      columnName: "member_id",
      autoIncrement: true
    },
    member_first_name: {
      type: "string",
      columnName: "member_first_name",
      required: true
    },
    member_last_name: {
      type: "string",
      columnName: "member_last_name",
      required: true
    },
    member_email: {
      type: "string",
      columnName: "member_email",
      required: true,
      unique: true,
      isEmail: true
    },
    member_pwd: {
      type: "string",
      required: true,
      minLength: 5
    }
  },
  toJSON: function() {
    var obj = this.toObject();
    delete obj.member_pwd;
    return obj;
  },
  beforeCreate: function(values, cb) {
    bcrypt.hash(values.member_pwd, 10, function(err, hash) {
      if (err) return cb(err);
      values.member_pwd = hash;
      cb();
    });
  },
  comparePassword: async function(password, user) {
    return new Promise(function(resolve, reject) {
      bcrypt.compare(password, user.member_pwd, function(err, match) {
        if (err) reject(err);

        if (match) {
          resolve(true);
        } else {
          reject(err);
        }
      });
    });
  }
};

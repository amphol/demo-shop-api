/**
 * MemberController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
var JwtService = require("./services/JwtService");

module.exports = {
  register: async function(req, res) {
    var insertData = {
      member_first_name: req.param("member_first_name"),
      member_last_name: req.param("member_last_name"),
      member_email: req.param("member_email"),
      member_pwd: req.param("member_pwd")
    };
    var created = await Members.create(insertData).fetch();
    return res.send(created);
  },
  singin: async function(req, res) {
    var email = req.param("email");
    var pwd = req.param("pwd");

    var member = await Members.findOne({
      member_email: email
    });

    if (member) {
      var comparePwd = await Members.comparePassword(pwd, member);
    }

    if (comparePwd) {
      var user_data = {
        id: member.member_id,
        first_name: member.member_first_name,
        last_name: member.member_last_name,
        email: member.member_email
      };
      var responseData = {
        user: member,
        token: JwtService.issue(user_data)
      };
    }

    return res.send(responseData);
  },
  profile: async function(req, res) {
    return res.send("ok->" + req.user_data.id);
  }
};

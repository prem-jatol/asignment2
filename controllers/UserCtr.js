const User = require("../models/User");

class UserCtr {
  async formFill(data) {
    return new Promise((res, rej) => {
      try {
        
      } catch (error) {
        rej({
          msg: "err comming duering User's form fill",
          status: 0,
        });
      }
    });
  }

}

module.exports = UserCtr;

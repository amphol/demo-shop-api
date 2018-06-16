module.exports = {
  friendlyName: "Upload file",

  description: "",

  inputs: {
    path: {
      type: "string",
      description: "path ที่จะวางไฟล์",
      required: true
    },
    maxsize: {
      type: "number",
      description: "ขนาดไฟล์ที่อัพโหลดได้",
      required: true
    },
    fileNewName: {
      type: "string",
      description: "ชื่อไฟล์ที่ต้องการ",
      required: true
    },
    fileData: {
      type: "ref",
      description: "ไฟล์ที่จะอัพโหลด",
      required: true
    }
  },

  exits: {},

  fn: async function(inputs, exits) {
    // All done.
    return exits.success();
  }
};

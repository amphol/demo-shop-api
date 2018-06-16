/**
 * ProductsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  index: async function(req, res) {
    return res.send(await Products.find());
  },
  viweId: async function(req, res) {
    var product_id = req.param("id");
    return res.send(await Products.find({ product_id: product_id }));
  },
  create: async function(req, res) {
    var insertData = {
      product_name: req.param("product_name"),
      product_price: req.param("product_price")
    };
    var created = await Products.create(insertData).fetch();
    return res.send(created);
  },
  update: async function(req, res) {
    var updateData = {
      product_name: req.param("product_name"),
      product_price: req.param("product_price")
    };
    var updated = await Products.update({ product_id: req.param("product_id") })
      .set(updateData)
      .fetch();
    return res.send(updated);
  },
  delete: async function(req, res) {
    var id = req.param("id");
    var del = await Products.destroy({ product_id: id }).fetch();
    return res.send(del);
  },
  form: function(req, res) {
    res.writeHead(200, { "content-type": "text/html" });
    res.end(
      '<form action="upload" enctype="multipart/form-data" method="post">' +
        '<input type="text" name="title"><br>' +
        '<input type="file" name="avatar"><br>' +
        '<input type="submit" value="Upload">' +
        "</form>"
    );
  },
  upload: async function(req, res) {
    req.file("avatar").upload(
      {
        dirname: require("path").resolve(
          sails.config.appPath,
          "assets/uploads/products"
        ),
        maxBytes: 10000000
      },
      function whenDone(err, uploadedFiles) {
        if (err) {
          return res.serverError(err);
        }

        // If no files were uploaded, respond with an error.
        if (uploadedFiles.length === 0) {
          return res.badRequest("No file was uploaded");
        }

        // Get the base URL for our deployed application from our custom config
        // (e.g. this might be "http://foobar.example.com:1339" or "https://example.com")

        return res.json({
          message: uploadedFiles.length + " file(s) uploaded successfully!"
        });
      }
    );
  }
};

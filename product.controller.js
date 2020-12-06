const Product = require("./product");

class ProductController {
  // declare async methods to use await on Sequelize methods
  // receive request and response objects from router
  async list(req, res) {
    try {
      const products = await Product.findAll();
      res.send(products);
    } catch (e) {
      console.error(e);
      res.status(500).send(e.message);
    }
  }
  async get(req, res) {
    const { id } = req.params;
    try {
      const product = await Product.findOne({ where: { id } });
      if (!product) res.status(404).send({});
      res.send(product);
    } catch (e) {
      console.error(e);
      res.status(500).send(e.message);
    }
  }
  async create(req, res) {
    const { name, price } = req.body;
    try {
      // in javascript if you have key and value with same name you can omit the ": value" declaration and just use the variable as a key
      // instead of doing "{ name: name }" we can just do { name } and that will resolve to "{ name: 'value' }"
      const product = await Product.create({ name, price });
      res.send(product);
    } catch (e) {
      console.error(e);
      res.status(500).send(e.message);
    }
  }
  async update(req, res) {
    const { id } = req.params;
    const { name, price } = req.body;
    try {
      const product = await Product.findOne({ where: { id } });
      product.name = name;
      product.price = price;
      await product.save();

      res.send(product);
    } catch (e) {
      console.error(e);
      res.status(500).send(e.message);
    }
  }
  async delete(req, res) {
    const { id } = req.params;
    try {
      const product = await Product.findOne({ where: { id } });
      await product.destroy();
      res.send({ success: true });
    } catch (e) {
      console.error(e);
      res.status(500).send(e.message);
    }
  }
}

module.exports = new ProductController();

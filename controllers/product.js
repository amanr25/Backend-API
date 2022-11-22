import Employee from "../models/productModel.js";

//
const getProducts = async (req, res) => {
  try {
    let result = await Employee.find();
    res.send(result);
  } catch (error) {
    res.send({ error: error.message });
  }
};

// fetching data by id
const getProductById = async (req, res) => {
  try {
    let _id = req.params._id;
    let result = await Employee.findById({ _id });
    res.send(result);
  } catch (error) {
    res.send({ error: error.message });
  }
};

// Creating new data
const createProduct = async (req, res) => {
  try {
    let data = req.body;
    let result = await Employee.create(data);
    res.send(result);
  } catch (error) {
    res.send({ error: error.message });
  }
};
//  to update data
const updateProduct = async (req, res) => {
  try {
    let { _id } = req.params;
    let data = req.body;
    let result = await Employee.updateOne({ _id }, { $set: data });
    res.send(result);
  } catch (error) {
    res.send({ error: error.message });
  }
};
// to delete data
const deleteProduct = async (req, res) => {
  try {
    let { _id } = req.params;
    let result = await Employee.deleteOne({ _id });
    res.send(result);
  } catch (error) {
    res.send({ error: error.message });
  }
};


export {getProducts,getProductById,createProduct,updateProduct,deleteProduct};
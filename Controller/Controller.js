const User = require('../Model/User');

const { json } = require('express');


exports.signUp = async (req, res) => {
  try {
      const newUser = await User.UserModel.create(req.body);
      res.status(201).json({
        status: 'success',
        data: {
          newUser,
        },
      });
    } 
   catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.errmsg,
    });
  }
}

exports.viewProducts = async (req, res) => {
  try {
    const products = await User.ProductModel.find({});
    if (products.length > 0) {
      res.status(200).json({
        status: 'success',
        results: products.length,
        data: {
          products,
        },
      });
    }
    else {
      res.status(400).json({
        status: 'success',
        data: {
          message: 'No products available in the repo',
        },
      });
    }
  }

   catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.errmsg,
    });
  }
    }

 exports.viewProductById = async (req, res) => {
      try {
        const products = await User.ProductModel.find({_id:req.params.id});
        if (products.length > 0) {
          res.status(200).json({
            status: 'success',
            results: products.length,
            data: {
              products,
            },
          });
        }
        else {
          res.status(400).json({
            status: 'success',
            data: {
              message: 'No products available in the repo',
            },
          });
        }
      }
    
       catch (err) {
        res.status(404).json({
          status: 'fail',
          message: err.errmsg,
        });
      }
        }
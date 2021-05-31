const User = require('../Model/User');

const { json } = require('express');


exports.signUp = async (req, res) => {
  try {
      const newUser = await User.UserModel.create(req.body);
      res.status(201).json({
        status: 'Connection success',
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
        status: 'Connection success',
        results: products.length,
        data: {
          products,
        },
      });
    }
    else {
      res.status(400).json({
        status: 'Connection success',
        data: {
          message: 'No products available',
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
        const products = await User.ProductModel.find({_id :req.params.id});
        if (products.length > 0) {
          res.status(200).json({
            status: 'Connection success',
            results: products.length,
            data: {
              products,
            },
          });
        }
        else {
          res.status(400).json({
            status: 'Connection success',
            data: {
              message: 'No products available with given ID',
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

        //User.find({$or:[{region: "NA"},{sector:"Some Sector"}]}, function(err, user) 

        exports.viewProductByString = async (req, res) => {
          try {
            const products = await User.ProductModel.find({$or:[{name: req.params.search_string},{type:req.params.search_string},{brand:req.params.search_string}]});
            if (products.length > 0) {
              res.status(200).json({
                status: 'Connection success',
                results: products.length,
                data: {
                  products,
                },
              });
            }
            else {
              res.status(400).json({
                status: 'Connection success',
                data: {
                  message: 'No products available with given ID',
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
const mongoose = require('mongoose');

//cmd to start mongodb:  mongod.exe --dbpath c:\data\db
mongoose
  .connect('mongodb://localhost:27017/mCartDB', {

    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('DB connection successful!');
  })
  .catch(error=>{

    console.log(error);
  });

  const User = new mongoose.Schema(

    {
        name :{
            type : String,
            required : [true , 'Name Required']
        },

        userName :{
            type : String,
            unique : true,
            required : [true , 'UserName Required']
        },

        password :{
            type : String,
            required : [true , 'Password Required']
        },

        email:{

            type : String,
            unique : true,
            required : [true , 'Email Required']
        },

        phoneNumber:{

            type : Number,
            unique : true,
          
        },
    },
        {
            timestamps: {
              createdAt: true,
              updatedAt: true,
            },
          }

  );

const UserModel = mongoose.model('user', User);

const Product = new mongoose.Schema({

  _id :{

      type : String,
      required : [true ,['Id Required']],

  },

  name :{

      type : String,
      required : [true ,['name Required']],

  },

  brand :{

      type : String,
      required : [true ,['brand Required']],

  },

  type :{

      type : String,

  },

  description :{

    type : String,

  },

  price :{

      type : Number,
      required : [true ,['Price Required']],

  },

  available :{

      type : Boolean,

  },

  image_name :{

    type : String,

}


},

{
    timestamps: {
      createdAt: true,
      updatedAt: true,
    },
  }

)


const ProductModel = mongoose.model('product', Product);

// const product1 = new ProductModel({

//      id: "ac1", name : "AC3 Phone", brand : "ACME", type : "phone", price : 2001, available : true 
// })


// product1.save();
module.exports = {ProductModel ,UserModel};


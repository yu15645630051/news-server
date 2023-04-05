const ProductModel = require("../../models/ProductModel")

/*
 * @作者: 
 * 胡萝卜会飞
 */
const ProductService = {

    getList:async ({_id})=>{
        return _id?ProductModel.find({_id}):ProductModel.find()
    },    
   
}

module.exports = ProductService
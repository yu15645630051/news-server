const ProductService = require("../../services/web/ProductService")

/*
 * @作者: 
 * 胡萝卜会飞
 */
const ProductController = {

    getList:async (req,res)=>{
        const result =await ProductService.getList({_id:req.params.id})
        res.send({
            ActionType:"OK",
            data:result
        })
    }

}

module.exports = ProductController
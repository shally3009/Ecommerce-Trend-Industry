const {Router} = require('express');
const Productmodel = require('../Model/ProductModel');
const productrouter = Router();
 productrouter.get("/get-product",async (req,res)=>{
    try{
        const productfind=await Productmodel.find();
        const productimages = productfind.map((product)=>{
            return{
                name:product.name,
                description:product.description,
                category:product.category,
                tags:product.tags,
                price:product.price,
                email:product.email,
                stock:product.stock,
                images:product.images,

            }
        });
        res.status(200).json({products:products});
    }
    catch(err){
        console.log(err);
        res.status(500).json({message:"Server error"});
    }
    });

    productrouter.post('/cart',async(req,res)=>{
        const {email,productid,quantity}=req.body;
        try{
            if(!email){
                return res.status(404).json({"fill all inputbox"})
        }
        const findemail=await userModel.findOne({email:email})
        if(!findemail){
            return res.status(440).json({"user does not exist"})
        }
        if((!mongoose.types.ObjectId.isValid(productid))){
            return res.status(400).json({message:"product is not there"})
        }
        if(!quantity&& quantity<=0){
            return res.status(400).json({message:"quantity is not there"})

        
    
        
        
          const findproduct=await productModel.findById(productid)
        if(!findproduct){
            return res.status(404).json({message:"product is not exist"})
        }
        const cartproductid=await userModel.cart

    productrouter.post("/post-product", productupload.array('files'), async (req, res) => {
        const { name, price, description, category, tags, stock, email } = req.body;
        const images = req.files.map(file => file.path);
        try{
            const seller = await Productmodel.findOne({email:email});
            if(!seller){
                return res.status(400).json({message:"Seller not found"});
            }
            if(images.length === 0){
                return res.status(400).json({message:"Please upload atleast one images"});
            }
            await Productmodel.create({
                name: name,
                price:price,
                description: description,
                category: category,
                tags:tags,
                stock: stock,
                email:email,
                images: images,
            });
            res.status(200).json({message:"Product created successfully",product:newProduct});
        }
        catch(err){
            console.log(err);
        }
    })

    module.exports = productrouter;
const {Router}= require("express");
const userModel = require("../Model/userModel");
const { upload } = require("../../multer");

const userrouter = Router();


userrouter.post("/create-user",upload.single("file"), async(req,res)=>{
    const {name, email, password} = req.body;
    const userEmail = await userModel.findOne({email});
    if (userEmail) {
        return next(new ErrorHandler("User already exists", 400));
      }

      const filename = req.file.filename ; 
      const fileUrl = path.join(filename);ua?

      bcrypt.hash(password, 10, async function(err, hash) {
      
      await userModel.create({
        name:name,
        email:email,
        password: hash,
        // avatar: fileUrl,
      })
    })


});

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
        console.log(err)
    }
    })
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
    userRouter.post('/address', async (req, res) => {
        const { address, city, state, zip, country } = req.body;
        try {
            if (!address || !city || !state || !zip || !country) {
                return res.status(400).json({ message: "Fill all fields" });
            }
            const addressDetails = new addressModel({ address, city, state, zip, country });
            await addressDetails.save();
            res.status(200).json({ message: "Address added successfully" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    });

    module.exports =  productrouter;

const {initilizationData}=require("./db/db.connect");
const Product = require("./models/product.models");
const Category =require("./models/category.models")
initilizationData()

const express=require("express");
const app=express()
app.use(express.json());

const cors=require("cors");
const corsOption = {
    origin:"*",
    credentials:true,
    optionSuccessStatus:200
};
app.use(cors(corsOption))

async function getAllProduct(){
    try{
   const getProduct = await Product.find();
   return getProduct;
    }catch(error){
        throw error;
    }
}

app.get("/products",async(req,res)=>{
    try{
   const getAll = await getAllProduct();
   if(getAll){
    res.status(200).json({message:"Get All Product",getAll:getAll})
   }
    }catch(error){
        res.status(500).json({error:"Failed not get product"})
    }
})

async function addProuct(newProduct){
    try{
  const addList = new Product(newProduct);
  const savedProduct = await addList.save();
  return savedProduct;
    }catch(error){
        throw error
    }
}
app.post("/products",async(req,res)=>{
   try{
   const addList = await addProuct(req.body);
   if(addList){
    res.status(200).json({message:"Added Successfully",addList:addList})
   }else{
    res.status(404).json({error:"Product not found"})
   }
   }catch(error){
    res.status(500).json({error:"Failed not get product"})
   }
})

async function getProductById(productId){
    try{
   const getId = await Product.findById(productId);
   return getId;
    }catch(error){
        throw error;
    }
}

app.get("/products/:productId",async(req,res)=>{
    try{
  const getId = await getProductById(req.params.productId);
  if(getId){
    res.status(200).json({message:"Get Product Successfully",getId:getId})
  }else{
       res.status(404).json({error:"Product not found"})
  }
    }catch(error){
        res.status(500).json({error:"Failed not get product"})
    }
})

async function getAllCategory(){
    try{
   const getAll = await Category.find();
   return getAll;
    }catch(error){
        throw error
    }
}
app.get("/categories",async(req,res)=>{
    try{
   const getCategory = await getAllCategory();
   if(getCategory){
    res.status(200).json({message:"Get all Category",getCategory:getCategory})
   }else{
     res.status(404).json({error:"Category not found"})
   }
    }catch(error){
         res.status(500).json({error:"Failed not get category"})
    }
})

async function addCategory(categoryAdd){
    try{
  const addList = new Category(categoryAdd);
  const saved = await addList.save();
  return saved;
    }catch(error){
        throw error
    }
}

app.post("/categories",async(req,res)=>{
    try{
const addList = await addCategory(req.body);
if(addList){
    res.status(200).json({message:"Added successfully",addList:addList})
}else{
     res.status(404).json({error:"Category not found"})
}
    }catch(error){
     res.status(500).json({error:"Failed not get category"})
    }
})

async function categoriesById(categoryId){
    try{
   const getById= await Category.findById(categoryId);
   return getById;
    }catch(error){
        throw error
    }
}

app.get("/categories/:categoryId",async(req,res)=>{
    try{
         const getId=await categoriesById(req.params.categoryId);
         if(getId){
            res.status(200).json({message:"Get by CAtegories"})
         }else{
            res.status(404).json({error:"Category not found"})
         }
    }catch(error){
        res.status(500).json({error:"Failed not get category"})
    }
})

app.get("/",(req,res)=>{
    res.send("Connected Successfully")
})

const PORT=3000
app.listen(PORT,()=>{
    console.log("Server connected in port ",PORT)
})
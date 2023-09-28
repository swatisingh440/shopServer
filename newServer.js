let express=require('express');
let app=express();
app.use(express.json());
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header(
        "Access-Control-Allow-Methods",
        "GET,POST,OPTIONS,PUT,PATCH,DELETE,HEAD"
    );
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type,Accept"
    );
    next();
});
var port=process.env.PORT||2410;
app.listen(port,()=>console.log(`Node app listening on port ${port}!`));
let {data}=require("./newTaskData.js");
app.get("/shop",function(req,res){
    res.send(data.shops)
})
app.post("/shop",function(req,res){
    let body=req.body;
    let maxId=data.shops.reduce((acc,curr)=>{
        if(curr.shopId>acc)return curr.shopId
        else return acc
    },0)
    console.log(maxId)
    let newId=maxId+1;
    let newShop={shopId:newId,name:body.name,rent:body.rent}
    data.shops.push(newShop)
    res.send(newShop)
});
app.get("/products",function(req,res){
    res.send(data.products)
})
app.post("/products",function(req,res){
    let body=req.body;
    let maxId=data.products.reduce((acc,curr)=>{
        if(curr.productId>acc)return curr.productId
        else return acc
    },0)
    console.log(maxId)
    let newId=maxId+1;
    let newprd={productId:newId,productName:body.productName,category:body.category,description:body.description}
    data.shops.push(newprd)
    res.send(newprd)
});
app.put("/products/:productId",function(req,res){
    let id=req.params.productId;
    let body=req.body;
    console.log(id,data.products)
    let ind=data.products.findIndex((pr)=>{
        console.log(pr,id==pr.productId)
        return pr.productId==id});
    console.log(ind,data.products[ind])
  if(ind>=0){
    let upPrd={productId:id,productName:data.products[ind].productName,category:body.category,description:body.description};
    data.products[ind]=upPrd;
    res.send(upPrd)
  }
    else res.send('Data not found')
    

})
app.get("/purchase",function(req,res){
    res.send(data.purchases)
})
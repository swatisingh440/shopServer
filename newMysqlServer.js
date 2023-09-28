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
const {Client}=require("pg");
const client=new Client({
    user:"postgres",
    password:"Codingisnothing@123",
    database:"postgres",
    port:5432,
    host:"db.aedeokxelatbrykkekfn.supabase.co",
    ssl:{rejectUnauthorized:false},
});
client.connect(function(res,error){
    console.log('Connected!||');
});
var port=process.env.PORT||2410;
app.listen(port,()=>console.log(`Node app listening on port ${port}!`));
function resetData(){
    let {data}=require('./newTaskData.js');
        console.log(data)
        let arr=data.shops.map(p=>[p.shopId,p.name,p.rent]);
        console.log(arr)
        let values=[arr]
        let query=`INSERT INTO shop (shopId,name,rent) VALUES($1,$2,$3)`;
        client.query(query,arr[3],function(err,result){
            if(err){console.log(err.message)}
            console.log('complete')}
        )
};
function resetData1(){
    let {data}=require('./newTaskData.js');
       
        let arr=data.products.map(p=>[p.productId,p.productName,p.category,p.description]);
      
        let values=[arr]
        console.log(arr)
        let query=`INSERT INTO products (productId,productName,category,description) VALUES($1,$2,$3,$4)`;
        client.query(query,arr[7],function(err,result){
            if(err){console.log(err.message)}
            console.log('complete')}
        )
};
//resetData();
//resetData1();
app.get("/shop",function(req,res,next){
    const query=`SELECT * FROM shop`;
    client.query(query,function(err,result){
        if(err){res.status(400).send(err);
        }
            console.log(result)
            res.send(result.rows)
        })
})

app.get("/products",function(req,res,next){
    const query=`SELECT * FROM products`;
    client.query(query,function(err,result){
        if(err){res.status(400).send(err);
        }
            res.send(result.rows)
        })
})

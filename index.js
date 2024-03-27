const express=require('express'); 
const app=express();
const bodyParser=require("body-parser");
const cors=require('cors'); 
 const env=require('dotenv'); 
const PORT=process.env.PORT || 8000;
const   adminRouter=require('./Routers/admin/adminRouter') 
app.use(bodyParser.json()); 
app.use(express.json());
app.use(cors()
        ) ;
  env.config()
require('./config/db'); 
app.get("/",(req,res)=>{
  res.send("Server is runnig....")
})
app.use("/api",adminRouter);  

app.use("/api/img", express.static("./public/upload")); 

app.listen(PORT, () => {
    console.log("Hi Amit server is running at PORT : " + PORT)
})








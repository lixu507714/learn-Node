const express = require('express');
const router = express.Router();
var app = express();
// router.use((req,res,next)=>{
//     next()
// })
router.get('/class',(req,res)=>{
   console.log(123)
   let result = {
       err:0,
       msg:'ok',
       data:{
        name:'李旭',
        age:23,
        birthday:'1991-1-02'
       }
   }
   res.send(result);
})

router.post('/',(req,res)=>{
    res.send(req.body)
})
module.exports=router;
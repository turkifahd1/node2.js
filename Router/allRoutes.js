const express = require('express')
const router = express()
const User=require("../Model/CustomerrShema")//استخدام الموديل
var moment = require('moment');//حق الوقت
const allControler = require("../Controler/allControler")

//Get request
// هنا هاذي المسارات اذا دخلت المسار ذا اعرض لي الصفحه ذي
router.get('/', allControler.user_index_get)


router.get('/add/add.html',  allControler.user_add_get)
    
router.get('/edit/:id',  allControler.user_edit_get)

    router.get('/user/:id', allControler.user_view_get)
     
    
    
    //Post request
    router.post('/user/add.html', allControler.user_post)
    
    
    
    //Post request search
    router.post('/search',allControler.user_search_post)
    
    
    
    
    //Delet request
    router.delete('/edit/:id',allControler.user_Delete)
    
    
     //Put request
    router.put('/edit/:id', allControler.user_put)
    

     module.exports=router
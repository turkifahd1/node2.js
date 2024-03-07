const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');
app.use(express.urlencoded({extended:true}))
app.set('view engine','ejs')//استخدام ejs
app.use(express.static('public'))
var methodOverride = require('method-override')//  حق الحذف والتعديل
app.use(methodOverride('_method'))//حق الحذف والتعديل
const router = require('./Router/allRoutes')// حق من شان الاستخدام router
app.use(router)// حق من شان الاستخدام router




 


mongoose.connect('mongodb+srv://turki:ePtWHLTVGCQfPrAE@cluster0.uircrpz.mongodb.net/all-data?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    app.listen(port, () => {
      console.log(`http://localhost:${port}/`)
    })

  })
  .catch((err) => {
    console.log(err)
  });


















  
///////////////////////////////////////////////////////////////
  // app.post('/', (req, res) => {
  //  console.log(req.body)
   
  //  const Mydatadata= new Mydata(req.body)
   
  //  Mydatadata.save()
  //  .then(() => {
    
  //  res.redirect("/index.html")/// هاذي بعد ماينفذ لك الطلب ينقلك للصفحه ذي
   
  //  })
  // .catch((err) => {
  //      console.log(err)
  // })

  // })
//////////////////////////////////////////////////////////////////////////////



// const express =require("express")
// const app =express()
// const mongoose=require("mongoose")
// app.use(express.urlencoded({extended:true}))
// const mydatass =require("./Model/mydataSchema")
// app.set("view engine","ejs")


// app.get(("/") , (req,res) => {
//   mydatass.find()
//   .then((resert) => {res.render('home',{arr:resert})})
//   .catch((err)=>{console.log(err)})
  

// })


// app.get(("/kk") ,async (req,res) => {
//   await res.send("تم توصيل بلنجاح")

// })

// mongoose.connect('mongodb+srv://turki:ePtWHLTVGCQfPrAE@cluster0.uircrpz.mongodb.net/all-datass?retryWrites=true&w=majority&appName=Cluster0')
// .then(()=>{
//   app.listen((3000),() => {
//     console.log("fff")
  
//   })
// })
// .catch((err)=> {
//   console.log(err)
// })
// app.post('/',  (req, res) => {
//   console.log(req.body)
//   const ss=new mydatass(req.body)
//   ss.save()
//   .then(() => {
//     res.redirect('/kk')
//   })
//   .catch((err) => {
//      console.log(err)
//   })
  
// })



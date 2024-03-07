const User = require("../Model/CustomerrShema")//استخدام الموديل
var moment = require('moment');//حق الوقت


const user_index_get = (req, res) => {

    User.find()
        .then((resart) => { res.render("index", { arr: resart, moment: moment }) })
        .catch((err) => { console.log(err) })

}


const user_add_get = (req, res) => {

    res.render("user/add")
}

const user_edit_get = (req, res) => {

    User.findById(req.params.id)
        .then((result) => { res.render("user/edit", { obj: result, moment: moment }) })
        .catch((err) => { console.log(err) })

}

const user_view_get = (req, res) => {

    User.findById(req.params.id)
        .then((result) => { res.render("user/view", { obj: result, moment: moment }) })
        .catch((err) => { console.log(err) })

}


const user_post = (req, res) => {

    const users = new User(req.body)

    users.save()
        .then(() => { res.redirect("/") })
        .catch((err) => { console.log(err) })


}


const user_search_post = (req, res) => {

    const searchText = req.body.searchText.trim()//trim()هذ عشان يحذف لك الفراغات الي في الاخير وفي اول الكللمه من شان متأثر قيها يستخدم مع النصوص فقط
    User.find({ $or: [{ Frstname: searchText },{ Lastname: searchText }] })
        .then((result) => { res.render('user/search', { arr: result }) })
        .catch((err) => { console.log(err) })

}

const user_Delete = (req, res) => {

    User.findByIdAndDelete(req.params.id, console.log(req.body))
        .then(() => { res.redirect('/') })
        .catch((err) => { console.log(err) })

}

const user_put = (req, res) => {

    User.findByIdAndUpdate(req.params.id, req.body)
        .then(() => { res.redirect('/') })
        .catch((err) => { console.log(err) })

}




module.exports = {
    user_index_get,
    user_add_get,
    user_edit_get,
    user_view_get,
    user_post,
    user_search_post,
    user_Delete,
    user_put
}
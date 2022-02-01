//express, cookie-parser
const express = require("express")
const cookierParser = require("cookie-parser")
const res = require("express/lib/response")
var port = process.env.PORT|| 3999

//creting server
var app = express()

//mounting
app.use(cookierParser())

//simple cookie
var students = { "student" : [
    {"name" : "Samanth", "age" : 24, "gender" :"male"},
    {"name" : "Sarath", "age" : 24, "gender" :"male"},
    {"name" : "Yasodha", "age" : 20, "gender" :"female"},
    {"name" : "Sailesh", "age" : 19, "gender" :"male"},
    
]}

var staff = {"staff":[
    {"name" : "Staff A", "Subject" :"CT"},
    {"name" : "Sarath B", "Subject" : "SS"},
]}

//multiple information
var subjects = { "subjects" : [
    {"name" : "CT", "MaxMarks" : 100},
    {"name" : "SS", "MaxMarks" : 100},
   

]}

var Exam = "Mid Sem Exam"



//route
app.get("/", function(req, res){
    res.send("<b> Welcome to cookie management </b>")
})

app.get("/add", function(req, res){
    //we are going to cookie to the browser
    res.cookie("students", students) //cookieName, cookieValue
    res.cookie("staff", staff) //cookieName, cookieValue
    res.cookie("subjects", subjects) //cookieName, cookieValue
    res.cookie("Exam", Exam) //cookieName, cookieValue
    //res.cookie("odiTeam", players, {expire : 5000 + Date.now()}) //cookieName, cookieValue
    res.send("Cookie created")
})

// app.get("/get", function(req, res){
//     //reading the cookies information from the browser
//     res.send(req.cookies["odiTeam"])

// })

//seeing all cookies in browser
app.get("/viewall", function(req,res){
    res.send(req.cookies)
})

//displaying one particular cookie
app.get("/view/:name", function(req, res){ 
    var name = req.params.name   
    res.send(req.cookies[name])
})

//deleteing cookie based on name
app.get("/delete/:name", function(req,res){
    var name=req.params.name
    res.clearCookie(name)
    res.send("<b>Cookie By Name Cleared !</b>")
})

//delete the cookies from browser
app.get("/deleteall", function(req, res){
    
    res.clearCookie("students")
    res.clearCookie("staff")
    res.clearCookie("subjects")
    res.clearCookie("Exam")
    res.send("<b>All Cookies Deleted !  </b>")
})

app.listen(port, function(err){
    if(err)
    {
        res.send("Err in starting the server")
        return
    }
    res.send("server started at port : ", port)
})
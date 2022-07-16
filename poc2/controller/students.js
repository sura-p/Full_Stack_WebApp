const express = require('express');
const Coll = require('../model/model.js');
const path = require('path');
const validate = require('../routes/routes.js')
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');



const result = (req,res ,next)=>{
    const result = validationResult(req);
    const hasError = !result.isEmpty();

    if(hasError){
        const error = result.array()[0].msg;
        res.status(400).json({Sucess:"failed" ,message:error});
    }
   next();
}

const result2 = (req,res ,next)=>{
    const result = validationResult(req);
    const hasError = !result.isEmpty();

    if(hasError){
        const error = result.array()[0].msg;
        res.status(400).json({Sucess:"failed" ,message:error});
    }
   next();
}




const studentres = async (req, res) => {


    

    
    // const data = {
    //     first_name: req.body.first_name,
    //     last_name: req.body.last_name,
    //     email: req.body.email,
    //     mobile_number: req.body.mobile_number,
    //     password: req.body.password,
    // }
    console.log(req.body);
    


     const new_studet = new Coll(req.body);
    
    // new_studet.password = bcrypt.hashSync(req.body.password, 10);
    await new_studet.save();
    res.status(200).send("200");

    

}



const handel_get = async (req, res) => {
    res.sendFile(path.join(__dirname, '../static_files/html/homepage.html'));

}
const login = async (req, res) => {

        const email = req.body.email;
        const password = req.body.password;

      const check =  await  Coll.findOne({email:email,password:password});
      console.log(check);
       
        if(check)
            res.status(200).send(`<h1 style="color: green;">login sucessfull</h1>`);
        else
        {
            res.status(400).send(`<h1 style="color: red;">credential not matched</h1>`)
        }

    

}




module.exports = { studentres, handel_get,login ,result  ,result2};


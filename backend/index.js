// eslint-disable-next-line no-undef
import express from "express";
import {createTodo} from "./types.js"
import {updateTodo} from "./types.js"
import {todo} from "./db";
const app=express();
//body{ title:string description:string}

app.use(express.json());
// eslint-disable-next-line no-unused-vars
app.post("/todo",async function(req,res) {
const createPayload=req.body;
const parsedPayload=createTodo.safeParse(createPayload)
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"you sent the wrong inputs"
        })
        return;
    }
    await todo.create({
        title:createPayload.title,
        description:createPayload.description,
        completed:false

    })

})
// eslint-disable-next-line no-unused-vars
app.get("/todos",async function(req,res){
    const todos=await todo.find({});
    res.status(200).json(todos);
})
app.put("/completed",async function(req,res){
    const updatePayload=req.body;
    const parsedPayload=updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"wrong inputs"
        })
    }
    await todo.updateOne({
        _id:req.body.id
    },{
        completed:true

    })
    res.json({
        msg:"Todo marked as completed"
    })


})
app.listen(3000);

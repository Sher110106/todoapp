const mongoose=require("mongoose")
mongoose.connect("your-url")
const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})
const todo=mongoose.model("todos",todoSchema)
// eslint-disable-next-line no-undef
module.exports={
    todo
}


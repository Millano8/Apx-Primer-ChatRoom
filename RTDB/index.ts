import { firestore, rtdb } from "./db";
const express = require('express')
const bodyParser = require('body-parser')
import {v4 as uuidv4} from "uuid"
import * as cors from "cors"

const app = express()
app.use(bodyParser.json())
app.use(cors())
const port = 3000


app.post("/messages",function(req,res){
    const chatRoomRef = rtdb.ref("/chatrooms/general/messages")
    chatRoomRef.push(req.body,function(err){
        console.log(err)
        res.json("todo ok")
    })
})



app.listen(port,()=>{
    console.log(`example app listening at  http://localhost:${port}`)
})



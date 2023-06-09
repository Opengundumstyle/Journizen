import express from 'express'
import * as dotenv from 'dotenv' 
import cors from 'cors'
import connectDB from './mongodb/connect.js'
import postRoutes from './routes/postRoutes.js'
import journizenRoutes from './routes/journizenRoutes.js'

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json({limit:'100mb'}))

app.use('/api/v1/post',postRoutes)
app.use('/api/v1/journizen',journizenRoutes)

app.get('/',async(req,res)=>{
     res.send("Hello from journizen")
})

const startserver = async()=>{

    try{ 
       connectDB(process.env.MONGODB_URL)
       app.listen(8080,()=>{
       console.log('Server has started on port https://journizen.onrender.com')
    })
    }catch(error){
          console.log(error) 
    }

   
}

startserver()
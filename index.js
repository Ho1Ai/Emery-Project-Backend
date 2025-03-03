import express from 'express';
//import MAININNERSERVERMODULES__PasswordCompressorFunction from './innerJS/PasswordCompressor.js'
//import {DBKey} from './innerJS/keys.js'
import userRouter from './routes/user.routes.js';
import postRouter from './routes/post.routes.js';
import commentRouter from './routes/comments.router.js';
import cors from 'cors';

const port_val = 5298;

const app = express();

app.use(express.json())
app.use(cors())

app.use('/api', userRouter)
app.use('/api', postRouter)
app.use('/api', commentRouter)

async function startServer() {
    try {
        // await mongoose.connect(DBKey, {})
        app.listen(port_val, () => {
            console.log(`Server has been started on port ${port_val}...`);
        })
    } catch (e) {
        console.log(e);
    }
    
}

startServer()












// app.get('/login', (req,res)=>{
//     //const {name, username, password}=req.query
//     //const udata = UserData.create({})

//     try{
//         console.log(req.query) // в req содержится объект query, который и содержит в себе запрос
//     } catch (e) {
//         console.log(e)
//     }
//     //res.sendFile(path.resolve(__dirname, 'index.html'))
//     //console.log(req.query);
//     res.status(200).json(`Express JS backend server has been started ${req.query}`)
// });

// app.post('/login', async(req,res) => {
//     console.log(req.body)
//     const {name, username, password} = req.body
//     console.log(name, username, password)
//     const udata = await UserData.create({name, username, password})

//     res.status(200).json(`data posted`)
// })

// app.get('/', (req,res) => {
//     console.log(MAININNERSERVERMODULES__PasswordCompressorFunction(req.query.password));
//     console.log(req.query);
//     let thaum = req.query;
//     res.status(200).json(`Base output. Express JS backend server has been started. Message is: ${req.query.modpack}`)
// })

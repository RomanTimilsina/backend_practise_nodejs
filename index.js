import  express  from "express"
import  cors  from "cors"
import  cookieParser  from "cookie-parser"

const app = express()

import userRoutes from './routes/users.js'
import authRoutes from './routes/auth.js'
import likeRoutes from './routes/likes.js'
import commentRoutes from './routes/comments.js'
import postRoutes from './routes/posts.js'


app.use(express.json())
app.use(cors())
app.use(cookieParser())



app.use('/api/users', userRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/comments', likeRoutes)
app.use('/api/likes', commentRoutes)
app.use('/api/posts', postRoutes)


app.listen(8800, () => {
  console.log("API working!")
})
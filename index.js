import  express  from "express"
import  cors  from "cors"
import  multer  from "multer"

import  cookieParser  from "cookie-parser"

const app = express()

import userRoutes from './routes/users.js'
import authRoutes from './routes/auth.js'
import likeRoutes from './routes/likes.js'
import commentRoutes from './routes/comments.js'
import postRoutes from './routes/posts.js'

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true)
  next()
})
app.use(express.json())
app.use(
  cors({
    origin:"http://localhost:3000"
  })
);
app.use(cookieParser())

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/public/upload");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/api/upload", upload.single("file"), (req, res) => {
  const file = req.file;
  res.status(200).json(file.filename );
});


app.use('/api/users', userRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/comments', likeRoutes)
app.use('/api/likes', commentRoutes)
app.use('/api/posts', postRoutes)


app.listen(8800, () => {
  console.log("API working!")
})




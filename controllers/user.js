import moment from "moment/moment.js";
import { db } from "../connect.js"
import jwt from 'jsonwebtoken'

export const getUser = (req, res) => {
  const userId = req.params.userId;
  const q = 'SELECT * FROM users WHERE id = ?'

  db.query(q, [userId], (err,data) => {
    if (err) return res.json(err)
    const {password, ...info} = data[0]
    return res.json(info)
  })
}

export const updateUser = (req, res) => {
  const token = req.cookies.accessToken;

  if(!token) return res.status(401).json("Not logged in!")

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if(err) return res.status(401).json("Token is not valid!")

    const q = 'UPDATE users SET `name`=?, `city`=?,`website`=?, `profilePic`=?, `coverPic`=? WHERE id=? ' 

    const values = [req.body.name, req.body.city, req.body.website, req.body.profilePic, req.body.coverPic, userInfo.id ]
  db.query(q, values,(err, data) => {
    if (err) return res.status(500).json(err)
    console.log(data)
    if(data.affectedRows > 0) return res.status('Updated')
    return res.status(200).json('You can update only your own acc')
  })
  })
}
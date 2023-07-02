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
import userModel from "../model/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export function signup(req, res) {
  const { fullName, email, password } = req.body;
  userModel.findOne({ email }).then((data) => {
    if (data) {
      return res.status(403).json({ message: "email already registered" });
    } else {
      const newUser = new userModel({
        fullName,
        email,
        password: bcrypt.hashSync(password, 10),
      });
      newUser
        .save()
        .then((data) => {
          return res.status(200).json({ message: data });
        })
        .catch((error) => {
          return res.status(500).json({ message: error.message });
        });
    }
  });
}
export function login(req, res) {
  const { email, password } = req.body;
  userModel
    .findOne({ email })
    .then((data) => {
      if (!data) {
        return res.status(404).json({ message: "email is not registerd" });
      }
      let validPassword = bcrypt.compareSync(password, data.password);
      if (!validPassword) {
        return res.status(404).json({ message: "password is not valid" });
      }
      const token = jwt.sign({ id: data._id }, "secretKey", {
        expiresIn: "30m",
      });
      res.send({
        user: {
          email: data.email,
          fullName: data.fullName,
        },
        accessToken: token,
      });
    })
    .catch((error) => {
      return res.status(500).json({ message: error.message });
    });
}

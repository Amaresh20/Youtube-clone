import jwt from "jsonwebtoken";
import userModel from "../model/user.model.js";
export function verifyToken(req, res, next) {
  if (
    req.headers &&
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "JWT"
  ) {
    console.log(" req.headers.authorization ", req.headers.authorization);
    jwt.verify(
      req.headers.authorization.split(" ")[1],
      "secretKey",
      function (err, verifiedToken) {
        if (err) {
          console.log("error", err);
          return res.status(403).json({ message: "Invalid jwt token" });
        }
        userModel.findById(verifiedToken.id).then((user) => {
          req.user = user;
          next();
        });
      }
    );
  } else {
    return res.status(404).json({ message: "token is not present" });
  }
}

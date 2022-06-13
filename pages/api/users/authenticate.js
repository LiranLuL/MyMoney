const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
import getConfig from "next/config";
import { apiHandler } from "helpers/api";
const { connectToDatabase } = require("/lib/mongodb");

const { serverRuntimeConfig } = getConfig();

export default apiHandler({
  post: authenticate,
});

async function authenticate(req, res) {
  try {
    const { username, password } = req.body;
    let { db } = await connectToDatabase();
    const user = await db.collection("user").find({ username: username }).toArray();

    // validate
    if (!(user[0] && bcrypt.compareSync(password, user[0].hash))) {
      throw "Username or password is incorrect";
    }

    // create a jwt token that is valid for 1 day
    const token = jwt.sign({ sub: user[0].id }, serverRuntimeConfig.secret, { expiresIn: "1d" });

    // return basic user details and token
    return res.status(200).json({
      id: user[0].id,
      username: user[0].username,
      firstName: user[0].firstName,
      lastName: user[0].lastName,
      token,
    });
  } catch (e) {
    throw e;
  }
}

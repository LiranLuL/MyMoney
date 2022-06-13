import { apiHandler } from "helpers/api";
const { connectToDatabase } = require("/lib/mongodb");

export default apiHandler({
  post: getUserCategories,
  put: putUserCategory,
});

async function getUserCategories(req, res) {
  try {
    const { username } = req.body;
    let { db } = await connectToDatabase();
    const user = await db.collection("user").find({ username: username }).toArray();
    // validate
    if (!user[0]) {
      throw "Bad username";
    }

    // return basic user details and token
    return res.status(200).json({
      categories: user[0].categories,
    });
  } catch (e) {
    throw e;
  }
}

async function putUserCategory(req, res) {
  try {
    const { username, amount, categorie } = req.body;
    let { db } = await connectToDatabase();
    const user = (await db.collection("user").find({ username: username }).toArray())[0];
    // validate
    if (!user) {
      throw "Bad username";
    }
    user.categories = user.categories.filter((entry) => entry.name !== categorie);
    user.categories.push({ name: categorie, amount: Number(amount) });
    console.log(user);
    const updatedUser = await db.collection("user").updateOne(
      {
        username: username,
      },
      { $set: user }
    );
    return res.status(200).json({
      updatedUser: updatedUser,
    });
  } catch (e) {
    throw e;
  }
}

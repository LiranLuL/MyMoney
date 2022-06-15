import { apiHandler } from "helpers/api";
const { connectToDatabase } = require("/lib/mongodb");

export default apiHandler({
  post: getUserCategories,
  put: putUserCategory,
});

function makeUnique(array) {
  const result = {};
  array.forEach((elem) => {
    if (!(elem.categorie in result)) {
      result[elem.categorie] = elem.amount;
    } else {
      result[elem.categorie] += elem.amount;
    }
  });

  const arrayResult = Object.keys(result).map((elem) => {
    return { name: elem, amount: result[elem] };
  });
  return arrayResult;
}

async function getUserCategories(req, res) {
  try {
    var { db } = await connectToDatabase();

    const { username } = req.body;
    const user = (await db.collection("user").find({ username: username }).toArray())[0];
    // validate
    if (!user) {
      throw "Bad username";
    }
    const categories = [user.categories, makeUnique(user.expenses)];
    // return basic user details and token
    return res.status(200).json({
      categories,
    });
  } catch (e) {
    throw e;
  }
}

async function putUserCategory(req, res) {
  try {
    var { db } = await connectToDatabase();

    const { username, amount, categorie, comment, date } = req.body;
    const user = (await db.collection("user").find({ username: username }).toArray())[0];
    // validate
    if (!user) {
      throw "Bad username";
    }

    if (!user.expenses) {
      user.expenses = [];
    }
    user.expenses.push({ amount, categorie, comment, date });

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

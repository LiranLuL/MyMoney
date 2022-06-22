import { apiHandler } from "helpers/api";
const { connectToDatabase } = require("/lib/mongodb");

export default apiHandler({
  post: addBalance,
  put: getBalance,
});

async function getBalance(req, res) {
  try {
    var { db } = await connectToDatabase();

    const { username } = req.body;
    const user = (await db.collection("user").find({ username: username }).toArray())[0];
    // validate
    if (!user) {
      throw "Bad username";
    }
    let balance = 0;
    if (!user.balanceHistory) {
      return res.status(200).json({
        balance,
      });
    }
    user.balanceHistory?.forEach((element) => {
      balance += element.amount;
    });

    user.expenses?.forEach((element) => {
      balance -= element.amount;
    });

    return res.status(200).json({
      balance,
    });
  } catch (e) {
    throw e;
  }
}
async function addBalance(req, res) {
  try {
    var { db } = await connectToDatabase();

    const { source, amount, username } = req.body;

    const user = (await db.collection("user").find({ username: username }).toArray())[0];
    // validate
    if (!user) {
      throw "Bad username";
    }

    if (!user.balanceHistory) {
      user.balanceHistory = [];
    }
    user.balanceHistory.push({ source, amount: Number(amount) });

    await db.collection("user").updateOne(
      {
        username: username,
      },
      { $set: user }
    );
    return res.status(200).json({});
  } catch (e) {
    throw e;
  }
}

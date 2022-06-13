const bcrypt = require("bcryptjs");
const { connectToDatabase } = require("/lib/mongodb");

export default async function handler(req, res) {
  // switch the methods
  switch (req.method) {
    case "POST": {
      return register(req, res);
    }
  }
}

const startedCategories = [
  { name: "Family", amount: 0 },
  { name: "Workout", amount: 0 },
  { name: "Transport", amount: 0 },
  { name: "Products", amount: 0 },
  { name: "Gifts", amount: 0 },
  { name: "Education", amount: 0 },
  { name: "Cale", amount: 0 },
  { name: "Health", amount: 0 },
];

async function register(req, res) {
  try {
    let { db } = await connectToDatabase();

    // split out password from user details
    const { password, ...user } = req.body;

    let DBUsers = await db.collection("user").find({}).toArray();

    // validate
    if (DBUsers.find((DBUser) => DBUser.username === user.username)) throw `User with the username "${user.username}" already exists`;

    // hash password
    user.hash = bcrypt.hashSync(password, 10);
    user.id = DBUsers.length ? Math.max(...DBUsers.map((x) => x.id)) + 1 : 1;

    // set date created and updated
    user.dateCreated = new Date();
    user.dateUpdated = new Date();
    user.balance = 0;
    user.categories = startedCategories;
    
    await db.collection("user").insertOne(user);
    return res.json({
      message: "User added successfully",
      success: true,
    });
  } catch (error) {
    return res.json({
      message: new Error(error).message,
      success: false,
    });
  }
}

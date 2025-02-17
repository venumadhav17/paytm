const express = require("express");
const { User, Account } = require("../db");
const zod = require("zod");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const router = express.Router();
const { authMiddleware } = require("../middleware");

const signUpBody = zod.object({
  username: zod.string().email(),
  firstName: zod.string(),
  lastName: zod.string(),
  password: zod.string()
});

router.post("/signup", async (req, res) => {
  const body = req.body;
  //console.log(body);
  const { success } = signUpBody.safeParse(req.body);
  if (!success) {
    return res.status(411).json({
      message: "Email already taken / Incorrect inputs"
    }); // Added Return to stop execution for multiple api calls
  }

  const existingUser = await User.findOne({ username: req.body.username });

  if (existingUser) {
    return res.status(411).json({
      message: "Email already taken / Incorrect inputs"
    });
  }

  const user = await User.create(req.body);
  //console.log(req.body);

  const userId = user._id;

  // ------ Create new Account ------ //

  await Account.create({
    userId,
    balance: 1 + Math.random() * 10000
  });

  const token = jwt.sign(
    {
      userId
    },
    JWT_SECRET
  );

  res.json({
    message: "User created successfully",
    token: token
  });
});

const signinBody = zod.object({
  username: zod.string().email(),
  password: zod.string()
});

router.post("/signin", async (req, res) => {
  const { success } = signinBody.safeParse(req.body);
  if (!success) {
    return res.status(411).json({
      message: "Incorrect inputs"
    });
  }

  const user = await User.findOne({
    username: req.body.username,
    password: req.body.password
  });

  const userId = user.id;

  if (user) {
    const token = jwt.sign(
      {
        userId
      },
      JWT_SECRET
    );
    return res.json({
      token: token
    });
  }

  res.status(411).json({
    message: "Error while logging inputs"
  });
});

const updateBody = zod.object({
  password: zod.string().optional(),
  firstName: zod.string().optional(),
  lastName: zod.string().optional()
});

router.put("/", authMiddleware, async (req, res) => {
  const { success } = updateBody.safeParse(req.body);
  if (!success) {
    return res.status(411).json({
      message: "Error while updating information"
    });
  }

  await User.updateOne({ _id: req.userId }, req.body);

  res.json({
    message: "Updated successfully"
  });
});

router.get("/bulk", authMiddleware, async (req, res) => {
  const filter = req.query.filter || "";
  const users = await User.find({
    $or: [
      { firstName: { $regex: filter, $options: "i" } },
      { lastName: { $regex: filter, $options: "i" } },
      { username: { $regex: filter, $options: "i" } }
    ]
  });

  res.json({
    user: users.map((user) => ({
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      _id: user._id
    }))
  });
});

module.exports = router;

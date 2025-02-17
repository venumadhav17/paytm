const express = require("express");
const { authMiddleware } = require("../middleware");
const { Account } = require("../db");
const zod = require("zod");
const { default: mongoose } = require("mongoose");

const router = express.Router();

router.get("/balance", authMiddleware, async (req, res) => {
  const account = await Account.findOne({
    userId: req.userId
  });

  res.json({
    balance: account.balance
  });
});

const transferBody = zod.object({
  to: zod.string(),
  amount: zod.number()
});

router.post("/transfer", authMiddleware, async (req, res) => {
  const { success } = transferBody.safeParse(req.body);
  if (!success) {
    return res.status(400).json({ message: "Invalid account" });
  }

  const session = await mongoose.startSession();

  session.startTransaction();
  const { amount, to } = req.body;

  // Fetch the accounts within the transaction
  const account = await Account.findOne({
    userId: req.userId
  }).session(session);

  if (!account || account.balance < amount) {
    await session.abortTransaction();
    return res.status(400).json({
      message: "Insufficient Balance"
    });
  }

  const toAccount = await Account.findOne({
    userId: to
  }).session(session);

  if (!toAccount) {
    await session.abortTransaction();
    return res.status(400).json({
      message: "Invalid account"
    });
  }

  // Perform transfer
  await Account.updateOne(
    { userId: req.userId },
    { $inc: { balance: -amount } }
  ).session(session);
  await Account.updateOne(
    { userId: to },
    { $inc: { balance: amount } }
  ).session(session);

  //commit the transaction
  await session.commitTransaction();
  res.json({
    message: "Transfer successful"
  });
});

/*const { amount, to } = req.body;

  const account = await Account.findOne({
    userId: req.userId
  });

  if (account.balance < amount) {
    return res.status(400).json({ message: "Insufficient balance" });
  }

  const toAccount = await Account.findOne({
    userId: to
  });

  if (!toAccount) {
    return res.status(400).json({ message: "Invalid Account" });
  }

  await Account.updateOne(
    {
      userId: req.userId
    },
    {
      $inc: {
        balance: -amount
      }
    }
  );

  await Account.updateOne(
    {
      userId: to
    },
    {
      $inc: {
        balance: amount
      }
    }
  );

  res.json({
    message: "Transfer successfull"
  });
});*/

/*const transferFunds = async (fromAccountId, toAccountId, amount) => {
    await Account.findByIdAndUpdate(fromAccountId, {
      $inc: { balance: -amount }
    });

    await Account.findByIdAndUpdate(toAccountId, { $inc: { balance: amount } });

    transferFunds("fromAccountId", "toAccountId", 100);
  };
});*/

/*transfer({
  userId: "65ac44e10ab2ec750ca666a5",
  body: {
      to: "65ac44e40ab2ec750ca666aa",
      amount: 100
  }
})

transfer({
  userId: "65ac44e10ab2ec750ca666a5",
  body: {
      to: "65ac44e40ab2ec750ca666aa",
      amount: 100
  }
})*/
module.exports = router;

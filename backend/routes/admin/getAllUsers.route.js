const express = require("express");
const getAllUsers = express();
const User = require("../../db/User");
const jwt = require("jsonwebtoken");
const jwtSecret = "secretkey";

getAllUsers.get("/users", async (req, resp) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return resp.status(401).send({ message: "No token provided" });
    }
    const decodedToken = jwt.verify(token, jwtSecret);
    const userId = decodedToken.user._id;
    const user = await User.findById(userId);
    if (!user || user.role !== "admin") {
      return resp.status(403).send({ message: "Unauthorized" });
    }
    const users = await User.find();

    // Add registrationStep to each user object
    const usersWithRegistrationStep = users.map((user) => {
      let registrationStep;
      if (!user.verifiedAccount) {
        registrationStep = 1;
      } else if (user.verifiedAccount && !user.billStatus) {
        registrationStep = 2;
      } else if (user.verifiedAccount && user.billStatus) {
        registrationStep = 3;
      }

      return {
        ...user.toObject(),
        registrationStep,
      };
    });

    return resp.send({ users: usersWithRegistrationStep });
  } catch (error) {
    console.error("Error retrieving users:", error);
    return resp.status(500).send({ message: "Internal server error" });
  }
});

getAllUsers.get("/userStats", async (req, resp) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return resp.status(401).send({ message: "No token provided" });
    }
    const decodedToken = jwt.verify(token, jwtSecret);
    const userId = decodedToken.user._id;
    const user = await User.findById(userId);
    if (!user || user.role !== "admin") {
      return resp.status(403).send({ message: "Unauthorized" });
    }

    const totalUsers = await User.countDocuments({ role: "user" });
    const paidUsers = await User.countDocuments({
      role: "user",
      billStatus: true,
    });
    const totalBikes = await User.aggregate([
      { $match: { role: "user" } },
      { $group: { _id: null, totalBikes: { $sum: "$numberOfMotorBikes" } } },
    ]);
    const totalAmount = await User.aggregate([
      { $match: { role: "user" } },
      { $group: { _id: null, totalAmount: { $sum: "$totalAmount" } } },
    ]);

    return resp.send({
      totalUsers,
      paidUsers,
      totalBikes: totalBikes.length > 0 ? totalBikes[0].totalBikes : 0,
      totalAmount: totalAmount.length > 0 ? totalAmount[0].totalAmount : 0,
    });
  } catch (error) {
    console.error("Error retrieving user stats:", error);
    return resp.status(500).send({ message: "Internal server error" });
  }
});

getAllUsers.delete("/users/:userId", async (req, resp) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return resp.status(401).send({ message: "No token provided" });
    }
    const decodedToken = jwt.verify(token, jwtSecret);
    const adminUserId = decodedToken.user._id;
    const adminUser = await User.findById(adminUserId);
    if (!adminUser || adminUser.role !== "admin") {
      return resp.status(403).send({ message: "Unauthorized" });
    }

    const userId = req.params.userId;
    const deletedUser = await User.findByIdAndDelete(userId);

    if (!deletedUser) {
      return resp.status(404).send({ message: "User not found" });
    }

    return resp.send({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    return resp.status(500).send({ message: "Internal server error" });
  }
});

module.exports = { getAllUsers };

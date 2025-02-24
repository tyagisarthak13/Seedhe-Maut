import express, { application } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../models/user.js";


// Signup Route
export const signup = async (req, res) => {
  try {
    console.log(req.body);
    const { firstName, lastName, userName, email, phoneNumber, password } =
      req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (user) return res.status(400).json({ msg: "User already exists" });

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const objToSave = {
      firstName,
      lastName,
      userName,
      email,
      phoneNumber,
      password: hashedPassword, // store the hashed password instead of the raw one
    };

    // Insert user using Mongoose's create method
    const saveUser = await User.create(objToSave);
    if (!saveUser) throw new Error("Unable to save user!");

    return res
      .status(200)
      .json({ msg: "User saved successfully", data: saveUser, status: true });
  } catch (error) {
    return res.status(500).json({ msg: error.message, status: false });
  }
};

// Login Route
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email: email }).lean();
    if (!userExist) throw Error("User does not exist");
    const isPasswordCorrect = await bcrypt.compare(
      password,
      userExist.password
    );
    if (!isPasswordCorrect) throw Error("Invalid credentials!");
    const accessToken = jwt.sign(
      {
        _id: userExist._id,
        email: userExist.email,
      },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
      }
    );

    const refreshToken = jwt.sign(
      {
        _id: userExist._id,
        email: userExist.email,
      },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
      }
    );
    return res.status(200).json({
      msg: "User logged in successfully",
      data: { accessToken, refreshToken },
      status: true,
    });
  } catch (error) {
    return res.status(500).json({ msg: error.message, status: false });
  }
};

export const userDetails = async (req, res) => {
  try {
    const { email, password } = req.body;
  } catch (error) {
    return res.status(500).json({ msg: error.message, status: false });
  }
};

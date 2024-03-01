import { Request, Response } from "express";
import { UserToAPI } from "../types/UserToAPI";
import { ValidatorResult } from "../types/ValidatorResult";

const { findAll, insert } = require("../models/userHandler");
const validateUser = require("../validator/user.validator");


const browse = async (req: Request, res: Response) => {
  try {
    const users: UserToAPI[] = await findAll();

    res.send(users);
  } catch (e) {
    res.sendStatus(500);
  }
};

const add = async (req: Request, res: Response) => {
  try {
    const errors: ValidatorResult = validateUser(req.body, true);

    if (errors) return res.status(400).send(errors);

    const user: UserToAPI = req.body;

    const result = await insert(user);

    if (result) {
      res.status(201).send(result);
    } else {
      res.status(500).send("Problem creating new user");
    }
  } catch (e) {
    res.sendStatus(500);
  }
};

module.exports = { browse, add };

const argon2 = require("argon2");
const { decodeJWT } = require("./helper/jwt.helper.js");
import { Request, Response, NextFunction } from 'express';
import { ITokenInfoRequest } from './types/interfaces/ITokenInfoRequest'; 

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 2 ** 19,
  timeCost: 5,
  parallelism: 1,
};

const hashPassword = (req: Request, res: Response, next: NextFunction): void => {
  argon2
    .hash(req.body.password, hashingOptions)
    .then((hashedPassword: string) => {
      req.body.password = hashedPassword;

      next();
    })
    .catch((err: Error) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const verifyPassword = (hashedPassword: string, password: string): void => {
  return argon2.verify(hashedPassword, password, hashingOptions);
};

const verifyToken = (req: ITokenInfoRequest, res: Response, next: NextFunction) => {
  try {
    console.log(req);
    const token = req.cookies.auth_token;

    if (!token) {
      throw new Error("Authorization header is missing");
    }

    const data = decodeJWT(token);

    req.userId = data.id;
    req.userName = data.name;

    return next();
  } catch (err) {
    res.sendStatus(401);
  }
};

module.exports = { 
  hashPassword, 
  verifyPassword, 
  verifyToken, 
};

const argon2 = require("argon2");
const { decodeJWT } = require("./helper/jwt.helper.js");

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 2 ** 19,
  timeCost: 5,
  parallelism: 1,
};

const hashPassword = (req, res, next) => {
  argon2
    .hash(req.body.password, hashingOptions)
    .then((hashedPassword) => {
      req.body.password = hashedPassword;

      next();
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const verifyPassword = (hashedPassword, password) => {
  return argon2.verify(hashedPassword, password, hashingOptions);
};

const verifyToken = (req, res, next) => {
  try {
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

const Joi = require("joi");
import { User } from "../types/User";

const validateLogin = (user: Pick<User, "mail" | "password">) => {
  const result = Joi.object({
    mail: Joi.string().email().presence("required"),
    password: Joi.string().presence("required")
  }).required().validate(user, { abortEarly: false }).error;
  // ce schéma est requis, il faut au minimum 1 champ renseigné, et il remontera toutes les erreurs éventuelles

  if (result) {
    return { errorCount: result.details.length, details: result.details };
  }

  return false;
};

module.exports = validateLogin;

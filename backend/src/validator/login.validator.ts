const Joi = require("joi");
import { UserToAPI } from "../types/UserToAPI";

const validateLogin = (user: Pick<UserToAPI, "mail" | "password">) => {
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

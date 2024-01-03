const Joi = require("joi");
import { User } from "../types/User";

const validateUser = (user: User, createMode: "required" | "optionnal") => {
  const mode = createMode ? "required" : "optional";
  const result = Joi.object({
    firstname: Joi.string().min(2).max(80).presence(mode), 
    lastname: Joi.string().min(2).max(80).presence(mode),
    age: Joi.string().presence(mode),
    city: Joi.string().min(2).max(100).presence(mode),
    country: Joi.string().min(2).max(100).presence(mode),
    mail: Joi.string().email().presence(mode),
    password: Joi.string().presence(mode),
    confirm_password: Joi.string().presence(mode)
  }).required().min(1).validate(user, { abortEarly: false }).error;
  // ce schéma est requis, il faut au minimum 1 champ renseigné, ira au bout et il remontera toutes les erreurs éventuelles

  if (result) {
    return { errorCount: result.details.length, details: result.details };
  }

  return false;
};

module.exports = validateUser;

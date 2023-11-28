const Joi = require("joi");

const validateUser = (user, createMode) => {
  const mode = createMode ? "required" : "optional";
console.log(user);
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
  // ce schéma est requis, il faut au minimum 1 champ renseigné, et il remontra toutes les erreurs éventuelles

  if (result) {
    return { errorCount: result.details.length, details: result.details };
  }

  return false;
};

module.exports = validateUser;
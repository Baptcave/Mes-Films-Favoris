SET NAMES 'utf8';

USE `films` ;

INSERT INTO `movie` VALUES
(
  1,
  "Matrix",
  135,
  "1999-03-31",
  null,
  null,
  8,
  "/pEoqbqtLc4CcwDUDqxmEDSWpWTZ.jpg",
  "Programmeur anonyme dans un service administratif le jour, Thomas Anderson devient Neo la nuit venue. Sous ce pseudonyme, il est l’un des pirates les plus recherchés du cyber‐espace. À cheval entre deux mondes, Neo est assailli par d’étranges songes et des messages cryptés provenant d’un certain Morpheus. Celui‐ci l’exhorte à aller au‐delà des apparences et à trouver la réponse à la question qui hante constamment ses pensées : qu’est‐ce que la Matrice ? Nul ne le sait, et aucun homme n’est encore parvenu à en percer les défenses. Mais Morpheus est persuadé que Neo est l’Élu, le libérateur mythique de l’humanité annoncé selon la prophétie. Ensemble, ils se lancent dans une lutte sans retour contre la Matrice et ses terribles agents…");

INSERT INTO `user` VALUES
(
  1,
  "joey",
  "joey",
  30,
  "lyon",
  "france",
  "joey@joey.com",
  "$argon2id$v=19$m=524288,t=5,p=1$2Cbfo/eh4cS0YccMVbWz5w$jTCZMIBzib7Ya0GraftJZHrOyLZnGIW/1MXoL2ejxEo");

INSERT INTO `user_has_movies` VALUES
(
  1,
  "2002-12-11",
  "Télévision",
  10,
  "Le meilleur film de tous les temps. Tout simplement.",
  1,
  1);

import inquirer from "inquirer";
//const { typeOf } = require("react-is");

import {
  Trainer,
  Charmander,
  Squirtle,
  Bulbasaur,
  Rattata,
  Pokeball,
} from "./pokemon.js";

function main() {
  console.log("GAME STARTING");
  const trainer1 = new Trainer();
  console.log(trainer1);

  inquirer
    .prompt({
      type: "list",
      name: "pokemonType",
      message: "Choose your preferred pokemon",
      choices: ["Charmander", "Squirtle", "Bulbassaur", "Rattata"],
    })

    .then((answer) => {
      if (answer.pokemonType == "Charmander") {
        trainer1.catch(Charmander);
      } else if (answer.pokemonType == "Squirtle") {
        trainer1.catch(Squirtle);
      } else if (answer.pokemonType == "Bulbassaur") {
        trainer1.catch(Bulbasaur);
      } else if (answer.pokemonType == "Rattata") {
        trainer1.catch(Rattata);
      }
    });
}

main();

const { typeOf } = require("react-is");
const {
  Pokemon,
  Fire,
  Grass,
  Water,
  Normal,
  Charmander,
  Squirtle,
  Bulbasaur,
  Rattata,
  Pokeball,
  Trainer,
  Battle,
} = require("../pokemon");

describe("Pokemon", () => {
  test("Returns a Pokemon object with a custom name property", () => {
    const pikachu = new Pokemon("Pikachu");
    expect(pikachu.name).toBe("Pikachu");
  });
  test("Returns a Pokemon object with a custom hitPoints property", () => {
    const pikachu = new Pokemon("Pikachu", 10);
    expect(pikachu.hitPoints).toBe(10);
  });
  test("Returns a Pokemon object with a custom attackDamage property", () => {
    const pikachu = new Pokemon("Pikachu", 10, 3);
    expect(pikachu.attackDamage).toBe(3);
  });
  test('Returns a Pokemon object with a default "tackle" move property', () => {
    const pikachu = new Pokemon("Pikachu", 10, 3);
    expect(pikachu.move).toBe("tackle");
  });
  test("Returns a Pokemon object with a custom move property", () => {
    const pikachu = new Pokemon("Pikachu", 10, 3, "shock");
    expect(pikachu.move).toBe("shock");
  });
});
describe("Pokemon Methods", () => {
  test("Returns a takeDamage method that reduces the hitPoints by the passed in value", () => {
    const pikachu = new Pokemon("Pikachu", 10, 3, "shock");
    pikachu.takeDamage(5);
    expect(pikachu.hitPoints).toBe(5);
  });
  test("Returns a useMove method that logs a message and returns the objects damage number", () => {
    const pikachu = new Pokemon("Pikachu", 10, 3, "shock");

    expect(pikachu.useMove()).toBe(3);
  });
  test("takeDamage invokes the hasFainted function when called", () => {
    const pikachu = new Pokemon("Pikachu", 10, 3, "shock");
    const spy = jest.spyOn(pikachu, "hasFainted");

    pikachu.takeDamage(11);

    expect(spy).toHaveBeenCalled();
  });
  test("Returns a hasFainted method that returns false when the hitpoints are > 0", () => {
    const pikachu = new Pokemon("Pikachu", 10, 3, "shock");
    pikachu.takeDamage(3);
    expect(pikachu.hasFainted()).toBe(false);
  });
  test("Returns a hasFainted method that returns true when the hitpoints are <= 0", () => {
    const pikachu = new Pokemon("Pikachu", 10, 3, "shock");
    pikachu.takeDamage(11);
    expect(pikachu.hasFainted()).toBe(true);
  });
});

describe("extended class", () => {
  test("Returns a fire type with the type key", () => {
    const pikachu = new Fire("Pikachu", 10, 3, "shock");
    expect(pikachu.type).toBe("fire");
  });

  test("Returns a grass type with the type key", () => {
    const pikachu = new Grass("Pikachu", 10, 3, "shock");
    expect(pikachu.type).toBe("grass");
  });

  test("Returns a water type with the type key", () => {
    const pikachu = new Water("Pikachu", 10, 3, "shock");
    expect(pikachu.type).toBe("water");
  });

  test("Returns a normal type with the type key", () => {
    const pikachu = new Normal("Pikachu", 10, 3, "shock");
    expect(pikachu.type).toBe("normal");
  });
});

describe("extended class methods", () => {
  test("Returns true if pokemon iseffective", () => {
    const pikachu = new Fire("Pikachu", 10, 3);
    const squirtle = new Water("Squirtle", 15, 5);
    const grass = new Grass("grass", 7, 1);
    const normalPokemon = new Normal("normal guy", 12, 2);
    expect(pikachu.isEffectiveAgainst(squirtle)).toBe(false);
    expect(pikachu.isEffectiveAgainst(grass)).toBe(true);
    expect(pikachu.isEffectiveAgainst(normalPokemon)).toBe(false);

    expect(squirtle.isEffectiveAgainst(grass)).toBe(false);
    expect(squirtle.isEffectiveAgainst(pikachu)).toBe(true);
    expect(squirtle.isEffectiveAgainst(normalPokemon)).toBe(false);

    expect(grass.isEffectiveAgainst(pikachu)).toBe(false);
    expect(grass.isEffectiveAgainst(squirtle)).toBe(true);
    expect(grass.isEffectiveAgainst(normalPokemon)).toBe(false);

    expect(normalPokemon.isEffectiveAgainst(squirtle)).toBe(false);
    expect(normalPokemon.isEffectiveAgainst(grass)).toBe(false);
    expect(normalPokemon.isEffectiveAgainst(pikachu)).toBe(false);
  });
  test("Returns true if pokemon isWeakTo the passed pokemon", () => {
    const pikachu = new Fire("Pikachu", 10, 3);
    const squirtle = new Water("Squirtle", 15, 5);
    const grass = new Grass("grass", 7, 1);
    const normalPokemon = new Normal("normal guy", 12, 2);
    expect(pikachu.isWeakTo(squirtle)).toBe(true);
    expect(pikachu.isWeakTo(grass)).toBe(false);
    expect(pikachu.isWeakTo(normalPokemon)).toBe(false);

    expect(squirtle.isWeakTo(grass)).toBe(true);
    expect(squirtle.isWeakTo(pikachu)).toBe(false);
    expect(squirtle.isWeakTo(normalPokemon)).toBe(false);

    expect(grass.isWeakTo(pikachu)).toBe(true);
    expect(grass.isWeakTo(squirtle)).toBe(false);
    expect(grass.isWeakTo(normalPokemon)).toBe(false);

    expect(normalPokemon.isWeakTo(squirtle)).toBe(false);
    expect(normalPokemon.isWeakTo(grass)).toBe(false);
    expect(normalPokemon.isWeakTo(pikachu)).toBe(false);
  });
});

describe("Pokemon Species", () => {
  describe("Charmander", () => {
    test("Returns a Charmander object with ember as its attack", () => {
      const charmander = new Charmander("Charmander", 10, 3);
      expect(charmander.move).toBe("ember");
    });
  });
  describe("Squirtle", () => {
    test("Returns a Squirtle object with water gun as its attack", () => {
      const squirtle = new Squirtle("Squirtle", 10, 3);
      expect(squirtle.move).toBe("water gun");
    });
  });
  describe("Bulbasaur", () => {
    test("Returns a Bulbasaur object with vine whip as its attack", () => {
      const bulbasaur = new Bulbasaur("Bulbasaur", 10, 3);
      expect(bulbasaur.move).toBe("vine whip");
    });
  });
  describe("Rattata", () => {
    test("Returns a Rattata object with ember as its attack", () => {
      const rattata = new Rattata("Rattata", 10, 3);
      expect(rattata.move).toBe("tackle");
    });
  });
});

describe("Pokeball", () => {
  test("return pokeball with pokemon", () => {
    const pokeball = new Pokeball();
    expect(pokeball.pokemon).toBe(null);
  });

  describe("throw", () => {
    test("when pokeball isEmpty and no argument is passed, log 'Your pokeball is empty'", () => {
      const pokeball = new Pokeball();
      jest.spyOn(console, "log").mockImplementation(() => {});
      pokeball.throw();
      expect(console.log).toHaveBeenCalledWith("Your pokeball is empty");
    });
    test("when pokeball is full and no argument is passed, return the pokemon", () => {
      const pokeball = new Pokeball();
      const charmander = new Charmander("Charmander", 10, 3);
      pokeball.throw(charmander);
      expect(pokeball.throw()).toBe(charmander);
    });
    test('when pokeball is full and no argument is passed, log "Go "Pokemon Name""', () => {
      const pokeball = new Pokeball();
      const charmander = new Charmander("Charmander", 10, 3);
      jest.spyOn(console, "log").mockImplementation(() => {});
      pokeball.throw(charmander);
      pokeball.throw();
      expect(console.log).toHaveBeenCalledWith("Go Charmander");
    });
    test('when pokeball is full and an argument is passed, log "pokeball is full"', () => {
      const pokeball = new Pokeball();
      const charmander = new Charmander("Charmander", 10, 3);
      const bulbasaur = new Bulbasaur("Bulbasaur", 10, 3);
      jest.spyOn(console, "log").mockImplementation(() => {});
      pokeball.throw(charmander);
      pokeball.throw(bulbasaur);
      expect(console.log).toHaveBeenCalledWith("pokeball is full");
    });
    test('when pokeball is empty and an argument is passed, log "you caught + Pokemon"', () => {
      const pokeball = new Pokeball();
      const charmander = new Charmander("Charmander", 10, 3);
      jest.spyOn(console, "log").mockImplementation(() => {});
      pokeball.throw(charmander);

      expect(console.log).toHaveBeenCalledWith("you caught Charmander");
    });
    test("when pokeball is empty and an argument is passed, set pokemon to the pokeballs pokemon", () => {
      const pokeball = new Pokeball();
      const charmander = new Charmander("Charmander", 10, 3);
      pokeball.throw(charmander);

      expect(pokeball.pokemon).toBe(charmander);
    });
  });
  describe("isEmpty", () => {
    test("Returns true if the pokeball is empty", () => {
      const pokeball = new Pokeball();
      expect(pokeball.isEmpty()).toBe(true);
    });
    test("Returns false if the pokeball is full", () => {
      const pokeball = new Pokeball();
      const charmander = new Charmander("Charmander", 10, 3);
      pokeball.throw(charmander);
      expect(pokeball.isEmpty()).toBe(false);
    });
  });
  describe("contains", () => {
    test("Returns empty if the pokeball is empty", () => {
      const pokeball = new Pokeball();
      expect(pokeball.contains()).toBe("empty...");
    });
    test("Returns the Pokemon if the pokeball is full", () => {
      const pokeball = new Pokeball();
      const charmander = new Charmander("Charmander", 10, 3);
      pokeball.throw(charmander);
      expect(pokeball.contains()).toBe(charmander);
    });
  });
});

describe("Trainer", () => {
  test("Create trainer belt as array", () => {
    const trainerBelt = new Trainer();
    expect(typeof trainerBelt.belt).toEqual("object");
  });

  test("Pokeball belt length is 6 ", () => {
    const trainerBelt = new Trainer();
    expect(trainerBelt.belt.length).toBe(6);
  });

  test("Check if the array contains 6 pokeballs", () => {
    const trainerBelt = new Trainer();
    trainerBelt.belt.forEach((pokeball) => {
      expect(pokeball).toBeInstanceOf(Pokeball);
    });
  });

  describe("Catch", () => {
    test("check if pokeball is empty", () => {
      const trainerBelt = new Trainer();
      const charmander = new Charmander("charmander", 10, 3);
      const spy = jest.spyOn(trainerBelt.belt[0], "isEmpty");
      trainerBelt.catch(charmander);
      expect(spy).toHaveBeenCalled();
    });
  });

  test("Catch logs message when belt it full", () => {
    const trainerBelt = new Trainer();
    const charmander1 = new Charmander("charmander1", 10, 3);
    const charmander2 = new Charmander("charmander2", 10, 3);
    const charmander3 = new Charmander("charmander3", 10, 3);
    const charmander4 = new Charmander("charmander4", 10, 3);
    const charmander5 = new Charmander("charmander5", 10, 3);
    const charmander6 = new Charmander("charmander6", 10, 3);
    const charmander7 = new Charmander("charmander7", 10, 3);
    trainerBelt.catch(charmander1);
    trainerBelt.catch(charmander2);
    trainerBelt.catch(charmander3);
    trainerBelt.catch(charmander4);
    trainerBelt.catch(charmander5);
    trainerBelt.catch(charmander6);
    trainerBelt.catch(charmander7);

    jest.spyOn(console, "log").mockImplementation(() => {});
    expect(console.log).toHaveBeenCalledWith("All pokeballs are full");
  });

  test("get pokemon's user throw if pokemon exist in the belt", () => {
    const trainerBelt = new Trainer();
    const charmander1 = new Charmander("charmander1", 10, 3);
    const charmander2 = new Charmander("charmander2", 10, 3);
    const charmander3 = new Charmander("charmander3", 10, 3);
    const charmander4 = new Charmander("charmander4", 10, 3);
    const charmander5 = new Charmander("charmander5", 10, 3);
    const charmander6 = new Charmander("charmander6", 10, 3);

    trainerBelt.catch(charmander1);
    trainerBelt.catch(charmander2);
    trainerBelt.catch(charmander3);
    trainerBelt.catch(charmander4);
    trainerBelt.catch(charmander5);
    trainerBelt.catch(charmander6);

    jest.spyOn(console, "log").mockImplementation(() => {});
    trainerBelt.getPokemon(charmander1);
    expect(console.log).toHaveBeenCalledWith("Go charmander1");
  });

  test("Test if pokemon is not in the belt", () => {
    const trainerBelt = new Trainer();
    const charmander1 = new Charmander("charmander1", 10, 3);
    const charmander2 = new Charmander("charmander2", 10, 3);
    const charmander3 = new Charmander("charmander3", 10, 3);
    const charmander4 = new Charmander("charmander4", 10, 3);
    const charmander5 = new Charmander("charmander5", 10, 3);
    const charmander6 = new Charmander("charmander6", 10, 3);
    const charmander7 = new Charmander("charmander7", 10, 3);

    trainerBelt.catch(charmander1);
    trainerBelt.catch(charmander2);
    trainerBelt.catch(charmander3);
    trainerBelt.catch(charmander4);
    trainerBelt.catch(charmander5);
    trainerBelt.catch(charmander6);

    jest.spyOn(console, "log").mockImplementation(() => {});
    trainerBelt.getPokemon(charmander7);
    expect(console.log).toHaveBeenCalledWith("Pokemon is not in belt");
  });
  describe("Battle", () => {
    test("Returns an object with two trainer keys that are passed through as arguments", () => {
      const ash = new Trainer();
      const rocket = new Trainer();
      const battle = new Battle(ash, rocket);
      expect(battle.trainer1).toBe(ash);
      expect(battle.trainer2).toBe(rocket);
    });
    test("Returns an object with two pokemon keys that are passed through as arguments", () => {
      const ash = new Trainer();
      const rocket = new Trainer();
      const charmander = new Charmander("Charmander", 10, 3);
      const squirtle = new Squirtle("Squirtle", 8, 2);
      const battle = new Battle(ash, rocket, charmander, squirtle);
      expect(battle.pokemon1).toBe(charmander);
      expect(battle.pokemon2).toBe(squirtle);
    });
    describe("Fight Method", () => {
      test("Returns an error if the passed pokemon is not in the Battle", () => {
        const ash = new Trainer();
        const rocket = new Trainer();
        const charmander = new Charmander("Charmander", 10, 3);
        const rattata = new Rattata("Rattata", 10, 1);
        const squirtle = new Squirtle("Squirtle", 8, 2);
        const battle = new Battle(ash, rocket, charmander, squirtle);

        expect(battle.fight(rattata)).toBe("Pokemon is not in Battle");
      });
      test("Use the useMove() of the chosen pokemon", () => {
        const ash = new Trainer();
        const rocket = new Trainer();
        const charmander = new Charmander("Charmander", 10, 3);
        const squirtle = new Squirtle("Squirtle", 8, 2);
        const battle = new Battle(ash, rocket, charmander, squirtle);

        const spy1 = jest.spyOn(charmander, "useMove");
        const spy2 = jest.spyOn(squirtle, "useMove");
        battle.fight(charmander);
        battle.fight(squirtle);
        expect(spy1).toHaveBeenCalled();
        expect(spy2).toHaveBeenCalled();
      });
      test("Reduce the hitPoints of the defending pokemon by the attackers attackPoints", () => {
        const ash = new Trainer();
        const rocket = new Trainer();
        const charmander = new Charmander("Charmander", 10, 3);
        const squirtle = new Squirtle("Squirtle", 8, 2);
        const battle = new Battle(ash, rocket, charmander, squirtle);
        battle.fight(charmander);
        battle.fight(squirtle);

        expect(squirtle.hitPoints).toBe(5.75);
        expect(charmander.hitPoints).toBe(7.5);
      });
      test("if isWeakTo() then the damage is multiplied by 0.75", () => {
        const ash = new Trainer();
        const rocket = new Trainer();
        const charmander = new Charmander("Charmander", 10, 3);
        const squirtle = new Squirtle("Squirtle", 8, 2);
        const battle = new Battle(ash, rocket, charmander, squirtle);
        battle.fight(charmander);

        expect(squirtle.hitPoints).toBe(5.75);
      });
      test("if isEffectiveAgainst() then the damage is multiplied by 1.25", () => {
        const ash = new Trainer();
        const rocket = new Trainer();
        const charmander = new Charmander("Charmander", 10, 3);
        const squirtle = new Squirtle("Squirtle", 8, 2);
        const battle = new Battle(ash, rocket, charmander, squirtle);
        battle.fight(squirtle);

        expect(charmander.hitPoints).toBe(7.5);
      });
      test("Damage is not multiplied if is nither weak nor effective against", () => {
        const ash = new Trainer();
        const rocket = new Trainer();
        const charmander = new Charmander("Charmander", 10, 3);
        const rattata = new Rattata("Rattata", 8, 2);
        const battle = new Battle(ash, rocket, charmander, rattata);
        battle.fight(rattata);

        expect(charmander.hitPoints).toBe(8);
      });
      test("Console.log a different message for strong, weak and normal attacks", () => {
        const ash = new Trainer();
        const rocket = new Trainer();
        const charmander = new Charmander("Charmander", 10, 3);
        const squirtle = new Squirtle("Squirtle", 8, 2);
        const battle = new Battle(ash, rocket, charmander, squirtle);

        battle.fight(charmander);
        jest.spyOn(console, "log").mockImplementation(() => {});
        expect(console.log).toHaveBeenCalledWith(
          "Charmander is weak against Squirtle so did 2.25 damage!"
        );

        battle.fight(squirtle);
        jest.spyOn(console, "log").mockImplementation(() => {});
        expect(console.log).toHaveBeenCalledWith(
          "Squirtle is strong against Charmander so did 2.5 damage!"
        );

        const rattata = new Rattata("Rattata", 8, 2);
        const battle2 = new Battle(ash, rocket, charmander, rattata);
        battle2.fight(rattata);
        jest.spyOn(console, "log").mockImplementation(() => {});
        expect(console.log).toHaveBeenCalledWith(
          "Rattata did 2 damage to Charmander!"
        );
      });
      test("The hasFainted() function is invoked on each attack", () => {
        const ash = new Trainer();
        const rocket = new Trainer();
        const charmander = new Charmander("Charmander", 10, 3);
        const squirtle = new Squirtle("Squirtle", 8, 2);
        const battle = new Battle(ash, rocket, charmander, squirtle);

        const spy = jest.spyOn(squirtle, "hasFainted");
        battle.fight(charmander);

        expect(spy).toHaveBeenCalled();
      });
      test("If the Defender has fainted, return a message ", () => {
        const ash = new Trainer();
        const rocket = new Trainer();
        const charmander = new Charmander("Charmander", 10, 3);
        const squirtle = new Squirtle("Squirtle", 8, 2);
        const battle = new Battle(ash, rocket, charmander, squirtle);
        battle.fight(charmander);
        battle.fight(charmander);
        battle.fight(charmander);

        expect(battle.fight(charmander)).toBe(
          "Squirtle has fainted. Charmander has won!"
        );
      });
    });
  });
});

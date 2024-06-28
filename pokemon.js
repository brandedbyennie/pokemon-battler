//const { array } = require("yargs");

class Pokemon {
  constructor(name, hitPoints, attackDamage, move = "tackle") {
    this.name = name;
    this.hitPoints = hitPoints;
    this.attackDamage = attackDamage;
    this.move = move;
  }
  takeDamage(num) {
    this.hitPoints -= num;
    this.hasFainted();
  }
  useMove() {
    console.log(`${this.name} used ${this.move}`);
    return this.attackDamage;
  }
  hasFainted() {
    return this.hitPoints <= 0;
  }
}

class Fire extends Pokemon {
  constructor(name, hitPoints, attackDamage, move) {
    super(name, hitPoints, attackDamage, move);
    this.type = "fire";
  }

  isEffectiveAgainst(pokemon) {
    if (pokemon.type === "grass") {
      return true;
    } else {
      return false;
    }
  }

  isWeakTo(pokemon) {
    if (pokemon.type === "water") {
      return true;
    } else {
      return false;
    }
  }
}

class Grass extends Pokemon {
  constructor(name, hitPoints, attackDamage, move) {
    super(name, hitPoints, attackDamage, move);
    this.type = "grass";
  }

  isEffectiveAgainst(pokemon) {
    if (pokemon.type === "water") {
      return true;
    } else {
      return false;
    }
  }

  isWeakTo(pokemon) {
    if (pokemon.type === "fire") {
      return true;
    } else {
      return false;
    }
  }
}

class Water extends Pokemon {
  constructor(name, hitPoints, attackDamage, move) {
    super(name, hitPoints, attackDamage, move);
    this.type = "water";
  }

  isEffectiveAgainst(pokemon) {
    if (pokemon.type === "fire") {
      return true;
    } else {
      return false;
    }
  }

  isWeakTo(pokemon) {
    if (pokemon.type === "grass") {
      return true;
    } else {
      return false;
    }
  }
}

class Normal extends Pokemon {
  constructor(name, hitPoints, attackDamage, move) {
    super(name, hitPoints, attackDamage, move);
    this.type = "normal";
  }

  isEffectiveAgainst(pokemon) {
    return false;
  }

  isWeakTo(pokemon) {
    return false;
  }
}

export class Charmander extends Fire {
  constructor(name, hitPoints, attackDamage, move = "ember") {
    super(name, hitPoints, attackDamage, move);
  }
}

export class Squirtle extends Water {
  constructor(name, hitPoints, attackDamage, move = "water gun") {
    super(name, hitPoints, attackDamage, move);
  }
}

export class Bulbasaur extends Grass {
  constructor(name, hitPoints, attackDamage, move = "vine whip") {
    super(name, hitPoints, attackDamage, move);
  }
}

export class Rattata extends Normal {
  constructor(name, hitPoints, attackDamage, move) {
    super(name, hitPoints, attackDamage, move);
  }
}

// POKEBALL CLASS

export class Pokeball {
  constructor() {
    this.pokemon = null;
  }

  isEmpty() {
    return this.pokemon === null;
  }

  throw(pokemon) {
    if (pokemon) {
      if (this.isEmpty()) {
        this.pokemon = pokemon;
        console.log("you caught " + pokemon.name);
      } else {
        console.log("pokeball is full");
      }
    } else {
      if (this.isEmpty()) {
        console.log("Your pokeball is empty");
      } else {
        console.log("Go " + this.pokemon.name);
        return this.pokemon;
      }
    }
  }
  contains() {
    if (this.pokemon) {
      return this.pokemon;
    } else {
      return "empty...";
    }
  }
}

export class Trainer {
  constructor() {
    this.belt = Array(6)
      .fill()
      .map(() => new Pokeball());
  }

  catch(pokemon) {
    for (let pokeball of this.belt) {
      if (pokeball.isEmpty()) {
        pokeball.throw(pokemon);
        return;
      }
    }

    console.log("All pokeballs are full");
  }

  getPokemon(pokemonName) {
    for (let pokeball of this.belt) {
      if ((pokeball.pokemon = pokemonName)) {
        pokeball.throw();
      }
    }
    console.log("Pokemon is not in belt");
  }
}

class Battle {
  constructor(trainer1, trainer2, pokemon1, pokemon2) {
    this.trainer1 = trainer1;
    this.trainer2 = trainer2;
    this.pokemon1 = pokemon1;
    this.pokemon2 = pokemon2;
  }
  fight(pokemon) {
    let fighter = pokemon;
    let defender;
    if (fighter === this.pokemon1) {
      defender = this.pokemon2;
    } else if (fighter === this.pokemon2) {
      defender = this.pokemon1;
    } else {
      return "Pokemon is not in Battle";
    }

    fighter.useMove();
    let multiplier = 1;
    if (fighter.isWeakTo(defender)) {
      multiplier = 0.75;
      console.log(
        `${fighter.name} is weak against ${defender.name} so did ${
          fighter.attackDamage * multiplier
        } damage!`
      );
    }
    if (fighter.isEffectiveAgainst(defender)) {
      multiplier = 1.25;
      console.log(
        `${fighter.name} is strong against ${defender.name} so did ${
          fighter.attackDamage * multiplier
        } damage!`
      );
    }

    console.log(
      `${fighter.name} did ${fighter.attackDamage * multiplier} damage to ${
        defender.name
      }!`
    );
    defender.hitPoints -= fighter.attackDamage * multiplier;

    if (defender.hasFainted()) {
      return `${defender.name} has fainted. ${fighter.name} has won!`;
    } else {
      return `The turn is over.`;
    }
  }
}

/*module.exports = {
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
};*/

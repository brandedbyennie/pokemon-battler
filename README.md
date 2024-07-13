# pokemon-battler
Implementing a Pokemon battle game using the Object Oriented Programming. For those of you unfamiliar with Pokemon, you can think about it as people (trainers) who have pets (Pokemon), that live on their own inside tiny houses (pokeballs). Trainers can only hold a maximum 6 pokeballs, and therefore, Pokemon.

These people are also a bit strange, and they get their pets into fights with other people's pets in the park for no reason at all. 

## Properties
A Pokemon will need to have the following properties:

name: the name its given
hitPoints: the amount of health the Pokemon has, represented as a number
attackDamage: the amount of damage a Pokemon can inflict (should be a number)
move: This is the move the Pokemon does when battling, this should default to "tackle"
type: A string of their type ("fire","water","grass", or "normal").

###### the types and their respective strengths and weaknesses. 
This is to inform the behaviour of the methods described below for each class.

fire pokemon are strong against grass, and weak against water.
grass pokemon are strong against water, and weak against fire.
water pokemon are strong against fire and weak against grass.
normal pokemon are neither strong nor weak against any other types.

## Methods
takeDamage: Will take a number and reduce its health by the number given.
useMove: Will return the Pokemon's attackDamage.
hasFainted: When a Pokemon's health is reduced to zero they faint. hasFainted will return a boolean based on whether the Pokemon has fainted.
isEffectiveAgainst: This will take a Pokemon as an argument and return a boolean describing whether the current Pokemon is effective against the given Pokemon.
isWeakTo: This will take a Pokemon as an argument and return a boolean describing whether the current Pokemon is weak to the given Pokemon.

# Pokeball
Pokeballs are the containers for Pokemon. They are used in the game to catch Pokemon and to release the Pokemon for battle.

## Pokeball behaviours include:
being able to store a Pokemon.
throw it to catch a Pokemon.
throw it to release it for battle.
check which Pokemon is in the pokeball.

## Methods
throw: Takes a Pokemon object as an argument. If the pokeball is empty it will capture the passed Pokemon.
  If it isn't empty, the user should not be allowed to capture a pokemon with it! The method returns the stored Pokemon.
  If the ball is empty then the user should be informed accordingly.
isEmpty: Should return a boolean representing whether or not a Pokemon is stored inside it.
contains: Should return the name of the Pokemon that is stored or If the pokeball is empty is should return "empty ...".

# Trainer
A Trainer should have a belt property which can store up to 6 Pokeballs. The datatype of the belt is up to you to decide.

## Methods
catch: Takes a Pokemon as an argument.
It uses one of its empty Pokeball's throw method to catch the Pokemon.

getPokemon: Takes the name of a Pokemon.
Will search for the the Pokemon with that name in the belt.
Use the Pokeball's throw to return that specific Pokemon.

# Battle
Finally, you will need a way to battle the Pokemon. The battle should take two trainers and the names of the Pokemon they wish to battle.

# Methods
fight: This should take the Pokemon whose turn it is,
Attack the defending Pokemon (deducting attacker's attack damage from the defender's hit points)
End their turn
Should take each Pokemon's strengths and weaknesses into account
If a defender is strong against the attacking type, the attacking type's damage should be multiplied by 0.75.
If a defender is weak against the attacking type, the attacking type's damage should be multiplied by 1.25.
Each attack should be followed by an attack message
The message will vary depending on the defender's weakness/strength.
If the defending Pokemon faints (depletes all hit points), the attacker wins

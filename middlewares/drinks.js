const fs = require("fs");
const { writeData, readData } = require("../utils/data/parse");

const findAllDrinks = async (req, res, next) => {
  try {
    req.drinks = await readData("./assets/drinks.json");
    next();
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const updateDrinks = async (req, res, next) => {
  try {
    req.drinks.push({
      strDrink: req.body.name,
      strDrinkThumb: req.body.image
        ? req.body.image
        : "https://storage.yandexcloud.net/game-img/f_9216644624b67b56.webp",
      idDrink: req.drinks.length+1,
      strInstructions: req.body.instructions,
      ingredients: req.body.ingredients,
    });
    await writeData("./assets/drinks.json", req.drinks);
    next();
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

module.exports = { updateDrinks, findAllDrinks };

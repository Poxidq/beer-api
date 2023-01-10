import Beer from "../models/Beer";

/**
 * Get all beer
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const getBeerAll = async (req, res) => {
  try {
    const [beers, _] = await Beer.findAll();
    if (beers.length === 0) {
      res.status(200).json({ message: "No beers found" });
    } else {
      res.status(200).json({ count: beers.length, beers });
    }
  } catch (error) {
    console.log(error);
  }
};

/**
 * Get beer by id
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const getBeerById = async (req, res) => {
  try {
    let beerId = req.params.id;

    let [beers, _] = await Beer.findById(beerId);
    if (beers.length === 0) {
      res.status(200).json({ message: "No beer found" });
    } else {
      res.status(200).json({ beers: beers[0] });
    }
  } catch (error) {
    console.log(error);
  }
};

/**
 * Create new beer
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const createNewBeer = async (req, res) => {
  try {
    let { brand, name, alcohol, style, yeast } = req.body;
    console.log("req body: ", req.body);
    let beer = new Beer(brand, name, alcohol, style, yeast);

    beer = await beer.save();

    res.status(201).json({ message: "Beer created" });
  } catch (error) {
    console.log(error);
  }
};

/**
 * Delete Beer by id
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const deleteBeerById = async (req, res) => {
  try {
    let beerId = req.params.id;
    // console.log("ID to delete: ", beerId);
    await Beer.deleteById(beerId);

    res.status(201).json({ message: `#${beerId} Beer poured out` });
  } catch (error) {
    console.log(error);
  }
};

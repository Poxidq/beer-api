import express from "express";
import {
  getBeerAll,
  getBeerById,
  createNewBeer,
  deleteBeerById,
} from "../controllers/beer";

const root = express.Router();

// GET
root.get("/beer", getBeerAll);
root.get("/beer/:id", getBeerById);

// POST
root.post("/beer/pour", createNewBeer);

// DELETE
root.delete("/beer/:id", deleteBeerById);

export default root;

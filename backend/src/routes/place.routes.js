import express from "express";
import {
  getPlaces,
  getPlaceById,
  createPlace,
  deletePlace,
} from "../controllers/place.controller.js";

const router = express.Router();

router.get("/", getPlaces);
router.get("/:id", getPlaceById);
router.post("/", createPlace);
router.delete("/:id", deletePlace);

export default router;

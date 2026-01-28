import Place from "../models/Place.js";

/**
 * @desc Get all places
 * @route GET /api/places
 */
export const getPlaces = async (req, res) => {
   try {
      const places = await Place.find().sort({ createdAt: -1 });
      res.json(places);
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
};

/**
 * @desc Get single place
 * @route GET /api/places/:id
 */
export const getPlaceById = async (req, res) => {
   try {
      const place = await Place.findById(req.params.id);
      if (!place) return res.status(404).json({ message: "Place not found" });
      res.json(place);
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
};

/**
 * @desc Create place
 * @route POST /api/places
 */
export const createPlace = async (req, res) => {
   try {
      const { title, imageUri, location } = req.body;

      const place = await Place.create({
         title,
         imageUri,
         location,
      });

      res.status(201).json(place);
   } catch (error) {
      res.status(400).json({ message: error.message });
   }
};

/**
 * @desc Delete place
 * @route DELETE /api/places/:id
 */
export const deletePlace = async (req, res) => {
   try {
      const place = await Place.findByIdAndDelete(req.params.id);
      if (!place) return res.status(404).json({ message: "Place not found" });

      res.json({ message: "Place deleted" });
   } catch (error) {
      res.status(400).json({ message: error.message });
   }
};

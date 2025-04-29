import Service from "../models/Service.js";

export const addService = async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Service name is required" });
  }

  try {
    const service = await Service.create({ name });
    res.status(201).json(service);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

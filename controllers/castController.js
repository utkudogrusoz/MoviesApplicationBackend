const Cast = require("../models/Cast");

const getAllCasts = async (req, res) => {
  try {
    const Casts = await Cast.find();
    res.status(200).json({
      status: "success",
      data: Casts,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: error,
    });
  }
};
const createCast = async (req, res) => {
  try {
    const cast = Cast.create(req.body);
    res.status(201).json({
      status: "success",
      data: cast,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: error,
    });
  }
};

module.exports = { getAllCasts, createCast };

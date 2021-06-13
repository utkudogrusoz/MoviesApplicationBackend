const Director = require("../models/Director");

const getAllDirectors = async (req, res) => {
  try {
    const Directors = await Director.find();

    res.status(200).json({
      status: "success",
      data: Directors,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: error,
    });
  }
};

const createDirector = async (req, res) => {
  try {
    const director = Director.create(req.body);
    res.status(201).json({
      status: "success",
      data: director,
    });
  } catch (error) {
    res.status(400).json({
      status: "success",
      error: error,
    });
  }
};

module.exports = {
  getAllDirectors,
  createDirector,
};

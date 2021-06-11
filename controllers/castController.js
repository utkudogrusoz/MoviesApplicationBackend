const Cast = require("../models/Cast");

const getAllCasts = async (req, res) => {

    try {
        const Casts = await Cast
            .find()
            
            

        res.status(200).json({
            status: "success",
            data: Casts
        });

    } catch (error) {
        res.status(400).json({
            status: "fail",
            error: error
        });

    }

}

module.exports = { getAllCasts }
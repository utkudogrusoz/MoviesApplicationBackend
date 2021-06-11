const Director = require("../models/Director");

const getAllDirectors = async (req, res) => {

    try {
        const Directors = await Director
            .find()
            
            

        res.status(200).json({
            status: "success",
            data: Directors
        });

    } catch (error) {
        res.status(400).json({
            status: "fail",
            error: error
        });

    }

}

module.exports = { getAllDirectors }
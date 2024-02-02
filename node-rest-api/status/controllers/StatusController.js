module.exports = {
    getStatus: (req, res) => {
        console.log("status");
        return res.status(200).json({
            status: true,
            data: "Success"
        });
    }
};

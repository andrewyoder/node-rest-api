module.exports = {
    getStatus: (req, res) => {
        return res.status(200).json({
            status: true,
            data: "Success"
        });
    }
};
module.exports = (req, res, next) => {
    // console.log(req)
    res.json({user: req.user})
}

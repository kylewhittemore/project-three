const uploader = require('../../../services/file-upload')

module.exports = (req, res) => {
    const value = Object.values(req.files)
    let regex = /:/gi
    let image = {
        s3Id: req._startTime
            .toString()
            .toLowerCase()
            .replace(regex, "")
            .replace(/ /gi, '')
            .replace(/z/, '')
            .replace(/-/, '')
            .slice(3, 18),
        name: value[0].name
    }
    console.log("IMAGE: ******", image)
    uploader(image, value[0].path, res)
}
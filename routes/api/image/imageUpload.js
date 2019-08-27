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
            .slice(3, 25),
        name: value[0].name
    }
    uploader(image.s3Id, value[0].path, res)
}
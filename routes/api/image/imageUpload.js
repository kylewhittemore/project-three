const uploader = require('../../../services/file-upload')

module.exports = async (req, res) => {
    const value = Object.values(req.files)
    console.log(req._startTime)
    let regex = /:/gi
    let newStr = 
        req._startTime
        .toString()
        .toLowerCase()
        .replace(regex, "")
        .replace(/ /gi, '')
        .replace(/z/, '')
        .replace(/-/, '')
        .slice(3,25)


    console.log(newStr)
    uploader(value[0].name, value[0].path)
    res.json(req._startTime)
}
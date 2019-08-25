const uploader = require('../../../services/file-upload')

module.exports = async (req, res) => {
    const value = Object.values(req.files)
    console.log(value[0].name)
    uploader(value[0].name, value[0].path)

}
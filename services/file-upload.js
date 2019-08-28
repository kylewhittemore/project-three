const fs = require('fs');
const AWS = require('aws-sdk');


const uploader = (image, inputFileName, res) => {

    const s3 = new AWS.S3({
        accessKeyId: "AKIAIUEXIQZLZH6A4LYQ",
        secretAccessKey: "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"
    });

    fs.readFile(inputFileName, (err, data) => {
        if (err) throw err;
        const params = {
            Bucket: 'project-three-logger-photos',
            Key: image.s3Id,
            ContentType: 'image/jpg',
            acl: "",
            Body: fs.createReadStream(inputFileName)
        };

        let upload = s3.upload(params)
        let promise = upload.promise();
        promise.then(data => {
            let response = {
                name: image.name,
                s3Id: data.key 
            }
            console.log("DATA:###########", data)
            res.json(response)
        }, err => console.log(err))
        
    });
}

module.exports = uploader
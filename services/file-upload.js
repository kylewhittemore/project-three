const fs = require('fs');
const AWS = require('aws-sdk');


const uploader = (image, inputFileName, res) => {

    const s3 = new AWS.S3({
        accessKeyId: "AKIAI5ZBWI63YUOSTKLQ",
        secretAccessKey: "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"
    });

    fs.readFile(inputFileName, (err, data) => {
        if (err) throw err;
        const params = {
            Bucket: 'grow-image-storage',
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
            res.json(response)
        }, err => console.log(err))
        
    });
}

module.exports = uploader
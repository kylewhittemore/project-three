const fs = require('fs');
const AWS = require('aws-sdk');
const secrets = require('../config/secrets')

const uploader = (image, inputFileName, res) => {

    const accessKeyId = process.env.AWS_S3_ACCESS_KEY_ID || secrets.awsAccessKeyId
    const secretAccessKey = process.env.AWS_S3_SECRET_ACCESS_KEY || secrets.awsSecretAccessKey
    const s3 = new AWS.S3( { accessKeyId, secretAccessKey })
    
    // const s3 = new AWS.S3({
    //     accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID,
    //     secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY
    // });

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
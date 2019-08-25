const fs = require('fs');
const AWS = require('aws-sdk');


const uploader = (fileName, inputFileName) => {

    const s3 = new AWS.S3({
        accessKeyId: "AKIA2ZO7MI4RMQ7HZ4VS",
        secretAccessKey: "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"
    });

    // const fileName = inputFileName;

    const uploadFile = () => {
        fs.readFile(inputFileName, (err, data) => {
            if (err) throw err;
            const params = {
                Bucket: 'grow-image-storage', // pass your bucket name
                Key: fileName, // file will be saved as testBucket/contacts.csv
                ContentType: 'image/jpg',
                acl: "",
                Body: fs.createReadStream(inputFileName)
            };
            s3.upload(params, function (s3Err, data) {
                if (s3Err) console.log(s3Err, data)
                console.log(`File uploaded successfully at ${data.Location}`)
            });
        });
    };

    uploadFile()
}

module.exports = uploader
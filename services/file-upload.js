const fs = require('fs');
const AWS = require('aws-sdk');


const uploader = (fileName, inputFileName) => {
 
    const s3 = new AWS.S3({
        accessKeyId: "AKIAI5ZBWI63YUOSTKLQ",
        secretAccessKey: "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"
    });

    const uploadFile = () => {
       fs.readFile(inputFileName, (err, data) => {
            if (err) throw err;
            const params = {
                Bucket: 'grow-image-storage', 
                Key: fileName, 
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
    uploadFile();
}

module.exports = uploader
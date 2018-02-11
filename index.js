const app = require('commander');

const deploy = require('./deployer')

app.version('1.0.0')
    .option('--source <required>', 'source dir')
    .option('--bucket <required>', 'bucket')
    .option('--region <required>', 'aws region')
    .option('--key <required>', 'aws key')
    .option('--secret <required>', 'aws secret')
    .parse(process.argv)
    
if (app.source == undefined || app.bucket == undefined || app.region == undefined || app.key == undefined || app.secret == undefined) {
   app.help();
}

var args = {
    public_dir: app.source,
    bucket: app.bucket,
    aws_key: app.key,
    aws_secret: app.secret,
    region: app.region
};

deploy(args);
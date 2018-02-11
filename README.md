## s3-sync-cli

Deploy to s3 by checking whether the file contents have changed, rather than simply checking the file timestamp like `aws s3 sync` does.

Useful for large static websites that often regenerate 1000s of files even if the contents haven't changed.

This implementation is derived from https://www.npmjs.com/package/hexo-deployer-s3, and exposes it as a command-line tool for general-purpose use.

### Usage
```bash
git clone <this repo>
node /path/to/repo/index.js --help
```

### Example
```bash
node /path/to/repo/index.js --source /path/to/source/dir --bucket my-bucket-name --region us-east-1 --key AWS_KEY --secret AWS_SECRET
```
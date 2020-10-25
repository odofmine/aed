var execSync = require('child_process').execSync;

const sleep = (ms) => new Promise(resove => setTimeout(resove, ms));

async function main() {
  execSync('git add .')
  execSync(`git commit -m'update ${new Date()}'`)
  execSync('git push origin main')
  sleep(300000)
}

while(1) {
  main()
}


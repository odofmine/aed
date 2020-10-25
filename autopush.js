var execSync = require('child_process').execSync;

const sleep = (ms) => new Promise(resove => setTimeout(resove, ms));

async function main() {
  execSync('git add .')
  execSync('git commit -m"update"')
  execSync('git push origin master')
  sleep(300000)
}

while(1) {
  main()
}


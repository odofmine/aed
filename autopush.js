var execSync = require('child_process').execSync;

let sleep = (ms) => new Promise(resove => setTimeout(resove, ms));

async function main() {
  while(1){
    execSync('git add .')
    execSync(`git commit -m'update ${new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')}'`)
    execSync('git push origin main')
    await sleep(300000)
  }
}
  main()


var execSync = require('child_process').execSync;

let sleep = (ms) => new Promise(resove => setTimeout(resove, ms));

async function main() {
  while(1){
try {
    execSync('git add .')
    execSync(`git commit -m'update ${new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')}'`)
    execSync('git push origin main')
} catch(e){
execSync('rm -rf .git/index.lock')
console.error( new Date(), e)
}   
 await sleep(60000)
  }
}
  main()


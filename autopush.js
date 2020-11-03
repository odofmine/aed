var execSync = require('child_process').execSync;

let sleep = (ms) => new Promise(resove => setTimeout(resove, ms));

async function main() {
  while(1){
try {
    execSync('git add .')
    execSync(`git commit -m'update ${new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')}'`)
    execSync('git push origin main')
} catch(e){
console.error(e)
}   
 await sleep(20000)
  }
}
  main()


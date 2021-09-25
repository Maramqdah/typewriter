console.log(process.argv);
//process.stdout.write('\x07');

let input =process.argv.slice(2);
let countDown=[];
for(let element of input){
countDown.push(parseInt(element));
}

for (let i = 0; i < countDown.length; i++) {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, countDown[i]);
}



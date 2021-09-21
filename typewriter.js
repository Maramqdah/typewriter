const sentence = "hello there from lighthouse labs";
for( let i=0; i <sentence.length;i++){
  let waitTime= 100*(i+1)
  setTimeout (() => { process.stdout.write(sentence[i])},waitTime);

};



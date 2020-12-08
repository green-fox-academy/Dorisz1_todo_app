import fs from 'fs';

function printManual(){
    const fileContent = fs.readFileSync('manual.txt' , 'utf-8' );
   return console.log(fileContent.toString());
}

export default printManual
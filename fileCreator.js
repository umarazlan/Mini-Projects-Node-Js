import readline from "readline";
import fs from 'fs';

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

const fileCreation = () => {
   rl.question("Enter the file name : ",(fileName)=>{
        rl.question("Enter the Content of the file : ",(content)=>{
            fs.writeFile(`${fileName}.txt`,content,(err)=>{
                if(err)
                    { 
                        console.error(`Error writing the file`);
                    }
                     else
                    {
                    console.log(`File "${fileName}.txt" Created successfully`);
                    }
                    rl.close;
                })
        })
   })
}

fileCreation();
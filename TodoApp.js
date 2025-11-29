// import readline from "readline";

// const rl = readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// })

// const todos = [];

// const showMenu = () =>{
//     console.log("\n 1: Add A Task ");
//     console.log(" 2: View Task ");
//     console.log(" 3: Exit Todo ");
    
//     rl.question('Choose among the options:',handleInput)
// }

// const handleInput = (options) =>{
//       if (options === "1") {
//         rl.question("Enter the task:",(task)=>{
//             todos.push(task);
//             console.log("Task Added !!",task);
//             showMenu();
//         })
//       }
//       else if (options === "2") {
//         console.log("\n Your Todo Lists")
//         todos.map((task,index)=>{
//             console.log(`${index+1}. ${task}`)
//         })
//         showMenu();
//       }
//       else if (options === "3"){
//         console.log('Good Bye !!');
//         rl.close();
//       }
//       else{
//         console.log("Invalid Option,Try Again and Choose among the options ")
//         showMenu();
//       }

// }

// showMenu();
import readline from "readline";

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

const todos = [];

const showMenu = () =>{
    console.log("\n 1: Add A Task ");
    console.log(" 2: View Task ");
    console.log(" 3: Exit Todo ");
    
    rl.question('Choose among the options:',handleInput)
}

const handleInput = (options) =>{
      switch (options) {
        case "1":
        rl.question("Enter the task:",(task)=>{
            todos.push(task);
            console.log("Task Added:",task);
            showMenu();
        })
        break;
        case "2":  
        console.log("\n Your Todo Lists")
        if (todos.length === 0) {
        console.log("   (No tasks yet)");
        } 
        else{
        todos.map((task,index)=>{
            console.log(`${index+1}. ${task}`)
        })}
        showMenu();
        break;
        case "3":
        console.log('Good Bye !!');
        rl.close();
        break;
        default:
        console.log("Invalid Option,Try Again and Choose among the options ")
        showMenu();
      }
};
showMenu();



#! usr/bin/env node
import inquirer from "inquirer"

let answer = await inquirer.prompt([{
    message: "Enter your first value",
    type: "number",
    name: "Firstvalue",
},
{
    message: "Enter your seconde value",
    type: "number",
    name: "Secondevalue",
},
{
mesassge:"Select opprator",
type:"list",
name:"Oprator",
choices:['Addition','Subtraction','Multipiction','Divison']
}])

if(answer.Oprator === "Addition" ){
    console.log(answer.Firstvalue + answer.Secondevalue)
}
else if(answer.Oprator === "Subtraction" ){
    console.log(answer.Firstvalue - answer.Secondevalue)
}
else if(answer.Oprator === "Multipiction" ){
    console.log(answer.Firstvalue * answer.Secondevalue)
}
else if(answer.Oprator === "Divison" ){
    console.log(answer.Firstvalue / answer.Secondevalue)
}
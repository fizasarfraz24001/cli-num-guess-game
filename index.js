import inquirer from "inquirer";
const randomnumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNnumber",
        type: "number",
        message: "please guess a number between 1-10: ",
    },
]);
if (answers.userGuessedNnumber === randomnumber) {
    console.log("congratulation! you guessed right number");
}
else {
    console.log("oops! you guessed wrong number");
}

#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todoList = [];
let conditions = true;
console.log(chalk.greenBright("\n \t Wellcome to CODE-WITH-AREEBA - TODO list Application\n"));
// while(conditions){
//     let addTasks = await inquirer.prompt([
//         {
//             name: "task",
//             type:"input",
//             message: "Enter your new task :"
//         }
//     ]);
//     todoList.push(addTasks.task);
//     console.log(`${addTasks.task}Task added in Todo-list Successfully`);
//     let addMoreTasks = await inquirer.prompt([
//         {
//             name :"addmore",
//             type: "confirm",
//             message: "Do You want to Add more tasks ?",
//             default: "False",
//         }
//     ]);
//     conditions = addMoreTasks.addmore
// }
//     console.log ("Your Updated Todo-List:",todoList);
// function to add new task in the list
let main = async () => {
    while (conditions) {
        let option = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: "Select an option you want to do:",
                choices: ["Add Task", "Delete Task", "Update Task", "View Todo-List", "Exit"]
            }
        ]);
        if (option.choice === "Add Task") {
            await addTask();
        }
        else if (option.choice === "Delete Task") {
            await deleteTask();
        }
        else if (option.choice === "Update Task") {
            await updateTask();
        }
        else if (option.choice === "View Todo-List") {
            await viewTask();
        }
        else if (option.choice === "Exit") {
            conditions = false;
        }
    }
};
let addTask = async () => {
    let newTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "Enter your new task:",
        }
    ]);
    todoList.push(newTask.task);
    console.log(chalk.bgCyanBright(`\n${newTask.task}Task added Successfully in Todo-List`));
};
// Function to view all Todo-List Tasks
let viewTask = () => {
    console.log("\n Your Todo-List:\n");
    todoList.forEach((task, index) => {
        console.log(`${index + 1}: ${task}`);
    });
};
//Functions to delete a tasks from list
let deleteTask = async () => {
    await viewTask();
    let taskIndex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the 'index no.' of the task you want to delete:",
        }
    ]);
    let deletedTask = todoList.splice(taskIndex.index - 1, 1);
    console.log(chalk.bgBlueBright(`\n ${deletedTask} this task has been successfully deleted from your Todo-List\n`));
};
//Function to Update A Task
let updateTask = async () => {
    await viewTask();
    let update_task_index = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the 'index.no' of the task you want to update :"
        },
        {
            name: "new_Task",
            type: "input",
            message: "NOW Enter new task name :",
        }
    ]);
    todoList[update_task_index.index - 1] = update_task_index.new_Task;
    console.log(chalk.bgBlueBright(`\n Task at index no. ${update_task_index.index - 1} Updated Successfully![For updated list check option:"View Todo-List"]`));
};
main();

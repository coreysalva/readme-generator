const inquirer = require("inquirer");
const fs = require("fs");
const https = require('https');

const questions = [
    {
        type: "input",
        message: "What is your Git user name?",
        name: "username"
    },
    {
        type: "input",
        message: "Please enter the project title: ",
        name: "title"
    },
    {
        type: "input",
        message: "Please enter the description: ",
        name: "description"
    },
    {
        type: "input",
        message: "Please describe the installation process: ",
        name: "installation"
    },
    {
        type: "input",
        message: "Please describe the usage of this project: ",
        name: "usage"
    },
    {
        type: "input",
        message: "Please enter any lisences for this project: ",
        name: "lisences"
    },
    {
        type: "input",
        message: "Please list any contributing users: ",
        name: "contributors"
    },
    {
        type: "input",
        message: "Please describe the testing used for this project: ",
        name: "testing"
    }
];

inquirer.prompt(questions, response => {
    console.log();
    const readme = [];

    if (response.username != "") {
        //Get the email and profile picture via API request using given username
        https.get('https://api.github.com/users/' + response.username, (resp) => {
            let data = '';
            //handle response?


        }).on("error", (err) => {
            console.log("Error: " + err.message);
        });
    }
    else {
        console.log("Please try again and enter your Git username.");
    }
    readme.push("Name: ");
    readme.push(response.username + "/n");
    readme.push("Title: ");
    readme.push(response.title + "/n");
    readme.push("Description: ");
    readme.push(response.description + "/n");
    readme.push("Installation: ");
    readme.push(response.installation + "/n");
    readme.push("Usage: ");
    readme.push(response.usage + "/n");
    readme.push("Lisences: ");
    readme.push(response.lisences + "/n");
    readme.push("Contributors: ");
    readme.push(response.contributors + "/n");
    readme.push("Testing: ");
    readme.push(response.testing + "/n");
    const readmeJSON = JSON.stringify(readme, null, 2);

    fs.writeFile("README.md", readmeJSON, function (err) {
        if (err) {
            throw err;
        }

        console.log("Successfully wrote to ReadMe file");
    });
});





function init() {

}

init();

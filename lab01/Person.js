class Person {
    constructor(name, favoriteColor){
    this.name = name;
    this.favoriteColor = favoriteColor;
    }
    
    speak() {
        const chalk = require("chalk");
        console.log(chalk.hex(this.favoriteColor).bold(this.name));
        }
    }
  


    module.exports = Person;
    
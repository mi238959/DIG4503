const Express = require('express');
const App = Express();
const port = 80;

const chalk = require('chalk');
const pokemons = require('json-pokemon');

App.use ('/', Express.static ('public'))

App.get("/name/:name", (req,res)=>{
    let error = { 'error': 'invalid pokemon name' };
    let name = pokemons.filter(pokemon =>
        pokemon.name.toLowerCase() == req.params.name.toLowerCase());

    if (name.length) {
        res.send(name);
        console.log(chalk.green(req.path));
    } else {
        res.send(error);
        console.log(chalk.red( req.path));
    }
})

App.get("/id/:id", (req,res)=>{
    let error = {'error':'invalid pokemon id'};
    let ID = pokemons.filter(pokemon => 
        pokemon.id == req.params.id);

    if(ID.length){
        res.send(ID);
        console.log(chalk.green(req.path));
    } else {
        res.send(error);
        console.log(chalk.red(req.path));
    }
})



App.listen(port, ()=>{
    console.log('Server running!')
})
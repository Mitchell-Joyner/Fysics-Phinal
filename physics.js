const motion = require('./motion');
const energy = require('./energy');
const readline = require('readline');


const terminal = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

terminal.question("What type of equation are you looking for? (Motion or Energy)",function(str){
    if(str == "motion"){
        terminal.question("What variable are you solving for? (D,V,A,T)"),function(str){
            if(str == "distance"){
                terminal.question("What are your known variables?"),function(array){
                    printOptions();
                    if()
                }
            }
        }
    }

});

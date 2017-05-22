const motion = require('./motion');
const energy = require('./energy');
const readline = require('readline');


const terminal = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function printOptions(){
    console.log("\nEnter the variables you know in a comma list.");
    console.log("If you do know a variable, then type n.");
    console.log("Distance, Velocity, Acceleration, Time, Mass, Energy.");
}

function convertToArray(strcma){
    strcma = strcma.split(',');
    for(let x=0;x<strcma.length;x++){

    }
    return strcma;
}

function end(){
    terminal.close();
}

terminal.question("What type of equation are you looking for? (Motion or Energy)",function(str){
    if(str == "motion"){
        terminal.question("What variable are you solving for? (D,V,A,T)"),function(str){
            str.toLowerCase();
            if(str == "distance"){
                printOptions();
                terminal.question("What are your known variables?"),function(str){
                    str.toLowerCase();
                    if(Number.isNaN(str)){
                        convertToArray(str);
                        console.log(motion.distance(str[1],str[2]));
                    }
                }
            }
        }
    }

});

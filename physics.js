const motion = require('./motion');
const energy = require('./energy');
const readline = require('readline');
const terminal = readline.createInterface({
  input:process.stdin,
  output:process.stdout
});
function printOptions(){
  console.log("\nEnter the variables you know in a comma list.");
  console.log("If you do not know a variable, then type N");
  console.log("Distance, Velocity, Acceleration, Time, Mass, and Energy");
}
function convertToArray(strcma){
  strcma = strcma.split(',');
  for(let x=0;x<strcma.length;x++){
    strcma[x] = Number(strcma[x]);
  }
  return strcma;
}
function end(){
  terminal.close();
}
terminal.question("What type of equation are you looking for, Motion or Energy?",function(str){
  str.toLowerCase();
  if(str == "Motion"){
    terminal.question("What variable are you solving for? (D,V,A,T)"),function(str){
      str.toLowerCase();
      if(str == "Distance"){
        printOptions();
        terminal.question("What are your known variables?"),function(x){
          str.toLowerCase();
          console.log(Number.isNaN(x[2]));
          convertToArray(x);
          if(Number.isNaN(x[2])==false){
            console.log(motion.distance(x[1],x[2],x[3]));
            end();
          }
          else{
            console.log(motion.distance(c[1],c[3]));
            end();
          }
        });
      }
      else if(str=="Velocity"){
        printOptions();
        terminal.question("What are your known variables?"),function(x){
          str.toLowerCase();
          convertToArray(x);
          if(Number.isNaN(x[2])==true){
            console.log(motion.velocity(x[0],x[3]));
            end();
          }
          else{
            console.log(motion.velocity2(x[0],x[2],x[3]));
            end();
          }
        });
      }
      else if(str=="Acceleration"){
        printOptions();
        terminal.question("What are your known variables?"),function(x){
          str.toLowerCase();
          convertToArray(x);
          console.log(motion.acceleration(x[0],x[1],x[3]));
          end();
        });
      }
      else if(str=="Time"){
        printOptions();
        terminal.question("What are your known variables?"),function(x){
          str.toLowerCase();
          convertToArray(x);
          console.log(motion.time(x[0],x[1]));
          end();
        });
      }
    });
  }
  else{
    console.log("Sorry, your variable was not recognized. Please try again.");
    end();
  }
  if(str=="Energy"){
    str.toLowerCase();]
    printOptions();
    terminal.question("What variable are you solving for? (Ke, V, or M)?"),function(x){
      if(str=='KE'){
        //#Confused and Tired
      }
      else if(str=='V'){
        //#Confused and Tired
      }
      else if(str=='M'){
        //#Confused and Tired
      }
    });
  }
});

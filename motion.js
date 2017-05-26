var exports = module.exports = {};

//use this prototype to create the other functions
exports.distance = function(v,t){
  return v*t;
};
exports.velocity = function(){
  return d/t;
};
exports.acceleration = function(){
  return v/t;
};
exports.time = function(){
  return d/v;
};
exports.distance2 = function(v,a,t){
  return ((a*t*t)+(v*t))/2;
}
exports.velocity2 = function(v,a,t){
  return v+a*t;
}

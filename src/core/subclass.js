
var d7_subclass = {}.__protot__ ?

function(o,p){
  o.__proto__ = p;
} : 
function(o,p){
  for(var key in p){
    o[key] = p[key];
  }
};

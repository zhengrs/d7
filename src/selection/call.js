import "../core/array";
import "selection";

d7_selectionPrototype.call = function(callback){
  
  var args = d7_array(arguments);
  
  
  callback.apply(this, args.split(1));
};

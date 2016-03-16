import "selection.js";

d7_selection_prototype.append = function(name){
  
  var creator = d7_selection_creator(name);
  
  return this.select(function(d,i){
    return this.appendChild(creator.call(this, this.__data__, i));
  });
};

function d7_selection_creator(name){
  return typeof name === "function" ? name : function(){
    return d7_document.createElement(name);
  };
}

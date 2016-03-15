import "selection.js";

d7_selectionPrototype.selectAll = function(selector){
  
  var subgroups=[], subgroup, group;
  
  selector = d7_selection_selectorAll(selector); // selector.call(document, selector)
  
  for(var i=0, n=this.length; i<n; i++){
    for(var j=0, m=(group=this[i]).length; j<m; j++){
      subgroups.push(subgroup=[]);
    }
  }  
  
  
};

function d7_selection_selectorAll = function(selector){
  return typeof selector === "function" ? selector : function(){
    return this.querySelectorAll(selector);
  };
}

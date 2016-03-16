import "selection.js";

d7_selectionPrototype.selectAll = function(selector){
  
  var subgroups=[], subgroup, group, node;
  
  selector = d7_selection_selectorAll(selector); // selector.call(document, selector)
  
  for(var i=0, n=this.length; i<n; i++){
    for(var j=0, m=(group=this[i]).length; j<m; j++){
      if(node=group[j]){
        subgroups.push(subgroup=d7_array(selector.call(node,node.__data__,j)));
        subgroup.parentNode = node;
      }
    }
  }  
  return d7_selection(subgroups);
};

function d7_selection_selectorAll = function(selector){
  return typeof selector === "function" ? selector : function(){
    return this.querySelectorAll(selector);
  };
}

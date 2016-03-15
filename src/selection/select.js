import "selection";


d7_selectionPrototype.select = function(selector){
  
  var subgroups=[], subgroup, group, node, subnode;
  
  selector = d7_selection_selector(selector);
  
  for(var i=0, n=this.length; i<n; i++){
    subgroups.push(subgroup=[]);
    subgroup.parentNode = (group=this[i]).parentNode;
    for(var j=0, m=group.length; j<m; j++){
      if(node=group[j]){
        subgroup.push(  )
      }
      else{
        subgroup.push(null);
      }
    }
  }
  
};

function d7_selection_selector(selector){
  return typeof selector === "function" ? selector : function(){
    d7_select(selector, this);
  };
}

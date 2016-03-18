import "selection";

d7_selectionPrototype.node = function(){
  var group, node;
  
  for(var i=0, n=this.length; i<n; i++){
    for(var j=0, m=(group=this[i]).length; j<m; j++){
      if(node = group[j]){
        return node;
      }
    }
  }
  return null;
};

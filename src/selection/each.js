import "selection";

d7_selectionPrototype.each = function(callback){
  
  var group, node;
  
  for(var i=0, n=this.length; i<n; i++){
    for(var j=0, m=(group = this[i]).length; j<m; j++ ){
      if(node=group[j]){
        callback.call(node, node.__data__, j, i);
      }
    }
  }
  
  return this;
};

import "selection";

d7_selectionPrototype.data = function(value){

  value = typeof value === "function" ? value : function(){
    return value;
  };  
  
  var update = d7_selection([]),
      enter = d7_selection_enter([]);
      
  var group;
      
  for( var i=0, n=this.length; i<n; i++ ){
    bind( group = this[i], value.call(group, group))
  }    
      
  function bind( group, value ){
    
  }
  
}



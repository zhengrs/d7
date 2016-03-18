import "selection";

d7_selectionPrototype.data = function(value){

  value = typeof value === "function" ? value : (function(value){
    return function(){
      return value;
    };
  })(value);  
  
  var update = d7_selection([]),
      enter = d7_selection_enter([]),
      exit = d7_selection([]);
      
  var group;
      
  for( var i=0, n=this.length; i<n; i++ ){
    bind( group = this[i], value.call(group));    // here need to be edited later
  }    
  
  update.enter = function(){
    return enter;
  }
  
  update.exit = function(){
  	return exit;
  }
  
  return update;
      
  function bind( group, value ){
    var n = group.length, 
        m = value.length,
        n0 = Math.min(m,n),
        node,
        nodeData,
        i;
        
    var updateGroup = new Array(m), // different from d3 .
        enterGroup = new Array(m),
        exitGroup = new Array(n);
    
    for(i=0; i<n0; i++){
      node = group[i];
      nodeData = value[i];
      if( node ){
        node.__data__ = nodeData;
        updateGroup[i] = node;
      }
      else{
        enterGroup[i] = d7_selection_dataNode(nodeData);
      }
    }
    
    // fill enterGroup
    for(; i<m; i++){
      nodeData = value[i];
      enterGroup[i] = d7_selection_dataNode(nodeData);
    }
    
    for(; i<n; i++){
    	node = group[i];
    	exitGroup[i] = node;
    }
    
    enterGroup.parentNode = updateGroup.parentNode = exitGroup.parentNode = group.parentNode;
    
    enter.push(enterGroup);
    update.push(updateGroup);
    exit.push(exitGroup);
  }
  
}

function d7_selection_dataNode(data){
  return {__data__:data};
}




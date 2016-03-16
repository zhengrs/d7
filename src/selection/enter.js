import "../core/subclass";
import "selection";

function d7_selection_enter(groups){
  d7_subclass(groups, d7_selection_enterPrototype);
  return groups;
}

var d7_selection_enterPrototype = [];

d7_selection_enterPrototype.append = d7_selectionPrototype.append;

d7_selection_enterPrototype.select = function(selector){
  
  var subgroups = [], subgroup, group, node, subnode;
  
  for(var i=0, n=this.length; i<n; i++){
    subgroups.push( subgroup = [] );
    subgroup.parentNode = (group=this[i]).parentNode;
    for(var j=0, m=group.length; j<m; j++){
      if( node=group[j] ){
        subgroup.push( subnode = selector.call(group.parentNode, node.__data__, j) );
        if( subnode ){
          subnode.__data__ = node.__data__;
        }
      }
      else{
        subgroup.push(null);
      }
    }
  }
  return d7_selection_enter(subgroups);
};

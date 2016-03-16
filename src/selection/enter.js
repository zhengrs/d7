import "../core/subclass";
import "selection";

function d7_selection_enter(groups){
  d7_subclass(groups, d7_selection_enterPrototype);
  return groups;
}

var d7_selection_enterPrototype = [];

d7_selection_enterPrototype.append = d7_selectionPrototype.append;

d7_selection_enterPrototype.select = function(selector){
  
};

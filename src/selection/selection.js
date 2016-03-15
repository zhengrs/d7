import "../core/subclass.js"

//  d7_selection
//  d7_select
//  d7_selectAll
//  d7_selectionPrototype

function d7_selection(groups){
  d7_subclass(groups, d7_selectionPrototype);
}

var d7_select = function(s,n){  
  return n.querySelector(s);  
},
d7_selectAll = function(s,n){
  return n.querySelectorAll(s);
};


var d7_selectionPrototype = [];


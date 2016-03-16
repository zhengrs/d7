import "core/";
import "selection/";

d7 = {};

d7.select = function(selector){
  var groups, group;
  
  if( typeof selector === "string" ){
    groups = [ group = [d7_select(selector,d7_document)] ];
  }
  else{
    groups = [ group = [selector] ];
  }
  group.parentNode = d7_documentElement(d7_document);
  
  return d7_selection(groups);
};

d7.selectAll = function(selector){
  var groups, group;
  
  if(typeof selector === "string"){
    groups = [ group = d7_array(d7_selectAll(selector, d7_document)) ];
  }
  else{
    groups = [ group = d7_array(selector) ];
  }
  group.parentNode = d7_documentElement(d7_document);
  
  return d7_selection(groups);
};



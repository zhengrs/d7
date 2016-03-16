//import "core/";

// src/core/array.js
var d7_array = function(list){
  return [].slice.call(list);
};

// src/core/class.js
function d7_class(ctor, properties){
  for(var key in properties){
    Object.defineProperty(ctor.prototype,key,{
      value:properties[key],
      enumerable:false
    });
  }
}

// src/core/document.js
var d7_document = this.document;

  // node might be : node, document, window
function d7_documentElement(node){
  return node && (node.ownerDocument || node || node.document).documentElement; 
}

// src/core/subclass.js
var d7_subclass = {}.__protot__ ?

function(o,p){
  o.__proto__ = p;
} : 
function(o,p){
  for(var key in p){
    o[key] = p[key];
  }
};


//import "selection/";

// src/selection/selection.js
function d7_selection(groups){
  d7_subclass(groups, d7_selectionPrototype);
  return groups;
}

var d7_select = function(s,n){  
  return n.querySelector(s);  
},
d7_selectAll = function(s,n){
  return n.querySelectorAll(s);
};

var d7_selectionPrototype = [];

// src/selection/select.js
d7_selectionPrototype.select = function(selector){
  
  var subgroups=[], subgroup, group, node, subnode;
  
  selector = d7_selection_selector(selector);
  
  for(var i=0, n=this.length; i<n; i++){
    subgroups.push(subgroup=[]);
    subgroup.parentNode = (group=this[i]).parentNode;
    for(var j=0, m=group.length; j<m; j++){
      if(node=group[j]){
        subgroup.push( subnode = selector.call(node, node.__data__, j) );
        if(subnode && "__data__" in node){
          subnode.__data__ = node.__data__;
        }
      }
      else{
        subgroup.push(null);
      }
    }
  }
  return d7_selection(subgroups);
};

function d7_selection_selector(selector){
  return typeof selector === "function" ? selector : function(){
    return d7_select(selector, this);
  };
}


// src/selection.selectAll.js
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

function d7_selection_selectorAll(selector){
  return typeof selector === "function" ? selector : function(){
    return d7_selectAll(selector, this); 
  };
}


// src/selection/append.js
d7_selectionPrototype.append = function(name){
  
  var creator = d7_selection_creator(name);
  
  return this.select(function(d,i){
    return this.appendChild(creator.call(this, this.__data__, i));
  });
};

function d7_selection_creator(name){
  return typeof name === "function" ? name : function(){
    return d7_document.createElement(name);
  };
}


// src/d7.js
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



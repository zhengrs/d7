
var d7_array = function(list){
  return [].slice.call(list);
};

function d7_class(ctor, properties){
  for(var key in properties){
    Object.defineProperty(ctor.prototype,key,{
      value:properties[key],
      enumerable:false
    });
  }
}

var d7_subclass = {}.__protot__ ?

function(o,p){
  o.__proto__ = p;
} : 
function(o,p){
  for(var key in p){
    o[key] = p[key];
  }
};

function d7_Map(){
  this._ = Object.create(null);
}

d7_class(d7_Map, {
  has: d7_map_has,
  get: d7_map_get,
  set: d7_map_set,
  remove: d7_map_remove,
  keys: d7_map_keys,
  values: d7_map_values,
  entries: d7_map_entries,
  size: d7_map_size,
  empty: d7_map_empty,
  forEach: d7_map_forEach
});

function d7_map_has(key){
  return key in this._;
}
 
function d7_map_get(key){
  if(key in this._){
    return this._[key];
  }
}

function d7_map_set(key,value){
  return this._[key] = value;
}

function d7_map_remove(key){
  return key in this._ && delete this._[key];
}

function d7_map_keys(){
  var keys = [];
  for(var key in this._){
    keys.push(key);
  }
  return keys;
}

function d7_map_values(){
  var values = [];
  for( var key in this._ ){
    values.push(this._[key]);
  }
  return values;
}

function d7_map_entries(){
  var entries = [];
  for( var key in this._ ){
    entries.push({key: key, value: this._[key]});
  }
  return entries;
}

function d7_map_size(){
  var size = 0;
  for( var key in this._ ){
    size++;
  }
  return size;
}

function d7_map_empty(){
  for(var key in this._){
    return false;
  }
  return true;
}

function d7_map_forEach(f){
  for(var key in this._){
    f.call(this._, key, this._[key]);
  }
}

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
    d7_select(selector, this);
  };
}

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

function d7_selection_selectorAll = function(selector){
  return typeof selector === "function" ? selector : function(){
    return this.querySelectorAll(selector);
  };
}



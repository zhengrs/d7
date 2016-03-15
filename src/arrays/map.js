import "../core/class.js"

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



import "selection";


// Element.getAttribute(name)
d7_selectionPrototype.attr = function(name, value){
  
  if(arguments.length < 2){
    if( typeof name === "string" ){
      var node = this.node();
      return node.getAttribute(name) :
    }
    // todo the case that name is an object
  }
  else{
    return this.each(d7_selection_attr(name, value));
  }
};

// return function with the this object as each node element
function d7_selection_attr(name, value){
  
  // value === null
  function attrNull(){
    this.removeAttribute(name);
  }
  
  // typeof value === "string"
  function attrConstant(){
    this.setAttribute(name, value);
  }
  
  // typoef value === "function"
  function attrFunction(){
    this.setAttribute( name, value.apply(this,arguments));
  }
  
  return typeof value === "function" ? attrFunction : (
      typeof value === "string" ? attrConstant : attrNull
    );
}










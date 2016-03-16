var d7_document = this.document;

// node might be : node, document, window
function d7_documentElement(node){
  return node && (node.ownerDocument || node || node.document).documentElement; 
}

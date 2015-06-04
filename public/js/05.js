function zero(){
  return [];
}

function succ(a){
  a.push(true);
  return a;
}

function n123(){
  var a = zero();

  while(a.length < 123){
    a = succ(a);
  }

  return a;
}

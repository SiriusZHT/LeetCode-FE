function myInstanceof(left, right) {
    let proto = Object.getPrototypeOf(left);
    let prototype = right;
    while(right) {
        if(proto === prototype) {
            return true;
        }
        right = right.prototype;
    }
    return false;
}

function myInstanceof(obj, _constructor) {
  let proto = obj.__proto__;
  let prototype = _constructor.prototype;
  while(proto !== null) {
    if(proto == prototype) {
      return true;
    }
    proto = obj.__proto__;
  }
  return false;
}
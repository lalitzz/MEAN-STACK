function adder() {
  var value = 0;
  var a = function(){
    console.log(++value);
  }
  return a;
}

var add = adder();
var add1 = adder();
add();
add1();

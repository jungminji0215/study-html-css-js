var x = 1;

if (true) {
  var x = 19;
  bar();
}

function bar() {
  console.log(x);
}

// foo();
bar();

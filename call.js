function add(a, b, callback) {
    callback(a + b);
  }
  console.log('Antes');
  add(10, 5, function(result) {
    console.log(result);
  });

  console.log('Despues');
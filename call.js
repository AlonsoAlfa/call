function add(a, b, callback) {
    callback(a + b);
  }
  console.log('Antes de la ejecucion');
  add(10, 5, function(result) {
    console.log(result);
  });
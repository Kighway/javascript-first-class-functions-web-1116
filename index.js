function receivesAFunction(callback) {
   callback ()
}

function returnsANamedFunction() {
  function doesNothing () {
    return 1
  }
  return doesNothing
}

function returnsAnAnonymousFunction() {
  return function () {1}
}

const first = () => {
  const greet = "Hi";
  const second = () => {
    // child scope
    alert(greet);
  };

  return second;
};

const newFunc = first();

newFunc();

//Closure makes the child scope always has the access to parent scope.

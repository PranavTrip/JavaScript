// Iterators in JS
function myIterable() {
  let i = 0;
  return {
    next: function () {
      if (i < 5) {
        i++;
        return { done: false, value: i };
      } else {
        return { done: true };
      }
    },
  };
}
myIterable(3);

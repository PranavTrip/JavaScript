// Promises in JavaScript
let myPromise = new Promise(function (resolve, reject) {
  const x = 1;
  const y = 2;
  if (x == 1 && y == 2) {
    resolve();
  } else {
    reject();
  }
});
myPromise
  .then(function () {
    console.log(`The promise was resolved`);
  })
  .catch(function () {
    console.log("The promise was rejected, SORRY!");
  });

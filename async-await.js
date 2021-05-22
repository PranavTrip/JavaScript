// Async-Await in JavaScript
async function func() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Done"), 3000);
  });
  let result = await promise;
  console.log(result);
}
console.log("Waiting for the promise to get reolved");
func();

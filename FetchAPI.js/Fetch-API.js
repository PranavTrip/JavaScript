// Fetch API in JS is an alternative of AJAX and XML Http Request

// GET Request
fetch(" https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.error(user));

// POST Request
// let data1={

//   "userId": 10,
//   "id": 101,
//   "title": "Hello Pranav",
//   "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
// };
// const options={
//   method='POST',
//   body=JSON.stringify(data),
//   headers:{
//     'Content-Type':'applications/json'
//   }
// }
// fetch('https://jsonplaceholder.typicode.com/posts',options)
// .then(res=>res.json())
// .then(res.console.log(res));

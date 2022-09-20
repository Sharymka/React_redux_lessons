// export function viewPromise() {
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       //   resolve("Приет");
//       reject("error");
//     }, 1000);
//   })
//     .then((value) => console.log(value))
//     .catch((error) => console.error(error));
// }

// export async function viewPromise() {
//   try {
//     const result = await new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve("Приет");
//         // reject("error");
//       }, 1000);
//     });
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// }

// export function fetchData() {
//   fetch("https://dog.ceo/api/breeds/image/random")

//   fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((response) => {
//       if (response.ok) return response.json();
//       throw new Error("error message");
//     })
//     .then((data) => console.log(data))
//     .catch((error) => console.error(error.message));
// }

export function fetchData() {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "foo",
      bar: "bar",
      userId: 1,
    }),
    headers: {
      "content-type": "aplication/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

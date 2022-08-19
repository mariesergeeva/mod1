// const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";
// let isLoading = false;
// const createNewPost = () => {
//   isLoading = true;
//   fetch(POSTS_URL, {
//     method: "POST"
//   })
//     .then((response) => response.json())
//     .then((result) => {
//       console.log("result", result);
//     })
//     .catch((error) => {
//       console.log("error", error);
//     })
//     .finally(() => {
//       isLoading = false;
//     });
// };
// createNewPost();

const POSTS_URL = "https://jsonplaceholder.typicode.com/posts"
let isLoading = false
async function createNewPost() {
    try {
        isLoading = true;
        let response = await fetch(POSTS_URL, {
            method: "POST"
        })
        let result = await response.json()
        console.log("result", result)
    }
    catch {
        console.log("error", error)
    }
    finally {
        isLoading = false
    }
}
createNewPost()
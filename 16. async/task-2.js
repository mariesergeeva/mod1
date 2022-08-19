const TODOS_URL = "https://jsonplaceholder.typicode.com/todos";
const getTodosByIds = (ids) => {
  const requests = ids.map((id) => fetch(`${TODOS_URL}/${id}`));
  Promise.all(requests)
    .then((responses) => {
      const dataResults = responses.map((data) => data.json());
      return Promise.all(dataResults);
    })
    .then((allTasks) => {
      console.log(allTasks);
    })
    .catch((error) => {
      console.log(error);
    });
};
getTodosByIds([43, 21, 55, 100, 10]);

async function getTodosByIds1(ids) {
    try {
        let requests = await ids.map((id) => fetch(`${TODOS_URL}/${id}`))
        let responses = await Promise.all(requests)
        let allTasks = await Promise.all(responses.map((data) => data.json()))
        console.log(allTasks)
    }
    catch {
        console.log(error)
    }
}
getTodosByIds1([43, 21, 55, 100, 10])
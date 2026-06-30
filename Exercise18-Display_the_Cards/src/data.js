async function getData(params) {
    let data = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data_parsed = await data.json();
    return data_parsed;
}

export default getData

const queryString = window.location.search;
const params = new URLSearchParams(queryString);

const param = params.get("solution"); // "value2"

const solution = JSON.parse(decodeURIComponent(param));

let box = document.getElementById('me');

box.innerText = solution;








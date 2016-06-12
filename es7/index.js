
const fetch = require('node-fetch');


// fetch("https://api.github.com/gists/public").then(response => {
//     if(response.status == 200) {
//         response.json().then(result => {
//             console.log(result.length);
//         })
//     }
// });

(async function () {
    console.log('hello');
    
    const response = await fetch("https://api.github.com/gists/public");
    const result = await response.json();

    console.log(result.length);
}());

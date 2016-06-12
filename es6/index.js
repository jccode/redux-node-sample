
const p1 = Promise.reject(12);

console.log(p1);

p1.then(
    ret => console.log('success: ' + ret),
    err => console.log('error: ' + err)
);

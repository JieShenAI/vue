let a = [0, 1, 2, 3, 4, 5, 7, 8];
// a.splice(7, 0, 9, 10, 11);
// console.log(a);

let v = 7;
let idx = 0;
for (let t of a) {
    idx++;
    if (t === v) {
        break;
    }
}
a.splice(idx, 0, 99);
console.log(a);
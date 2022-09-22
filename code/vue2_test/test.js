let arr = {
    a: {
        id: "1",
        v: "10",
    },
    b: {
        id: "2",
        v: "20",
    }
};

let v = arr.find((o)=>"1"===o.id).v;
console.log(v);

// 객체 해체 할당 (destructing assignment)
let {b,a,c} = {a: 1, b: 2};
let o = {a: 1, b: 2};

console.log(a,b,c=3);
console.log(o);

// array 해체 할당
let [p,q, r=3] = [1,2];
console.log(q,r,p);

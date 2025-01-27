let num = [1, 2, 3, 4];

let result = num.reduce((res, el) => res + el);

console.log(result);

// Or , to see step by step execution

let arr = [1, 2, 3, 4];

let finalVal = num.reduce((res, el) => {
    console.log(res);
    return res+el;
});

console.log(finalVal);

const initial = 7;
const num = 1;
//let result = 0;

function sum() {
    result = initial + num;
    return result;
}
sum(initial, num);

function pow(result) {
    return result ** 2;
}
console.log(pow(result));

console.log(pow(sum(initial, num)));

const pipe = (...args) => (...param) => {
        if(args.length === 1) return args[0](...param);
        const midRes = args[0](...param);
        return pipe(...args.slice(1))(midRes);
};
pipe(sum, pow, console.log)(initial, num);


const pipe_1 = (...fns) => (...param) => fns.reduce((acc, currentFn) => currentFn(acc), param[0]); 
pipe_1(sum, pow, console.log)(initial, num);

const compose = (...fns) => (...param) => fns.reduceRight((acc, currentFn) => currentFn(acc), param[0]);
compose(console.log, pow, sum)(initial, num);

const compose_2 = 
        (...args) => (...param) => {
        if(args.length === 1) return args[0](...param);
        const midRes = args[args.length - 1](...param);
        return compose(...args.slice(0, -1))(midRes);
};
compose_2(console.log, pow, sum)(initial, num);
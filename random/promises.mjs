const getPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('promise resolved');
        }, 3000);
    })
}

const foo = () => {
    setTimeout(() => {
        console.log('foo');
    }, 0);
}

const bar = () => {
    const sum = 2 + 2;
    console.log(sum);
}

// getPosts().then((posts) => {
//     console.log(posts);
// });

const promise = getPromise();
foo();
bar();

console.log(promise);
promise.then((data) => {
    console.log(data);
});

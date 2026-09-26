// // Create a Promise that resolves after 3 seconds

// function wait(ms) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve();
//         }, ms)
//     })
// }

// wait(2000).then(() => {
//     console.log('Done');

// })


// Promise.resolve(10)
//     .then((val) => {
//         console.log(val);
//         return val * 2;
//     })
//     .then((val) => {
//         console.log(val);
//         return val * 2;
//     })
//     .then((val) => {
//         console.log(val);
//     })


// let timer;

// function debounce() {
//     clearTimeout(timer);

//     timer = setTimeout(() => {
//         console.log("Debounce");

//     }, 2000)
// }

// debounce();


let allow = true;

function throttling() {
    if (!allow) return;

    console.log('Function Called');
    allow = false;

    setTimeout(() => {
        allow = true;
    }, 1000)

}
throttling();
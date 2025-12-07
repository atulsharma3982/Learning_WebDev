// Create a hacking simulator which has green background and it shows these messages with random delay of 1 to 7 seconds 

//     Initializing Hacking...
//     Reading your Files...
//     Password files Detected...
//     Sending all passwords and personal files to server...
//     Cleaning up...

//     The three dots must blink so that it looks like a real terminal


//my solution doesn't work

let a = document.body;
// a.style.background = "Green";
let i = 0;
async function heckingPromise(html) {
    async function dots(params) {
        return new Promise((resolve, reject) => {
            let div = document.createElement("span");
            a.children[i].append(div);
            const intervalID = setInterval(() => {
                a.children[i].firstElementChild.innerHTML += '.';
            }, 300);
            setTimeout(() => {
                clearInterval(intervalID);
                resolve();
            }, 1000);
        })
    }
    let rand = Math.ceil(Math.random() * 10);
    while (rand > 7) {
        rand = Math.ceil(Math.random() * 10);
    }
    console.log(rand);
    return new Promise((resolve, reject) => {
        a.innerHTML += html;
        let x = true;
        async function dotss(params) {
            await dots();
            // a.children[i].firstElementChild.remove();
        }
        // while (x) {
        //     dotss();
        // }
        setTimeout(() => {
            // x = false;
            // console.log(i);
            i++;
            resolve();
        }, rand * 1000);
    })
}
async function beginHecking(params) {
    await heckingPromise(`<h3>>>> Initializing Hacking</h3>`);
    await heckingPromise(`<h3>>>> Reading your Files</h3>`);
    await heckingPromise(`<h3>>>> Password files Detected</h3>`);
    await heckingPromise(`<h3>>>> Sending all passwords and personal files to server</h3>`);
    await heckingPromise(`<h3>>>> Cleaning up</h3>`);
}
beginHecking();



//chatgpt's solution

// document.body.style.background = "#04050e";
// let i = 0;

// async function heckingPromise(message) {
//     let rand;
//     do {
//         rand = Math.ceil(Math.random() * 10);
//     } while (rand > 7);
//     console.log("Delay (s):", rand);

//     return new Promise((resolve) => {
//         // Create <h3> with text and span for blinking dots
//         const h3 = document.createElement("h3");
//         h3.textContent = message;

//         const dotSpan = document.createElement("span");
//         h3.appendChild(dotSpan);
//         document.body.appendChild(h3);

//         // Blinking dots animation
//         let dotCount = 0;
//         const intervalID = setInterval(() => {
//             dotCount = (dotCount + 1) % 4; // cycle through "", ".", "..", "..."
//             dotSpan.textContent = ".".repeat(dotCount);
//         }, 300);

//         setTimeout(() => {
//             clearInterval(intervalID);
//             dotSpan.textContent = "..."; // final state
//             resolve();
//         }, rand * 1000);
//     });
// }

// async function beginHecking() {
//     await heckingPromise(">>> Initializing Hacking");
//     await heckingPromise(">>> Reading your Files");
//     await heckingPromise(">>> Password files Detected");
//     await heckingPromise(">>> Sending all passwords and personal files to server");
//     await heckingPromise(">>> Cleaning up");
// }

// beginHecking();



//harry's solution

// const addItem = async (item) => {
//     await randomDelay();
//     let div = document.createElement("div");
//     div.innerHTML = item;
//     document.body.append(div)
// }

// const randomDelay = () => {
//     return new Promise((resolve, reject) => {
//         timeout = 1 + 6 * Math.random();
//         setTimeout(() => {
//             resolve()
//         }, timeout * 1000);
//     })
// }

// async function main() {


//     let t = setInterval(() => {
//         let last = document.body.getElementsByTagName("div");
//         last = last[last.length - 1]
//         if (last.innerHTML.endsWith("...")) {
//             last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length - 3)
//         }
//         else {

//             last.innerHTML = last.innerHTML + "."
//         }

//     }, 300);


//     let text = [">>> Initialized Hacking now reading your data",
//         ">>> Reading your Files",
//         ">>> Password files Detected",
//         ">>> Sending all passwords and personal files to server",
//         ">>> Cleaning up"]

//     for (const item of text) {
//         await addItem(item)
//     }

//     await randomDelay()
//     clearInterval(t)

// }
// main()
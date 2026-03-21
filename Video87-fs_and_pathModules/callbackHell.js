fs.writeFile("hello2.txt", "Hello again, Welcome", () => {
    console.log("done");
    fs.readFile("hello2.txt", (error, data) => {
        console.log(error, data.toString());
        // again
        fs.writeFile("hello2.txt", "Hello again, Welcome", () => {
            console.log("done");
            fs.readFile("hello2.txt", (error, data) => {
                console.log(error, data.toString());
                // again
                fs.writeFile("hello2.txt", "Hello again, Welcome", () => {
                    console.log("done");
                    fs.readFile("hello2.txt", (error, data) => {
                        console.log(error, data.toString());
                        // again
                        fs.writeFile("hello2.txt", "Hello again, Welcome", () => {
                            console.log("done");
                            fs.readFile("hello2.txt", (error, data) => {
                                console.log(error, data.toString());
                                // again
                                fs.writeFile("hello2.txt", "Hello again, Welcome", () => {
                                    console.log("done");
                                    fs.readFile("hello2.txt", (error, data) => {
                                        console.log(error, data.toString());
                                        // again
                                        fs.writeFile("hello2.txt", "Hello again, Welcome", () => {
                                            console.log("done");
                                            fs.readFile("hello2.txt", (error, data) => {
                                                console.log(error, data.toString());
                                                // again
                                                fs.writeFile("hello2.txt", "Hello again, Welcome", () => {
                                                    console.log("done");
                                                    fs.readFile("hello2.txt", (error, data) => {
                                                        console.log(error, data.toString());
                                                        // again
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})
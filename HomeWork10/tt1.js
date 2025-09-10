function wait(ms) {
    return new Promise((resolve) => {setTimeout(resolve,ms);});
}

function waitRun() {
    console.log("Log 1");
    return wait(1000)
        .then(() => console.log("Log 2 after 1s"))
        .then(() => wait(500))
        .then(() => console.log("Log 3 after 0.5s"))
}

async function waitAsync() {
    console.log("Log 1");
    await wait(1000);
    console.log("Log 2 after 1s");
    await wait(500);
    console.log("Log 3 after 0.5s");
}

async function main() {
    await waitRun();
    await wait(2000);
    await waitAsync();
}

main().catch(console.error);
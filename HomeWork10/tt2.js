// Завдання B — валідація та reject

// Зроби delayedLogSafe(message, delay), яка:
// — резолвиться і логує повідомлення, якщо message — рядок, а delay — невід’ємне число
// — реджектить з TypeError, якщо аргументи некоректні
// Перевір через .then/.catch.
function delayedLogSafe(message, delay) {
    return new Promise((resolve) => {
        if(typeof message !== 'string' ) return rejects(new TypeError("message must be a string"));
        if(typeof delay !== 'number' || delay < 0) return rejects(new TypeError("Delay must be a non-negtive number"));

        setTimeout(() => {
        console.log(message);
        resolve(message); 
        }, delay);
    });
}


delayedLogSafe("Message here", 2000).then((msg) => console.log("Resolved: ", msg)).catch((err) => console.log("Rejected", err.name, err.message))
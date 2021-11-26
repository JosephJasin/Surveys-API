module.exports = {
    httpPort: 80,

    survey: {
        question: {
            minSize: 10,
            maxSize: 256,
        },
        answer : {
            minSize: 1,
            maxSize: 256,
        },
        answers : {
            minNumber: 2,
            maxNumber: 10,
        }
    }
}

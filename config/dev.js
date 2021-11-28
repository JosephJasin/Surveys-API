module.exports = {
    httpPort: 3000,

    survey: {
        question: {
            minLength: 10,
            maxLength: 256,
        },
        answer: {
            minLength: 1,
            maxLength: 256,
            minItems: 2,
            maxItems: 10,
        }
    }
}

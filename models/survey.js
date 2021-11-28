class Survey {

    /**
     * @param {string} question
     * @param {string[]} answers
     * @param {number[]} counter
     */
    constructor(question, answers, counter) {
        this.question = question;
        this.answers = answers;
        this.counter = Array(answers.length).fill(0);
    }
}

module.exports = Survey;
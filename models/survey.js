const {survey: {question, answer, answers}} = require('../config/config.js');

class Survey {

    /**
     * @param {string} question
     * @param {string[]} answers
     * @param {number[]} counter
     */
    constructor(question, answers, counter) {
        this.question = question;

        if (Array.isArray(answers)) {
            this.answers = answers.map(String);
            this.counter = counter ?? Array(answers.length).fill(0);
        }
    }

    /**
     * Check if the survey attributes match the configs rules.
     * @returns {Object | null}
     */
    validate = () => {
        if (!Array.isArray(this.counter) || typeof (this.question) !== 'string')
            return {type: 'Type mismatch'};

        let errors = {};

        //Validate the question.
        if (this.question.length < question.minSize)
            errors.question = `Minimum question length is ${question.minSize}`;
        else if (this.question.length > question.maxSize)
            errors.question = `Maximum question length is ${question.maxSize}`;

        //Validate the answers.
        if (this.answers.length < answers.minNumber)
            errors.answers = `Minimum number of answers is  ${answers.minNumber}`;
        else if (this.answers.length > answers.maxNumber)
            errors.answers = `Maximum number of answers is  ${answers.maxNumber}`;

        //Validate each of the answers.
        for (const i of this.answers) {
            if (i.length < answer.minSize) {
                errors.answer = `Minimum answer length is ${answer.minSize}`;
                break;
            }

            if (i.length > answer.maxSize) {
                errors.answer = `Maximum answer length is ${answer.maxSize}`;
                break;
            }
        }

        if (errors.question || errors.answer || errors.answers)
            return errors;

        return null;
    }
}

module.exports = Survey;
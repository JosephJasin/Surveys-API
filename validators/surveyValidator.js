const Ajv = require("ajv")
const ajv = new Ajv();

const {survey: {question, answer}} = require('../config/config.js');

//Check if the JSON scheme is valid for createSurvey
const createSurveyScheme = {
    type: "object",
    properties: {
        question: {
            type: "string",
            minLength: question.minLength,
            maxLength: question.maxLength,
        },
        answers: {
            type: "array",
            items: {
                type: "string",
                minLength: answer.minLength,
                maxLength: answer.maxLength,
            },
            minItems: answer.minItems,
            maxItems: answer.maxItems,
        }
    },
    required: ["question", "answers"],
    additionalProperties: false
}

const createSurveyValidator = ajv.compile(createSurveyScheme);

const createSurvey = (req, res, next) => {
    const isValid = createSurveyValidator(req.body);

    if (!isValid)
        res.status(400).json({error: "Invalid JSON format"})
    else
        next();
}

//Check if the JSON scheme is valid for answerSurvey
const answerSurveyScheme = {
    type: "object",
    properties: {
        answer: {type: "integer"},
    },
    required: ["answer"],
    additionalProperties: false
}

const answerSurveyValidator = ajv.compile(answerSurveyScheme);

const answerSurvey = (req, res, next) => {
    const isValid = answerSurveyValidator(req.body);

    if (!isValid)
        res.status(400).json({error: "Invalid JSON format"})
    else
        next();
}

module.exports = {
    createSurvey,
    answerSurvey,
}
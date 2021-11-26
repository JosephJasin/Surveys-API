const Survey = require('../models/survey.js');

const surveys = [];

const createSurvey = (req, res) => {
    const survey = new Survey(req.body.question, req.body.answers);
    const error = survey.validate();

    if (error)
        res.status(400).json({error});
    else {
        const id = surveys.push(survey) - 1;
        res.json({id});
    }
}

const getSurvey = (req, res) => {
    const survey = surveys[req.params.id];
    if (survey === undefined)
        res.status(404).json({error: 'Invalid survey id'});
    else
        res.json({question: survey.question, answers: survey.answers});
}

const getSurveyResult = (req, res) => {
    const survey = surveys[req.params.id];
    if (survey === undefined)
        res.status(404).json({error: 'Invalid survey id'});
    else
        res.json(survey);
}

const answerSurvey = (req, res) => {
    const survey = surveys[req.params.id];

    if (survey === undefined) {
        res.status(404).json({error: 'Invalid survey id'});
        return;
    }

    if (typeof(req.body.answer) !== 'number' || req.body.answer < 0 || req.body.answer >= survey.answers.length) {
        res.status(404).json({error: 'Invalid answer'});
        return;
    }

    survey.counter[req.body.answer]++;

    res.json("success")
}

module.exports = {
    createSurvey,
    getSurvey,
    answerSurvey,
    getSurveyResult,
}
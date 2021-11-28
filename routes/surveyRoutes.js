const express = require('express');
const router = express.Router();

const surveyController = require('../controllers/surveyController.js');
const surveyValidator = require('../validators/surveyValidator.js');

//Create a survey
router.post('/', surveyValidator.createSurvey, surveyController.createSurvey);

//Get a survey by id
router.get('/:id', surveyController.getSurvey);

//Answer a survey
router.post('/:id', surveyValidator.answerSurvey, surveyController.answerSurvey);

//Get a survey result by id
router.get('/result/:id', surveyController.getSurveyResult);


module.exports = router;


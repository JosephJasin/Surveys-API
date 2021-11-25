const express = require('express');
const router = express.Router();

const surveyController = require('../controllers/surveyController.js');

//Create a survey
router.post('/' , surveyController.createSurvey);

//Get a survey by id
router.get('/:id', surveyController.getSurvey);

//Answer a survey
router.post('/:id', surveyController.answerSurvey);

//Get a survey result by id
router.get('/result/:id', surveyController.getSurveyResult);



module.exports = router;


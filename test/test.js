const assert = require('assert');
const express = require('express');
const request = require('supertest');

const surveyRoutes = require('../routes/surveyRoutes.js');

const app = express();
app.use(express.json());
app.use('/api/survey', surveyRoutes);


describe("General API Test", async () => {
    let id;
    it('Create survey', async () => {
        const res = await request(app).post('/api/survey').send({
            question: "Question 1",
            answers: [
                "answer 1",
                "answer 2",
                "answer 3"
            ]
        });

        id = res.body.id;
        assert.notEqual(id, undefined)
    });

    it("Create a survey with invalid number of answers", async () => {
        const res = await request(app).post('/api/survey').send({
            question: "Question 2",
            answers: [
                "answer 1",
            ]
        });

        assert.notEqual(res.body.error, undefined)
    });

    it('Get survey', async () => {
        const res = await request(app).get(`/api/survey/${id}`);

        assert.notEqual(res.body.question, undefined);
        assert.notEqual(res.body.answers, undefined);
    })

    it('Answer a survey', async () => {
        const res = await request(app).post(`/api/survey/${id}`).send({answer: 0});

        assert.equal(res.body, "success");
    })

    it('Get a survey result', async () => {
        const res = await request(app).get(`/api/survey/result/${id}`);

        assert.notEqual(res.body.question, undefined);
        assert.notEqual(res.body.answers, undefined);
        assert.equal(res.body.counter[0], 1);
    })
});



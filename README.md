
# Surveys API
**Environment**

- Node: v16.13.0
- npm: 8.1.4


**don't forget to run 😁**

	npm install

**On Windows**:

**Run in production mode**

    npm start

**Run in dev mode**

    npm run dev_win

**Run tests**

    npm run test_win

**On Linux & Mac**:

**Run in production mode**

    # npm start

**Run in dev mode**

    npm run dev

**Run tests**

    npm test


# Api

**Create a new survey** 
 
 POST: /api/survey <br>
 request body:

     {
	    "question": "Question 1",
	    "answers": [
		    "answer 1",
		    "answer 2"
	    ]
    }
**Answer a survey** 

 POST: /api/survey/:id <br>
 request body: contains the number of the answer not the answer itself
 

    {"answer" : 0}


**Get a survey by id** 

 GET: /api/survey/:id

**Get the results of a survey by id** 

 GET: /api/survey/result/:id


import { configureStore } from '@reduxjs/toolkit';
import createSurveySlice from '../features/createSurvey/createSurveySlice';

export const store = configureStore({
  reducer: {
    createSurvey: createSurveySlice,
  },
});

// PSEUDO CODE:
// MVP
// Landing page --> Routes to make a survey or take a survey areas (2 buttons)
//              --> Has nav header & footer

// Create a survey page --> This page needs to have UI ability to create divs & inputs on click of certain buttons
//                      --> Survey will be made on left 2/3 of screen & right 1/3 of screen will  be dedicated to diff options of what elements the user want's to add to their survey
//                      --> Bottom of survey offers user to save survey. Once saved it will be viewable in the "Take a survey" area
//                      --> All created surveys need to be saved as state & added to state once saved. Possibly saved to firebase? We'll see
//                      --> createSurvey state should be an object of objects.
//                      --> Upon the save of a newly created survey, state should be created to hold the survey's responses.

// Take a survey page --> All names & descriptions of surveys created by people are found here
//                    --> Ability to click the survey the user wants to do and it routes to survey specific page where the form created in the create survey area is displayed
//                    --> Ability to save survey choices.
//                    --> Survey responses will be saved within surveyResponses state under that specific survey id/key
//                    --> Ability to view responses after one has taken a survey/or maybe just view all responses??.


// STRETCH GOALS
// Either allow creator of survey to save draft of survey or allow it to be saved and edited later by specific person who created it.
// Allow survey's to be shareable by the link & does not show up as 404 not found when sharing specific link
// Allow survey creators to view survey responses without taking the survey. Need some sort of authorization.
// Allow survey creators to move different elements into different spaces before saving.
// Allow survey creators to delete/edit their surveys after it's posted.

// Slices of state:
// createSurvey state will hold info of the surveys that are created in realtime. 
//                --> The user will have the ability to add elements onto the page and the info within the elements are saved within the state. 
//                --> Each element will be wrapped in a div and each div will be given a unique id/key. So we can have "addQuestionType: checkbox/radio/number/submit/..etc"
//                --> Each input type will have an attribute of required and an id that will match the for attribute in the label which will be called "title" that the user must fill out
//                --> Each survery itself must have a unique id/key associated with it.
//                --> The state itself will be an object of objects. Each object will have "questionID" "questionTitle" "questionType" "questionOptions"
//                --> Once a survey is created, the unique ID of that survey will be pushed to the surveyResponses state as a new survey
// createSurvey state reducer will have the ability to remove an element of their choosing. Will filter out the div with the id that matches the id of the payload. The reducer will also have the ability to add different elements/inputs depending on the type chosen by the user then the user will be able to add a title and add options. The reducer on the click of the submit button will add the survey ID to surveyResponses state as a new survey.

// surveyResponses state reducer will only have the ability to add saved responses to each createdSurvey and add new surveys as well. 
//                --> The state itself will be an object of objects of objects...etc. The primary level will be the state, the second level will be the different surveys, the tertiary level will be the different results of each survey (separated by unique IDS) and the quarternary level will be the individual responses from on person from that specific survey.

// ***Step 1: Create landing page + routing to different areas
// ***Step 2: Set up slices of state
// ***Step 3. Set up createSurvey reducer --> UI --> dispatches --> separate into components if haven't done already
//        --> Need to set up unique ID system so user can create multiple checkbox questions but the id's of the inputs & containers will be unique each time.**
// Step 4: OnSubmit of survey - once user is ready to save their survey --> push the full survey array of question objects to firebase
// Step 5: Set up the surveysSlice to get info from firebase on load? --> unsure if this will be entirely necessary and if this state is just a useless middleman?

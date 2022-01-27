import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    
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
//                    --> Ability to view responses after one has taken a survey.


// STRETCH GOALS
// Either allow creator of survey to save draft of survey or allow it to be saved and edited later by specific person who created it.
// Allow survey's to be shareable by the link & does not show up as 404 not found when sharing specific link
// Allow survey creators to view survey responses without taking the survey. Need some sort of authorization.
// Allow survey creators to move different elements into different spaces before saving.

// Slices of state:
// createSurvey state reducer will have ability to add different types of elements all wrapped within a div. Each div will be given a unique id/key. So we can have "addInputType: checkbox/range/text/date/email/number/submit/..etc"
//                --> Each input type will have an attribute of required and an id that will match the for attribute in the label which will be called "title" that the user must fill out
//                --> Each survery itself must have a unique id/key associated with it.
// createSurvey state reducer will have the ability to remove an element of their choosing. Will filter out the div with the id that matches the id of the payload.

// surveyResponses state reducer will only have the ability to add saved responses to each createdSurvey. 

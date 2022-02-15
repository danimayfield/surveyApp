import { useSelector } from "react-redux";
import nextId from "react-id-generator";
import { Link, Routes, Route } from "react-router-dom";

const DisplaySurveyPreviews = () => {
  const survey = useSelector((state) => state.surveys);

  return (
    <div>
      {survey.map((survey) => {
        const surveyId = survey.surveyId;
        return (
          <div key={surveyId}>
            <Link to={`${surveyId}`}>
              <div id={surveyId}>
                <p>{survey.surveyTitle}</p>
                <p>{survey.surveyDescription}</p>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default DisplaySurveyPreviews;

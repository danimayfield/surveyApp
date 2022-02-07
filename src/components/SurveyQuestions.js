import nextId from "react-id-generator";
import { useSelector } from "react-redux";

const SurveyQuestions = () => {
  const survey = useSelector((state) => state.createSurvey);

  return (
    <div className="questionsWrapper">
      {survey.map((question) => {
        const id5 = nextId();
        return (
          <div
            className="questionContainer"
            id={question.questionId}
            key={question.questionId}
          >
            <h3>{question.questionTitle}</h3>
            <div>
              {question.questionValues.map((questionValue) => {
                const id3 = nextId();
                const id4 = nextId();
                
                return (
                  <div key={id3} id={id3}>
                    <input
                      type={
                        question.questionType === "checkbox"
                          ? "checkbox"
                          : "radio"
                      }
                      name={
                        question.questionType === "checkbox" 
                         ? id4 
                         : id5
                    }
                      id={id4}
                    />
                    <label htmlFor={id4}>{questionValue}</label>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SurveyQuestions;

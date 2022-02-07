import nextId from "react-id-generator";
import { useSelector } from "react-redux";

const SurveyQuestions = () => {
  const survey = useSelector((state) => state.createSurvey);

  return (
    <div className="questionsWrapper">
      {survey.map((question) => {
        const id4 = nextId();
        return (
          <div
            className="questionContainer"
            id={question.questionId}
            key={question.questionId}
          >
            <h3>{question.questionTitle}</h3>
            <div>
              {question.questionValues.map((questionValue) => {
                const id2 = nextId();
                const id3 = nextId();
                
                return (
                  <div key={id2} id={id2}>
                    <input
                      type={
                        question.questionType === "checkbox"
                          ? "checkbox"
                          : "radio"
                      }
                      name={
                        question.questionType === "checkbox" 
                         ? id3 
                         : id4
                    }
                      id={id3}
                    />
                    <label htmlFor={id3}>{questionValue}</label>
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

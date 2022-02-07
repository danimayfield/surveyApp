import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

import { addElement, removeElement } from "./createSurveySlice";

import nextId from "react-id-generator";
import {
  IoCheckboxOutline,
  IoCheckbox,
  IoRadioButtonOn,
  IoRadioButtonOff,
} from "react-icons/io5";

import SurveyQuestions from "../../components/SurveyQuestions";

const CreateSurvey = () => {
  const dispatch = useDispatch();
  const [status, setStatus] = useState("");
  const [checkedHover, setCheckedHover] = useState(0);
  const [radioHover, setRadioHover] = useState(0);

  const onAddInputHandler = (event, { type }) => {
    event.preventDefault();
    if (type === "checkbox") {
      // Get the values entered by the user:
      const title = document.getElementById("questionTitle").value;
      const check1Name = document.getElementById("checkbox1").value;
      const check2Name = document.getElementById("checkbox2").value;

      // Creating unique IDs:
      const id1 = nextId();

      if (status === "checkbox2") {
        // Dispatch information:
        dispatch(
          addElement({
            questionTitle: title,
            questionId: id1,
            questionType: "checkbox",
            questionValues: [check1Name, check2Name],
          })
        );
      } else if (status === "checkbox3") {
        // Get the values entered by the user:
        const check3Name = document.getElementById("checkbox3").value;

        // Dispatch information:
        dispatch(
          addElement({
            questionTitle: title,
            questionId: id1,
            questionType: "checkbox",
            questionValues: [check1Name, check2Name, check3Name],
          })
        );
      } else if (status === "checkbox4") {
        // Get the values entered by the user:
        const check3Name = document.getElementById("checkbox3").value;
        const check4Name = document.getElementById("checkbox4").value;

        // Dispatch information:
        dispatch(
          addElement({
            questionTitle: title,
            questionId: id1,
            questionType: "checkbox",
            questionValues: [check1Name, check2Name, check3Name, check4Name],
          })
        );
      } else if (status === "checkbox5") {
        // Get the values entered by the user:
        const check3Name = document.getElementById("checkbox3").value;
        const check4Name = document.getElementById("checkbox4").value;
        const check5Name = document.getElementById("checkbox5").value;

        // Dispatch information:
        dispatch(
          addElement({
            questionTitle: title,
            questionId: id1,
            questionType: "checkbox",
            questionValues: [
              check1Name,
              check2Name,
              check3Name,
              check4Name,
              check5Name,
            ],
          })
        );
      }
      //   Reset everything
      setStatus("none");
    } else if (type === "radio") {
      // Get the values entered by the user:
      const title = document.getElementById("questionTitle").value;
      const radio1Name = document.getElementById("radio1").value;
      const radio2Name = document.getElementById("radio2").value;

      // Creating unique IDs:
      const id1 = nextId();

      if (status === "radio2") {
        // Dispatch information:
        dispatch(
          addElement({
            questionTitle: title,
            questionId: id1,
            questionType: "radio",
            questionValues: [radio1Name, radio2Name],
          })
        );
      } else if (status === "radio3") {
        // Get the values entered by the user:
        const radio3Name = document.getElementById("radio3").value;

        // Dispatch information:
        dispatch(
          addElement({
            questionTitle: title,
            questionId: id1,
            questionType: "radio",
            questionValues: [radio1Name, radio2Name, radio3Name],
          })
        );
      } else if (status === "radio4") {
        // Get the values entered by the user:
        const radio3Name = document.getElementById("radio3").value;
        const radio4Name = document.getElementById("radio4").value;

        // Dispatch information:
        dispatch(
          addElement({
            questionTitle: title,
            questionId: id1,
            questionType: "radio",
            questionValues: [radio1Name, radio2Name, radio3Name, radio4Name],
          })
        );
      }

      //   Reset everything
      setStatus("none");
    }
  };

  return (
    <div>
      <h2>Create A Survey!</h2>
      <form className="createSurveyForm" id="createSurveyForm">
        <SurveyQuestions />
        <input type="submit" value="Save Survey" />
      </form>
      <div>
        <h4>Add:</h4>
        <ul>
          <li>
            A Checkbox Question
            <p>Select how many options you want:</p>
            <i
              onMouseEnter={() => setCheckedHover(1)}
              onMouseLeave={() => setCheckedHover(0)}
              onClick={() => setStatus("checkbox2")}
            >
              {checkedHover > 0 ? <IoCheckbox /> : <IoCheckboxOutline />}
            </i>
            <i
              onMouseEnter={() => setCheckedHover(1)}
              onMouseLeave={() => setCheckedHover(0)}
              onClick={() => setStatus("checkbox2")}
            >
              {checkedHover > 0 ? <IoCheckbox /> : <IoCheckboxOutline />}
            </i>
            <i
              onMouseEnter={() => setCheckedHover(2)}
              onMouseLeave={() => setCheckedHover(0)}
              onClick={() => setStatus("checkbox3")}
            >
              {checkedHover > 1 ? <IoCheckbox /> : <IoCheckboxOutline />}
            </i>
            <i
              onMouseEnter={() => setCheckedHover(4)}
              onMouseLeave={() => setCheckedHover(0)}
              onClick={() => setStatus("checkbox4")}
            >
              {checkedHover <= 5 && checkedHover > 3 ? (
                <IoCheckbox />
              ) : (
                <IoCheckboxOutline />
              )}
            </i>
            <i
              onMouseEnter={() => setCheckedHover(5)}
              onMouseLeave={() => setCheckedHover(0)}
              onClick={() => setStatus("checkbox5")}
            >
              {checkedHover > 4 ? <IoCheckbox /> : <IoCheckboxOutline />}
            </i>
          </li>
          {status.includes("checkbox") ? (
            <form
              onSubmit={(event) =>
                onAddInputHandler(event, { type: "checkbox" })
              }
              id="addCheckboxForm"
            >
              <h4>Create A CheckBox Question:</h4>

              <label htmlFor="questionTitle">Question Title:</label>
              <input
                type="text"
                name="questionTitle"
                id="questionTitle"
                placeholder="Title"
                required
              />

              <label htmlFor="checkbox1">Checkbox 1 Name:</label>
              <input type="text" name="checkbox1" id="checkbox1" required />

              <label htmlFor="checkbox2">Checkbox 2 Name:</label>
              <input type="text" name="checkbox2" id="checkbox2" required />

              {status.includes("3") ? (
                <>
                  <label htmlFor="checkbox3">Checkbox 3 Name:</label>
                  <input type="text" name="checkbox3" id="checkbox3" required />
                </>
              ) : null}
              {status.includes("4") ? (
                <>
                  <label htmlFor="checkbox3">Checkbox 3 Name:</label>
                  <input type="text" name="checkbox3" id="checkbox3" required />
                  <label htmlFor="checkbox4">Checkbox 4 Name:</label>
                  <input type="text" name="checkbox4" id="checkbox4" required />
                </>
              ) : null}
              {status.includes("5") ? (
                <>
                  <label htmlFor="checkbox3">Checkbox 3 Name:</label>
                  <input type="text" name="checkbox3" id="checkbox3" required />
                  <label htmlFor="checkbox4">Checkbox 4 Name:</label>
                  <input type="text" name="checkbox4" id="checkbox4" required />
                  <label htmlFor="checkbox5">Checkbox 5 Name:</label>
                  <input type="text" name="checkbox5" id="checkbox5" required />
                </>
              ) : null}

              <input type="submit" value="Create" />
            </form>
          ) : null}
          <li>
            A "This or That" Question
            <p>Select how many options you want:</p>
            <i
              onMouseEnter={() => setRadioHover(1)}
              onMouseLeave={() => setRadioHover(0)}
              onClick={() => setStatus("radio2")}
            >
              {radioHover > 0 ? <IoRadioButtonOn /> : <IoRadioButtonOff />}
            </i>
            <i
              onMouseEnter={() => setRadioHover(1)}
              onMouseLeave={() => setRadioHover(0)}
              onClick={() => setStatus("radio2")}
            >
              {radioHover > 0 ? <IoRadioButtonOn /> : <IoRadioButtonOff />}
            </i>
            <i
              onMouseEnter={() => setRadioHover(3)}
              onMouseLeave={() => setRadioHover(0)}
              onClick={() => setStatus("radio3")}
            >
              {radioHover >= 3 ? <IoRadioButtonOn /> : <IoRadioButtonOff />}
            </i>
            <i
              onMouseEnter={() => setRadioHover(4)}
              onMouseLeave={() => setRadioHover(0)}
              onClick={() => setStatus("radio4")}
            >
              {radioHover >= 4 ? <IoRadioButtonOn /> : <IoRadioButtonOff />}
            </i>
          </li>
        </ul>
        {status.includes("radio") ? (
          <form
            onSubmit={(event) => onAddInputHandler(event, { type: "radio" })}
            id="addRadioForm"
          >
            <h4>Create A This or That Question:</h4>
            <label htmlFor="questionTitle"></label>
            <input
              type="text"
              name="questionTitle"
              id="questionTitle"
              placeholder="Title"
              required
            />

            <label htmlFor="radio1">Option Name 1:</label>
            <input type="text" name="radio1" id="radio1" required />

            <label htmlFor="radio2">Option Name 2:</label>
            <input type="text" name="radio2" id="radio2" required />

            {status.includes("3") ? (
              <>
                <label htmlFor="radio3">Option Name 3:</label>
                <input type="text" name="radio3" id="radio3" required />
              </>
            ) : null}

            {status.includes("4") ? (
              <>
                <label htmlFor="radio3">Option Name 3:</label>
                <input type="text" name="radio3" id="radio3" required />
                <label htmlFor="radio4">Option Name 4:</label>
                <input type="text" name="radio4" id="radio4" required />
              </>
            ) : null}

            <input type="submit" value="Create" />
          </form>
        ) : null}
      </div>
    </div>
  );
};

export default CreateSurvey;

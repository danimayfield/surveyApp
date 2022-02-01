import { useSelector, useDispatch, useStore } from "react-redux";
import { useState } from "react";
import { addElement, removeElement } from "./createSurveySlice";
import nextId from "react-id-generator";

const CreateSurvey = () => {
  const dispatch = useDispatch();
  const [status, setStatus] = useState("none");

  const onAddInputHandler = (event, { type }) => {
    if (type === "checkbox") {
      event.preventDefault();
      const form = document.getElementById("createSurveyForm");
      const title = document.getElementById("questionTitle").value;
      const check1Name = document.getElementById("checkbox1").value;
      const check2Name = document.getElementById("checkbox2").value;
      const check3Name = document.getElementById("checkbox3").value;

      const container = document.createElement("div");
      const question = document.createElement("h3");
      const label1 = document.createElement("label");
      const label2 = document.createElement("label");
      const label3 = document.createElement("label");
      const checkbox1 = document.createElement("input");
      const checkbox2 = document.createElement("input");
      const checkbox3 = document.createElement("input");

      // Change text-content:
      question.textContent = title;
      label1.textContent = check1Name;
      label2.textContent = check2Name;
      label3.textContent = check3Name;

      // Creating unique IDs:
      const id1 = nextId();
      const id2 = nextId();
      const id3 = nextId();
      const id4 = nextId();

      // Set attributes:
      checkbox1.setAttribute("type", "checkbox");
      checkbox1.setAttribute("id", id1);
      checkbox1.setAttribute("name", id1);
      label1.setAttribute("htmlFor", id1);
      checkbox2.setAttribute("type", "checkbox");
      checkbox2.setAttribute("id", id2);
      checkbox2.setAttribute("name", id2);
      label2.setAttribute("htmlFor", id2);
      checkbox3.setAttribute("type", "checkbox");
      checkbox3.setAttribute("id", id3);
      checkbox3.setAttribute("name", id3);
      label3.setAttribute("htmlFor", id3);
      container.setAttribute("id", id4);

      // Set classes:
      container.classList.add("inputContainer");

      // Append elements
      form.appendChild(container);
      container.appendChild(question);
      container.appendChild(checkbox1);
      container.appendChild(label1);
      container.appendChild(checkbox2);
      container.appendChild(label2);
      container.appendChild(checkbox3);
      container.appendChild(label3);

      // Dispatch information:
      dispatch(
        addElement({
          questionTitle: title,
          questionId: container.id,
          questionType: "checkbox",
          questionValues: {
            checkbox1: check1Name,
            checkbox2: check2Name,
            checkbox3: check3Name,
          },
        })
      );

      // [{Q title, id, type, values:{1,2,3}}, {Q title, id, type, values:{1,2,3}}]

      //   Reset everything
      setStatus("none");
    } else if (type === "radio") {
      event.preventDefault();

      const form = document.getElementById("createSurveyForm");
      const title = document.getElementById("questionTitle").value;
      const radio1Name = document.getElementById("radio1").value;
      const radio2Name = document.getElementById("radio2").value;

      const container = document.createElement("div");
      const question = document.createElement("h3");
      const label1 = document.createElement("label");
      const label2 = document.createElement("label");
      const radio1 = document.createElement("input");
      const radio2 = document.createElement("input");

      // Change text-content:
      question.textContent = title;
      label1.textContent = radio1Name;
      label2.textContent = radio2Name;

      // Creating unique IDs:
      const id1 = nextId();
      const id2 = nextId();
      const id3 = nextId();
      const id4 = nextId();

      // Set attributes:
      radio1.setAttribute("type", "radio");
      radio1.setAttribute("id", id1);
      radio1.setAttribute("name", id4);
      label1.setAttribute("htmlFor", id1);
      radio2.setAttribute("type", "radio");
      radio2.setAttribute("id", id2);
      radio2.setAttribute("name", id4);
      label2.setAttribute("htmlFor", id2);
      container.setAttribute("id", id3);

      // Set classes:
      container.classList.add("inputContainer");

      // Append elements
      form.appendChild(container);
      container.appendChild(question);
      container.appendChild(radio1);
      container.appendChild(label1);
      container.appendChild(radio2);
      container.appendChild(label2);

      // Dispatch information:
      dispatch(
        addElement({
          questionTitle: title,
          questionId: container.id,
          questionType: "radio",
          questionValues: {
            radio1: radio1Name,
            radio2: radio2Name,
          },
        })
      );

      //   Reset everything
      setStatus("none");
    } 
  };

  return (
    <div>
      <h2>Create A Survey!</h2>
      <form className="createSurveyForm" id="createSurveyForm">
        <input type="submit" value="Save Survey" />
      </form>
      <div>
        <h4>Add:</h4>
        <p onClick={() => setStatus("checkbox")}>Checkbox</p>
        <i></i>
        {status === "checkbox" ? (
          <form
            onSubmit={(event) => onAddInputHandler(event, { type: "checkbox" })}
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

            <label htmlFor="checkbox3">Checkbox 3 Name:</label>
            <input type="text" name="checkbox3" id="checkbox3" required />

            <input type="submit" value="Create" />
          </form>
        ) : null}
        <p onClick={() => setStatus("radio")}>Radio</p>
        {status === "radio" ? (
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

            <input type="submit" value="Create" />
          </form>
        ) : null}
        <p onClick={() => onAddInputHandler({ type: "number" })}>Number</p>
      </div>
    </div>
  );
};

export default CreateSurvey;

import { useSelector, useDispatch, useStore } from "react-redux";
import { useState } from "react";
import { addElement, removeElement } from "./createSurveySlice";

const CreateSurvey = () => {
  const dispatch = useDispatch();
  const [status, setStatus] = useState("none");

  const onAddInputHandler = (event, { type }) => {
    event.preventDefault();
    // console.log(type);
    dispatch(addElement({ type }));

    if (type === "checkbox") {
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

      // Set attributes:
      checkbox1.setAttribute("type", "checkbox");
      checkbox1.setAttribute("required", "");
      checkbox1.setAttribute("id", "check1");
      checkbox1.setAttribute("name", "check1");
      label1.setAttribute("htmlFor", "check1");
      checkbox2.setAttribute("type", "checkbox");
      checkbox2.setAttribute("required", "");
      checkbox2.setAttribute("id", "check2");
      checkbox2.setAttribute("name", "check2");
      label2.setAttribute("htmlFor", "check2");
      checkbox3.setAttribute("type", "checkbox");
      checkbox3.setAttribute("required", "");
      checkbox3.setAttribute("id", "check3");
      checkbox3.setAttribute("name", "check3");
      label3.setAttribute("htmlFor", "check3");

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

      //   Reset everything
      setStatus("none");
    } else if (type === "radio") {
    } else if (type === "number") {
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

            <label htmlFor="checkbox1">Checkbox #1 Name:</label>
            <input type="text" name="checkbox1" id="checkbox1" required />

            <label htmlFor="checkbox2">Checkbox #2 Name:</label>
            <input type="text" name="checkbox2" id="checkbox2" required />

            <label htmlFor="checkbox3">Checkbox #3 Name:</label>
            <input type="text" name="checkbox3" id="checkbox3" required />

            <input type="submit" value="Create" />
          </form>
        ) : null}
        <p onClick={() => onAddInputHandler({ type: "radio" })}>Radio</p>
        <p onClick={() => onAddInputHandler({ type: "number" })}>Number</p>
      </div>
    </div>
  );
};

// [{Q title, id, type, values:{1,2,3}}]

export default CreateSurvey;

import { useSelector, useDispatch, useStore } from "react-redux";
import { useState } from "react";

import { addElement, removeElement } from "./createSurveySlice";

import nextId from "react-id-generator";
import {
  IoCheckboxOutline,
  IoCheckbox,
  IoRadioButtonOn,
  IoRadioButtonOff,
} from "react-icons/io5";

const CreateSurvey = () => {
  const dispatch = useDispatch();
  const [status, setStatus] = useState("none");
  const [checkedHover, setCheckedHover] = useState(0);
  const [radioHover, setRadioHover] = useState(0);

  const onAddInputHandler = (event, { type }) => {
    if (type === "checkbox") {
      event.preventDefault();
      const form = document.getElementById("createSurveyForm");
      const title = document.getElementById("questionTitle").value;
      const check1Name = document.getElementById("checkbox1").value;
      const check2Name = document.getElementById("checkbox2").value;

      const wrapper = document.createElement("div");
      const container1 = document.createElement("div");
      const container2 = document.createElement("div");
      const question = document.createElement("h3");
      const label1 = document.createElement("label");
      const label2 = document.createElement("label");
      const checkbox1 = document.createElement("input");
      const checkbox2 = document.createElement("input");

      // Change text-content:
      question.textContent = title;
      label1.textContent = check1Name;
      label2.textContent = check2Name;

      // Creating unique IDs:
      const id1 = nextId();
      const id2 = nextId();
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
      wrapper.setAttribute("id", id4);

      // Set classes:
      wrapper.classList.add("inputWrapper");

      // Append elements
      form.appendChild(wrapper);
      wrapper.appendChild(question);
      wrapper.appendChild(container1);
      wrapper.appendChild(container2);
      container1.appendChild(checkbox1);
      container1.appendChild(label1);
      container2.appendChild(checkbox2);
      container2.appendChild(label2);

      if (status === "checkbox2") {
        // Dispatch information:
        dispatch(
          addElement({
            questionTitle: title,
            questionId: wrapper.id,
            questionType: "checkbox",
            questionValues: {
              checkbox1: check1Name,
              checkbox2: check2Name,
            },
          })
        );
      } else if (status === "checkbox3") {
        const check3Name = document.getElementById("checkbox3").value;
        const label3 = document.createElement("label");
        const checkbox3 = document.createElement("input");
        const container3 = document.createElement("div");

        // Change text-content:
        label3.textContent = check3Name;

        // Creating unique id
        const id3 = nextId();

        // Set Attributes
        checkbox3.setAttribute("type", "checkbox");
        checkbox3.setAttribute("id", id3);
        checkbox3.setAttribute("name", id3);
        label3.setAttribute("htmlFor", id3);

        // Append Elements
        wrapper.appendChild(container3);
        container3.appendChild(checkbox3);
        container3.appendChild(label3);

        // Dispatch information:
        dispatch(
          addElement({
            questionTitle: title,
            questionId: wrapper.id,
            questionType: "checkbox",
            questionValues: {
              checkbox1: check1Name,
              checkbox2: check2Name,
              checkbox3: check3Name,
            },
          })
        );
      } else if (status === "checkbox4") {
        const check3Name = document.getElementById("checkbox3").value;
        const label3 = document.createElement("label");
        const checkbox3 = document.createElement("input");
        const check4Name = document.getElementById("checkbox4").value;
        const label4 = document.createElement("label");
        const checkbox4 = document.createElement("input");
        const container3 = document.createElement("div");
        const container4 = document.createElement("div");

        // Change text-content:
        label3.textContent = check3Name;
        label4.textContent = check4Name;

        // Creating unique id
        const id3 = nextId();
        const id5 = nextId();

        // Set Attributes
        checkbox3.setAttribute("type", "checkbox");
        checkbox3.setAttribute("id", id3);
        checkbox3.setAttribute("name", id3);
        label3.setAttribute("htmlFor", id3);
        checkbox4.setAttribute("type", "checkbox");
        checkbox4.setAttribute("id", id5);
        checkbox4.setAttribute("name", id5);
        label4.setAttribute("htmlFor", id5);

        // Append Elements
        wrapper.appendChild(container3);
        wrapper.appendChild(container4);
        container3.appendChild(checkbox3);
        container3.appendChild(label3);
        container4.appendChild(checkbox4);
        container4.appendChild(label4);

        // Dispatch information:
        dispatch(
          addElement({
            questionTitle: title,
            questionId: wrapper.id,
            questionType: "checkbox",
            questionValues: {
              checkbox1: check1Name,
              checkbox2: check2Name,
              checkbox3: check3Name,
              checkbox4: check4Name,
            },
          })
        );
      } else if (status === "checkbox5") {
        const check3Name = document.getElementById("checkbox3").value;
        const label3 = document.createElement("label");
        const checkbox3 = document.createElement("input");
        const check4Name = document.getElementById("checkbox4").value;
        const label4 = document.createElement("label");
        const checkbox4 = document.createElement("input");
        const check5Name = document.getElementById("checkbox5").value;
        const label5 = document.createElement("label");
        const checkbox5 = document.createElement("input");
        const container3 = document.createElement("div");
        const container4 = document.createElement("div");
        const container5 = document.createElement("div");

        // Change text-content:
        label3.textContent = check3Name;
        label4.textContent = check4Name;
        label5.textContent = check5Name;

        // Creating unique id
        const id3 = nextId();
        const id5 = nextId();
        const id6 = nextId();

        // Set Attributes
        checkbox3.setAttribute("type", "checkbox");
        checkbox3.setAttribute("id", id3);
        checkbox3.setAttribute("name", id3);
        label3.setAttribute("htmlFor", id3);
        checkbox4.setAttribute("type", "checkbox");
        checkbox4.setAttribute("id", id5);
        checkbox4.setAttribute("name", id5);
        label4.setAttribute("htmlFor", id5);
        checkbox5.setAttribute("type", "checkbox");
        checkbox5.setAttribute("id", id6);
        checkbox5.setAttribute("name", id6);
        label5.setAttribute("htmlFor", id6);

        // Append Elements
        wrapper.appendChild(container3);
        wrapper.appendChild(container4);
        wrapper.appendChild(container5);
        container3.appendChild(checkbox3);
        container3.appendChild(label3);
        container4.appendChild(checkbox4);
        container4.appendChild(label4);
        container5.appendChild(checkbox5);
        container5.appendChild(label5);

        // Dispatch information:
        dispatch(
          addElement({
            questionTitle: title,
            questionId: wrapper.id,
            questionType: "checkbox",
            questionValues: {
              checkbox1: check1Name,
              checkbox2: check2Name,
              checkbox3: check3Name,
              checkbox4: check4Name,
              checkbox5: check5Name,
            },
          })
        );
      }

      //   Reset everything
      setStatus("none");
    } else if (type === "radio") {
      event.preventDefault();

      const form = document.getElementById("createSurveyForm");
      const title = document.getElementById("questionTitle").value;
      const radio1Name = document.getElementById("radio1").value;
      const radio2Name = document.getElementById("radio2").value;

      const wrapper = document.createElement("div");
      const container1 = document.createElement("div");
      const container2 = document.createElement("div");
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
      wrapper.setAttribute("id", id3);

      // Set classes:
      wrapper.classList.add("inputWrapper");

      // Append elements
      form.appendChild(wrapper);
      wrapper.appendChild(question);
      wrapper.appendChild(container1);
      wrapper.appendChild(container2);
      container1.appendChild(radio1);
      container1.appendChild(label1);
      container2.appendChild(radio2);
      container2.appendChild(label2);

      if (status === "radio2") {
        // Dispatch information:
        dispatch(
          addElement({
            questionTitle: title,
            questionId: wrapper.id,
            questionType: "radio",
            questionValues: {
              radio1: radio1Name,
              radio2: radio2Name,
            },
          })
        );
      } else if (status === "radio3") {
        const radio3Name = document.getElementById("radio3").value;
        const radio3 = document.createElement("input");
        const label3 = document.createElement("label");
        const container3 = document.createElement("div");

        // Change text-content:
        label3.textContent = radio3Name;

        // Creating unique IDs:
        const id5 = nextId();

        // Set attributes:
        radio3.setAttribute("type", "radio");
        radio3.setAttribute("id", id5);
        radio3.setAttribute("name", id4);
        label3.setAttribute("htmlFor", id5);

        // Append elements
        wrapper.appendChild(container3);
        container3.appendChild(radio3);
        container3.appendChild(label3);

        // Dispatch information:
        dispatch(
          addElement({
            questionTitle: title,
            questionId: wrapper.id,
            questionType: "radio",
            questionValues: {
              radio1: radio1Name,
              radio2: radio2Name,
              radio3: radio3Name,
            },
          })
        );
      } else if (status === "radio4") {
        const radio3Name = document.getElementById("radio3").value;
        const radio4Name = document.getElementById("radio4").value;

        const radio3 = document.createElement("input");
        const radio4 = document.createElement("input");
        const label3 = document.createElement("label");
        const label4 = document.createElement("label");
        const container3 = document.createElement("div");
        const container4 = document.createElement("div");

        // Change text-content:
        label3.textContent = radio3Name;
        label4.textContent = radio4Name;

        // Creating unique IDs:
        const id5 = nextId();
        const id6 = nextId();

        // Set attributes:
        radio3.setAttribute("type", "radio");
        radio3.setAttribute("id", id5);
        radio3.setAttribute("name", id4);
        label3.setAttribute("htmlFor", id5);
        radio4.setAttribute("type", "radio");
        radio4.setAttribute("id", id6);
        radio4.setAttribute("name", id4);
        label4.setAttribute("htmlFor", id6);

        // Append elements
        wrapper.appendChild(container3);
        wrapper.appendChild(container4);
        container3.appendChild(radio3);
        container3.appendChild(label3);
        container4.appendChild(radio4);
        container4.appendChild(label4);

        // Dispatch information:
        dispatch(
          addElement({
            questionTitle: title,
            questionId: wrapper.id,
            questionType: "radio",
            questionValues: {
              radio1: radio1Name,
              radio2: radio2Name,
              radio3: radio3Name,
              radio4: radio4Name,
            },
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

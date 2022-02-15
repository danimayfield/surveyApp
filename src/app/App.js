import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "../components/Landing";
import { Nav, Footer } from "../components/NavAndFooter";
import CreateSurvey from "../features/createSurvey/createSurvey";
import Surveys from "../features/surveys/surveys";
import SurveyResponses from "../features/surveyResponses/surveyResponses";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Routes>
          <Route path='/*' element={<Landing />}></Route>
          <Route path="/create" element={<CreateSurvey/>}></Route>
          <Route path="/take/*" element={<Surveys/>}></Route>
          {/* Need a Route for each individual Survey - maybe separated by ID? */}
          <Route path='survey/responses' element={<SurveyResponses/>}></Route>
          {/* ! Need to adjust this to see the responses of the individual survey selected ^^ */}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

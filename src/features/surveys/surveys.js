// import { Link } from "react-router-dom";
// Will use Link to link to each individual survey, each survey will have own ID which is be the URL
import { useEffect } from "react"
import { getDatabase, onValue, ref } from "firebase/database"
import firebase from "../../firebase"
import { loadData } from "./surveysSlice"
import { useDispatch, useSelector } from "react-redux"

import DisplaySurveyPreviews from "../../components/DisplaySurveyPreviews"

const Surveys = () => {
    const dispatch = useDispatch();



    // useEffect to gather data from firebase
    useEffect(() => {
      
        const database = getDatabase(firebase)
        const dbRef = ref(database)
        
        onValue(dbRef, (response) => {
            
            const newArray = []
            const data = response.val()
            
            for (let key in data.surveys) {
                newArray.push(data.surveys[key]);
            }
            

            // dispatch data received from firebase to the redux state
            dispatch(
                loadData(
                    newArray
                )
              );
        })
        

    }, [])
    



    return (
        <div>
            <h2>Take a Survey!</h2>
            <DisplaySurveyPreviews/>
        </div>
    )
}

export default Surveys
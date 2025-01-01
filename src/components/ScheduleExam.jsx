import "../css/scheduleExam.css"
import { useState } from "react"
import {NavLink} from "react-router-dom"
function ScheduleExam(){
    let [schedule,setSchedule] = useState({
        date : "",
        startTime : "",
        endTime  : "",
    });
    let [validDate,setValidity] = useState(false)

    function handler(e){
        setSchedule((prevState)=>{
            return {
                ...prevState,
                [e.target.name] : e.target.value,
            }
        })
        console.log(schedule)
    }

    function checkDate() {
        let startTime = new Date(`${schedule.date}T${schedule.startTime}`);
        let endTime = new Date(`${schedule.date}T${schedule.endTime}`);
        let now = new Date();
        // console.log(startTime.getTime());
        // console.log(endTime.getTime());
        // console.log(now);
        
        if(startTime.getTime() > now.getTime() && endTime.getTime() > startTime.getTime()){
            setValidity(true);
        } else {
            setValidity(false);
        }
    }

    function checkBtn(e){
        e.preventDefault();
        if(validDate)
        {
            console.log(e)
        }
    }

    return(
        <>
        <div className="itemContainer">
            <div className="scheduleContainer">
            <div className="dateContainer">
                <input type="date" name="date" id="dateInput" onChange={(e)=>handler(e)} placeholder="Enter the date"/>
            </div>
            <div className="timeContainer">
                <div className="startTimeContainer "><input type="time" name="startTime" className="examTime" onChange={(e)=>handler(e)}/></div>
                <div className="endTimeContainer "><input type="time" name="endTime" className="examTime" onChange={(e)=>handler(e)}/></div>
            </div>
            <div className="buttons">
                <button type="button" className="scheduleBtn" onClick={checkDate}>Validate</button>
                <button type="submit" className="scheduleBtn" id="submitBtn" onClick={(e) => checkBtn(e)}>Schedule an exam</button>
            </div>
            </div>
        </div>

        </>
    )
}

export default ScheduleExam
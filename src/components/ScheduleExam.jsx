import "../css/scheduleExam.css"
import { useState } from "react"
import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";
function ScheduleExam(props){
    let [schedule,setSchedule] = useState({
        date : "",
        startTime : "",
        endTime  : "",
        totalTime : 0,
        totalMarks : 0,
        passingMarks : 0
    });

    function handler(e){
        setSchedule((prevState)=>{
            return {
                ...prevState,
                [e.target.name] : e.target.value,
            }
        })
        // console.log(schedule)
    }

    function checkDate() {
        let startTime = new Date(`${schedule.date}T${schedule.startTime}`);
        let endTime = new Date(`${schedule.date}T${schedule.endTime}`);
        let now = new Date();
        // console.log(startTime.getTime());
        // console.log(endTime.getTime());
        // console.log(now.getTime());
        document.querySelector(".dateContainer").lastChild.innerHTML = ""
        document.querySelector(".endTimeContainer").lastChild.innerHTML = ""
        document.querySelector(".startTimeContainer").lastChild.innerHTML = ""
        if(startTime.getTime() > now.getTime() && endTime.getTime() > startTime.getTime() && parseInt(schedule.totalMarks) > parseInt(schedule.passingMarks)){
            
            setSchedule(prevState => {
                return {
                    ...prevState,
                    totalTime : ((endTime.getTime() - startTime.getTime()) /  60000 ), 
                }
            })
            props.passingFunction(schedule);
            document.querySelector(".successMessage").style.top = "100px";
            removeMessage()
            // console.log("hi")
        } else {
            if(startTime.getTime() < now.getTime()){
                document.querySelector(".dateContainer").lastChild.innerHTML = "Enter valid Date"
                document.querySelector(".startTimeContainer").lastChild.innerHTML = "Enter valid starting time"
            }

            if(endTime.getTime() < now.getTime() || endTime.getTime() < startTime.getTime()){
                document.querySelector(".dateContainer").lastChild.innerHTML = "Enter valid Date"
                document.querySelector(".endTimeContainer").lastChild.innerHTML = "Enter valid ending time"
            }
            // console.log("bye")
        }
    }

    let removeMessage = setTimeout(()=>{
        document.querySelector(".successMessage").style.top = "-100%";
    },30000);

    return(
        <>
        <div className="itemContainer">
            <div className="successMessage">
                <p>Exam scheduled successfully</p>
            </div>
            <div className="scheduleContainer">
            <div className="dateContainer common">
                <label htmlFor="date">Select the date : </label>
                <input type="date" name="date" id="dateInput" onChange={(e)=>handler(e)} placeholder="Enter the date"/>
                <p className="errMsg"></p>
            </div>
            <div className="timeContainer">
                <div className="startTimeContainer  common">
                    <label htmlFor="startTime">Select the Start time : </label>
                    <input type="time" name="startTime" className="examTime" onChange={(e)=>handler(e)}/>
                    <p className="errMsg"></p>
                </div>
                <div className="endTimeContainer  common">
                    <label htmlFor="endTime">Select the End time : </label>
                    <input type="time" name="endTime" className="examTime" onChange={(e)=>handler(e)}/>
                    <p className="errMsg"></p>
                </div>
            </div>
            <div className="timeContainer">
                <div className="startTimeContainer common">
                    <label htmlFor="totalMarks">Enter the total marks</label>
                    <input type="number" name="totalMarks" id="totalMarks" value={schedule.totalMarks} onChange={(e)=>handler(e)} className="totalNumbers examTime" />
                </div>
                <div className="endTimeContainer common">
                    <label htmlFor="passingMarks">Enter the passing marks</label>
                    <input type="number" name="passingMarks" id="passingMarks" onChange={(e)=>handler(e)} value={schedule.passingMarks} className="passingNumbers examTime" />
                </div>
            </div>
            <div className="buttons">
                <button type="button" className="scheduleBtn" onClick={checkDate}>Validate</button>
                <NavLink to="/startExam"><button type="submit" className="scheduleBtn" id="submitBtn" >Schedule an exam</button></NavLink>
            </div>
            </div>
        </div>

        </>
    )
}

ScheduleExam.propTypes = {
    passingFunction: PropTypes.func.isRequired
}

export default ScheduleExam
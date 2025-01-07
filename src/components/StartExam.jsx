import "../css/startExam.css"
import {NavLink} from "react-router-dom"
import PropTypes from "prop-types";

function StartExam(props){

    if (!props.scheduleObj || 
        props.questionSet.length === 0 ||
        props.scheduleObj.date === "" ||
        props.scheduleObj.startTime ===  "" ||
        props.scheduleObj.endTime  === "" ||
        props.scheduleObj.totalMarks === 0 ||
        props.scheduleObj.passingMarks === 0 ||
        new Date(`${props.scheduleObj.date}T${props.scheduleObj.startTime}`).getTime() < new Date().getTime() || 
        new Date(`${props.scheduleObj.date}T${props.scheduleObj.endTime}`).getTime() < new Date().getTime()) {
        return (
            <>
            <div className="itemContainer">
                <div id="card">
                <p>No Ongoing Exam</p>
                </div>
            </div>
            </>
        )
    }
    
    return(
        <>
            <div className="itemContainer">
                <div id="card">
                    <div className="examCard">
                        <p>Exam date : {props.scheduleObj.date}</p>
                        <p>Start Time : {props.scheduleObj.startTime}</p>
                        <p>End Time : {props.scheduleObj.endTime}</p>
                        <p>Total marks : {props.scheduleObj.totalMarks} Marks</p>
                        <p>Passing Marks : {props.scheduleObj.passingMarks}</p>
                        <button type="button" className="startExam"><NavLink to={`/Questions`}>Start Exam</NavLink></button>
                    </div>
                </div>
            </div>
        </>
    )
}

StartExam.propTypes = {
    scheduleObj: PropTypes.shape({
        date: PropTypes.string.isRequired,
        startTime: PropTypes.string.isRequired,
        endTime: PropTypes.string.isRequired,
        totalMarks: PropTypes.number.isRequired,
        passingMarks: PropTypes.number.isRequired,
    }).isRequired,
};

StartExam.propTypes = {
    questionSet: PropTypes.arrayOf(
        PropTypes.shape({
            question: PropTypes.string.isRequired,
            option1: PropTypes.string.isRequired,
            option2: PropTypes.string.isRequired,
            option3: PropTypes.string.isRequired,
            option4: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default StartExam
import AddQuestion from "./AddQuestion"
import Result from "./Result"
import ScheduleExam from "./ScheduleExam"
import StartExam from "./StartExam"
import ViewQuestion from "./ViewQuestion"
import Home from "./Home"
import DeleteQuestion from "./DeleteQuestion"
import "../css/header.css"
import {BrowserRouter,Routes,Route,NavLink} from "react-router-dom";
import { useState } from "react"
import Questions from "./Questions"
import UpdateQuestions from "./UpdateQuestions"

function Header(){
    let[allQuestionObject , setQuestionObject] = useState([]);
    let[isOpen , setChange] = useState(false)
    let[schedule,passSchedule] = useState({
        date : "",
        startTime : "",
        endTime  : "",
        totalTime : "",
        totalMarks : 0,
        passingMarks : 0
    })

    function schedulePasser(obj){
        passSchedule((prevState)=>{
            return{
                ...prevState,
                ...obj
            }
        })
        // console.log(schedule)
    }

    function passList(questionSet){
        // console.log(questionSet)
        setQuestionObject((prevState)=>[...prevState,questionSet]);
        // console.log(allQuestionObject)
    }

    function navChange()
    {
        if(isOpen)
        {
            document.querySelector("#icon").classList.remove("fa-bars")
            document.querySelector("#icon").classList.add("fa-xmark")
            document.querySelector(".linkContainer").style.right = "10px" ;
        } else {
            document.querySelector("#icon").classList.remove("fa-xmark")
            document.querySelector("#icon").classList.add("fa-bars")
            document.querySelector(".linkContainer").style.right = "-100%" ;

        }
        setChange(!isOpen)
    }
    return (
        <>
            <BrowserRouter>
                <nav className="navContainer">
                    <div className="logoContainer">
                        <NavLink to="/">Answer<span>Me.</span></NavLink>
                    </div>
                    <div className="closeOpenNavigation">
                        <i className="fa-solid fa-bars" id="icon" onClick={navChange}></i>
                    </div>
                    <div className="linkContainer">
                        <ul className="links">
                            <NavLink to="/"><li className="link" onClick={navChange}>Home</li></NavLink>
                            <NavLink to="/addQuestions"><li className="link" onClick={navChange}>Add Questions</li></NavLink>
                            <NavLink to="/viewQuestions"><li className="link" onClick={navChange}>View Questions</li></NavLink>
                            <NavLink to="/scheduleExam"><li className="link" onClick={navChange}>Schedule Exam</li></NavLink>
                            <NavLink to="/startExam"><li className="link" onClick={navChange}>Start Exam</li></NavLink>
                            <NavLink to="/result"><li className="link" onClick={navChange}>Result </li></NavLink>
                        </ul>
                    </div>
                </nav>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/addQuestions" element={<AddQuestion onSubmit={passList}/>}/>
                    <Route path="/viewQuestions" element={<ViewQuestion questionSet={allQuestionObject}/>}/>
                    <Route path="/scheduleExam" element={<ScheduleExam passingFunction = {schedulePasser}/>}/>
                    <Route path="/startExam" element={<StartExam scheduleObj = {schedule} questionSet={allQuestionObject}/>}/>
                    <Route path="/result" element={<Result/>}/>
                    <Route path="/DeleteQuestion/:index/*" element={<DeleteQuestion questionSet={allQuestionObject}/>}/>
                    <Route path="/UpdateQuestion/:index/*" element={<UpdateQuestions questionSet={allQuestionObject}/>}/>
                    <Route path="/Questions" element={<Questions questionSet={allQuestionObject}/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Header 
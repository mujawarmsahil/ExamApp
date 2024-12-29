import {NavLink} from "react-router-dom"
function Home(){
    return(
        <>
        <div className="itemContainer">
            <div className="homeContainer ">
                
                        <h1>Welcome to AnswerMe.</h1>
                        <NavLink to="/addQuestions"><button type="button" className="scheduleExam">schedule an Exam</button></NavLink>
                
            </div>
        </div>
        </>
    )
}

export default Home
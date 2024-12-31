import { useParams, NavLink } from "react-router-dom";
import "../css/DeleteQuestions.css"
function DeleteQuestion(props) {
    const { index } = useParams();
   

    function removeElement(eventObject)
    {
        props.questionSet.splice(index,1);
        console.log(index);
        console.log(eventObject.target)
        eventObject.target.setAttribute("disabled","true");
    }

    return (
        <div className="deleteContainer">
            <h1>Delete Question</h1>
            <p>Are you sure you want to delete question {parseInt(index)+1}?</p>
            <div className="buttons">
                <button type="button" className="btns" id="yes" onClick={e => removeElement(e)}>Yes</button>
                <NavLink to="/viewQuestions"><button type="button" className="btns" id="no" >No</button></NavLink>
            </div>
            <NavLink to="/viewQuestions" className="backToQuestion">Back to View Questions</NavLink>
        </div>
    );
}

export default DeleteQuestion;
import "../css/ViewQuestions.css"
import PropTypes from "prop-types"
import {NavLink} from "react-router-dom"
function ViewQuestion(props){
    return(
        <>
        
        <div className="itemContainer">
            <div className="tableContainer">
            <table className="table">
                <thead >
                    <tr>
                        <th>ID</th>
                        <th>Question</th>
                        <th>1</th>
                        <th>2</th>
                        <th>3</th>
                        <th>4</th>
                        <th className="answer">Answer</th>
                        <th className="update">Update</th>
                        <th className="delete">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.questionSet.map((e , index) => {
                            return <tr key={index} className={index}>
                                <td>{index+1}</td>
                                <td>{e.question}</td>
                                <td>{e.option1}</td>
                                <td>{e.option2}</td>
                                <td>{e.option3}</td>
                                <td>{e.option4}</td>
                                <td className="answer">{e.answer}</td>
                                <td className="update"><NavLink to={`/UpdateQuestion/${parseInt(index)}`}>Update</NavLink></td>
                                <td className="delete"><NavLink to={`/DeleteQuestion/${parseInt(index)}`}>Delete</NavLink></td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
            </div>    
        </div>
        </>
    )
}

ViewQuestion.propTypes = {
    questionSet: PropTypes.arrayOf(
        PropTypes.shape({
            question: PropTypes.string.isRequired,
            option1: PropTypes.string.isRequired,
            option2: PropTypes.string.isRequired,
            option3: PropTypes.string.isRequired,
            option4: PropTypes.string.isRequired,
            answer: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default ViewQuestion
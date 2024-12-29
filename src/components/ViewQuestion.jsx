import "../css/ViewQuestions.css"
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
                                <td className="update">Update</td>
                                <td className="delete" onClick={(e) => removeElement(e)}>Delete</td>
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

export default ViewQuestion
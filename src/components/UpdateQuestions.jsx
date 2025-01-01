import { useState } from "react";
import {useParams,NavLink} from "react-router-dom"

function UpdateQuestions(props)
{
    const  { index } = useParams();
    let[questions,SetQuestion] = useState({
        question:props.questionSet[index].question,
        option1:props.questionSet[index].option1,
        option2:props.questionSet[index].option2,
        option3:props.questionSet[index].option3,
        option4:props.questionSet[index].option4,
        answer:props.questionSet[index].answer
    });

    function handler(e)
    {
        SetQuestion((prevState) => {
            return {...prevState,[e.target.name] : e.target.value}
        });
    }

    function addInList(e)
    {
        e.preventDefault()
        props.questionSet[index] = questions;
    }
    return (
        <>
        <div className="itemContainer">
            <form action="" className="questionsContainer">
                <div className="questionInsideContainer">
                    <section className="inputRow">
                        <section className="inputColumn">
                            <input type="text" name="question" value={questions.question} id="" placeholder="Enter the question" className="form-control" onChange={(e)=>handler(e)}/>
                        </section>
                    </section>
                    <section className="optionContainer">
                        <section className="option">
                            <input type="text" name="option1" id="option1" value={questions.option1} placeholder="option-1" onChange={(e)=>handler(e)} className="form-control" />
                        </section>
                        <section className="option">
                            <input type="text" name="option2" id="option2" value={questions.option2} placeholder="option-2" onChange={(e)=>handler(e)} className="form-control" />
                        </section>
                        <section className="option">
                            <input type="text" name="option3" id="option3" value={questions.option3} placeholder="option-3" onChange={(e)=>handler(e)} className="form-control" />
                        </section>
                        <section className="option">
                            <input type="text" name="option4" id="option4" value={questions.option4} placeholder="option-4" onChange={(e)=>handler(e)} className="form-control" />
                        </section>
                    </section>
                    <section className="answerContainer">
                        <section className="answer">
                            <input type="number" min={1} max={4} name="answer" value={questions.answer} placeholder="answer" id="answer" onChange={(e)=>handler(e)} className="form-control" />
                        </section>
                    </section>
                    <section className="buttonContainer">
                        <section className="buttonColumn">
                            <button type="submit" onClick={(e)=>addInList(e)}>Update Question</button>
                        </section>
                    </section>
                    <NavLink to="/viewQuestions" className="backToQuestion">Back to View Questions</NavLink>

                </div>
            </form>
        </div>
        </>       
    )
}

export default UpdateQuestions;
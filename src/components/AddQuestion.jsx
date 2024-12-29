import {useState} from "react";
import "../css/addQuestions.css"
function AddQuestion(props){
    let [list,setList] = useState([]);
    let [questionSet,setQuestion] = useState({
        
        question:"",
        option1:"",
        option2:"",
        option3:"",
        option4:"",
        answer:""
    });
    
    function handler(eventObject){
        setQuestion((prevState)=>{
            return {...prevState,[eventObject.target.name]:eventObject.target.value}
        })
    }

    function addInList(eventObject){
        eventObject.preventDefault();
        // console.log(questionSet)
        setList((prevState)=>[...prevState,questionSet]);
        setQuestion(() => {
            return {
                question:"",
                option1:"",
                option2:"",
                option3:"",
                option4:"",
                answer:""
            }})
        props.onSubmit(questionSet);        
    }

    return(
        <>
        <div className="itemContainer">
            <form action="" className="questionsContainer">
                <div className="questionInsideContainer">
                    <section className="inputRow">
                        <section className="inputColumn">
                            <input type="text" name="question" value={questionSet.question} id="" placeholder="Enter the question" className="form-control" onChange={(e)=>handler(e)}/>
                        </section>
                    </section>
                    <section className="optionContainer">
                        <section className="option">
                            <input type="text" name="option1" id="option1" value={questionSet.option1} placeholder="option-1" onChange={(e)=>handler(e)} className="form-control" />
                        </section>
                        <section className="option">
                            <input type="text" name="option2" id="option2" value={questionSet.option2} placeholder="option-2" onChange={(e)=>handler(e)} className="form-control" />
                        </section>
                        <section className="option">
                            <input type="text" name="option3" id="option3" value={questionSet.option3} placeholder="option-3" onChange={(e)=>handler(e)} className="form-control" />
                        </section>
                        <section className="option">
                            <input type="text" name="option4" id="option4" value={questionSet.option4} placeholder="option-4" onChange={(e)=>handler(e)} className="form-control" />
                        </section>
                    </section>
                    <section className="answerContainer">
                        <section className="answer">
                            <input type="number" min={1} max={4} name="answer" value={questionSet.answer} placeholder="answer" id="answer" onChange={(e)=>handler(e)} className="form-control" />
                        </section>
                    </section>
                    <section className="buttonContainer">
                        <section className="buttonColumn">
                            <button type="submit" onClick={(e)=>addInList(e)}>Add Question</button>
                        </section>
                    </section>
                </div>
            </form>
        </div>
            
        </>
    )
}

export default AddQuestion
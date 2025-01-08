import {  useState } from "react";
import {NavLink} from "react-router-dom"
import PropTypes from "prop-types";
import "../css/Questions.css"
function Questions(props) {
    let [index, setIndex] = useState(0);
    let [answerSheet,setAnswerSheet] = useState(new Array(props.questionSet.length))
    let [correctAnswers,setCorrectAnswers] = useState(0)
    if (!props.questionSet || props.questionSet.length === 0) {
        return (
                <div className="itemContainer">    
                    <p className="errQuestionMsg">No questions available</p>
                </div>
            )}

            const handleNext = () => {
                if (index < props.questionSet.length - 1) {
                    setIndex(index + 1);
                }};

            const handlePrev = () => {
                if (index > 0) {
                    setIndex(index - 1);
                
            }};
    function setAnswer(eventObj)
    {
        const selectedOption = parseInt(eventObj.target.id);
        const updatedAnswerSheet = [...answerSheet];
        updatedAnswerSheet[index] = selectedOption;
        setAnswerSheet(updatedAnswerSheet);
        if(selectedOption === props.questionSet[index].answer)
        {
            if(correctAnswers < props.questionSet.length)
            {
                setCorrectAnswers(correctAnswers + 1)
            }
        }
        else{
            if(correctAnswers > 0)
            {
                setCorrectAnswers(correctAnswers - 1)
            }
        }
        // console.log(updatedAnswerSheet)
    }  
    
    if(index === props.questionSet.length - 1)
    {
        return (
            <>
            <div className="itemContainer">
                <div className="QuestionInterface">
                <div className="question">
                    <p>{index + 1}.{props.questionSet[index].question}</p>
                </div>
                        <div className="row">
                            <div className="col" >
                                <input type="radio" onClick={(e) => setAnswer(e)} name="option" id="1" checked={answerSheet[index] === 1} />
                                <label htmlFor="1">{props.questionSet[index].option1}</label>
                            </div>
                            <div className="col" >
                                <input type="radio" onClick={(e) => setAnswer(e)} name="option" id="2" checked={answerSheet[index] === 2}/>
                                <label htmlFor="2">{props.questionSet[index].option2}</label>
                            </div>
                            <div className="col" >
                                <input type="radio" onClick={(e) => setAnswer(e)}  name="option" id='3' checked={answerSheet[index] === 3} />
                                <label htmlFor='3'>{props.questionSet[index].option3}</label>
                            </div>
                            <div className="col" >
                                <input type="radio" onClick={(e) => setAnswer(e)} name="option" id="4" checked={answerSheet[index] === 4} />
                                <label htmlFor="4">{props.questionSet[index].option4}</label>
                            </div>
                        </div>
                        <div className="moveBtns">
                            <div className="prev">
                                <button type="button" className="prevBtn" onClick={handlePrev}> Prev </button>
                            </div>
                            <div className="next">
                                <button type="submit" className="nextBtn"><NavLink to={`/result`} onClick={()=>props.updateSheet(answerSheet)}>submit</NavLink></button>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }

        return (
            <>
            <div className="itemContainer">
                <div className="QuestionInterface">
                <div className="question">
                    <p>{index + 1}.{props.questionSet[index].question}</p>
                </div>
                        <div className="row">
                            <div className="col" >
                                <input type="radio" onClick={(e) => setAnswer(e)} name="option" id="1" checked={answerSheet[index] === 1} />
                                <label htmlFor="1">{props.questionSet[index].option1}</label>
                            </div>
                            <div className="col" >
                                <input type="radio" onClick={(e) => setAnswer(e)} name="option" id="2" checked={answerSheet[index] === 2}/>
                                <label htmlFor="2">{props.questionSet[index].option2}</label>
                            </div>
                            <div className="col" >
                                <input type="radio" onClick={(e) => setAnswer(e)}  name="option" id='3' checked={answerSheet[index] === 3} />
                                <label htmlFor='3'>{props.questionSet[index].option3}</label>
                            </div>
                            <div className="col" >
                                <input type="radio" onClick={(e) => setAnswer(e)} name="option" id="4" checked={answerSheet[index] === 4} />
                                <label htmlFor="4">{props.questionSet[index].option4}</label>
                            </div>
                        </div>
                        <div className="moveBtns">
                            <div className="prev">
                                <button type="button" className="prevBtn" onClick={handlePrev}> Prev </button>
                            </div>
                            <div className="next">
                                <button type="button" className="nextBtn" onClick={handleNext}> Next </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
            );}

        Questions.propTypes = {
            questionSet: PropTypes.arrayOf(
                PropTypes.shape({
                    question: PropTypes.string.isRequired,
                    option1: PropTypes.string.isRequired,
                    option2: PropTypes.string.isRequired,
                    option3: PropTypes.string.isRequired,
                    option4: PropTypes.string.isRequired,
                    answer: PropTypes.number.isRequired,
                })
            ).isRequired,
        };

        Questions.propTypes ={
            updateSheet : PropTypes.func.isRequired,
        }

        export default Questions;
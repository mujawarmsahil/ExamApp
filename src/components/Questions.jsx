import { useState } from "react";
import PropTypes from "prop-types";
import "../css/Questions.css"
function Questions(props) {
    let [index, setIndex] = useState(0);

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

        return (
            <>
                <div className="itemContainer">
                    <div className="QuestionInterface">
                        <div className="question">
                            <p>{index+1}.{props.questionSet[index].question}</p>
                        </div>
                        <div className="row">
                            <div className="col">
                                <input type="radio" name="option" id="option1"/>
                                <label htmlFor="option1">{props.questionSet[index].option1}</label>
                            </div>
                            <div className="col">
                                <input type="radio" name="option" id="option2"/>
                                <label htmlFor="option2">{props.questionSet[index].option2}</label>
                            </div>
                            <div className="col">
                                <input type="radio"  name="option" id="option3" />
                                <label htmlFor="option3">{props.questionSet[index].option3}</label>
                            </div>
                            <div className="col">
                                <input type="radio" name="option" id="option4" />
                                <label htmlFor="option4">{props.questionSet[index].option4}</label>
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
                })
            ).isRequired,
        };

        export default Questions;
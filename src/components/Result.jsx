import PropTypes from "prop-types";
import "../css/Result.css";

function Result(props) {
    const correctAnswers = props.answerSheet.reduce((count, answer, index) => {
        return (props.questionSet[index].answer - '0') === answer ? count + 1 : count;
    }, 0);

    return (
        <>
            <div className="itemContainer resultContainer">
                <div className="answerTable">
                    <table>
                        <thead>
                            <tr>
                                <th>Question</th>
                                <th>Correct Answer</th>
                                <th>Your Answer</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.answerSheet.map((answer, index) => (
                                <tr key={index} style={{ backgroundColor: (props.questionSet[index].answer - '0') === answer ? "green" : "red", opacity: (props.questionSet[index].answer - '0') === answer ? "1" : "0.5" }}>
                                    <td>{props.questionSet[index].question}</td>
                                    <td>{props.questionSet[index].answer}</td>
                                    <td>{answer}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="correctAnswers">
                    {correctAnswers} correct answers out of {props.questionSet.length}
                </div>
            </div>
        </>
    );
}

Result.propTypes = {
    answerSheet: PropTypes.array.isRequired,
    questionSet: PropTypes.arrayOf(
        PropTypes.shape({
            question: PropTypes.string.isRequired,
            option1: PropTypes.string.isRequired,
            option2: PropTypes.string.isRequired,
            option3: PropTypes.string.isRequired,
            option4: PropTypes.string.isRequired,
            answer: PropTypes.number.isRequired,
        }).isRequired
    ).isRequired
};

export default Result;

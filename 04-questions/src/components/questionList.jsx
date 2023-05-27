import QuestionItem from "./questionItem";
import PropTypes from "prop-types";

const QuestionList = (props) => {
    const { questions } = props;

    return (<ul className="question__list">
        {
            questions.map(question => <QuestionItem key={question.id} question={question} />)
        }
    </ul>);
}

QuestionList.propTypes = {
    questions: PropTypes.array.isRequired
}

export default QuestionList;
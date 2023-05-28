import PropTypes from "prop-types";
import { useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";

const QuestionItem = (props) => {
    const { question } = props;
    const [isDisplay, setIsDisplay] = useState(false);

    const handleQuestionDisplay = () => setIsDisplay(prev => !prev);

    return (<li className="question__item">
        <section onClick={handleQuestionDisplay} className="question__info">
            <header className="question__header">
                <h4>{question.title}</h4>
                <span>
                    {isDisplay ? <BiMinus /> : <BiPlus />}
                </span>
            </header>

            {isDisplay && <p>{question.info}</p>}
        </section>
    </li>);
}

QuestionItem.propTypes = {
    question: PropTypes.object
}

export default QuestionItem;
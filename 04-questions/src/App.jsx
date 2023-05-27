import { useState } from 'react'
import './App.css'
import questionArray from './data/questions'
import QuestionList from './components/questionList';

function App() {
  const [questions] = useState(questionArray);

  return (
    <div className='question'>
      <div className="question__container container">
        <section className="question__content">
          <h1>Questions</h1>
          <QuestionList questions={questions} />
        </section>
      </div>
    </div>
  )
}

export default App

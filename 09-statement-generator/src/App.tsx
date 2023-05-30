import { useState, useRef } from 'react'
import './App.css'
import statementArray from './data/statements';

function App() {
  const statementsCount = useRef<HTMLInputElement>(null);
  const [statements] = useState<string[]>(statementArray);
  const [texts, setTexts] = useState<string[]>([]);

  const generateRandomStatement = () => {
    const randomIndex = Math.floor(Math.random() * statements.length);

    return statementArray[randomIndex];
  }

  const handleGenerateTexts = () => {
    if (statementsCount.current) {
      const numberElementValue = statementsCount.current.value;

      const collection: string[] = [];

      for (let i = 0; i < Math.abs(+numberElementValue); i++) {
        collection.push(generateRandomStatement());
      }

      setTexts(collection);
    }
  }

  return (
    <div className='statement'>
      <h1>TIRED OF BORING LOREM IPSUM?</h1>

      <div className='statement-config'>
        <span>Paragraphs:</span>
        <input type='number' min='1' ref={statementsCount} className='input-field' />
        <button className='btn btn-primary' onClick={handleGenerateTexts}>Generate</button>
      </div>

      <main className='statement-output'>
        {texts.map((text, index) => <div key={index}>{text}</div>)}
      </main>
    </div>
  )
}

export default App

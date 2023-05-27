import { useState } from 'react'
import buddyArray from "./data/buddies";
import BuddyList from './components/BuddyList';
import './App.css'
import ClearBuddies from './components/ClearBuddies';
import BuddyListTitle from './components/BuddyListTitle';
import DisplayBuddies from './components/DisplayBuddies';

function App() {
  const [buddies, setBuddies] = useState(buddyArray);

  const handleClearBuddyList = () => setBuddies([]);
  const handleDisplayBuddyList = () => setBuddies(buddyArray);

  return (
    <div className='birthdate'>
      <div className="birthdate__container container">
        <section className="birthdate__content">
          <BuddyListTitle buddiesCount={buddies.length} />

          <BuddyList buddies={buddies} />

          <div className='birthdate__action'>
            <DisplayBuddies onDisplayBodyList={handleDisplayBuddyList} />
            <ClearBuddies onClearBuddyList={handleClearBuddyList} />
          </div>
        </section>
      </div>
    </div>
  )
}

export default App

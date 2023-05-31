import { useState } from 'react'
import './App.css'
import Modal from './components/Modal'
import Sidebar from './components/Sidebar'

function App() {
  const [isSidebarToggle, setIsSidebarToggle] = useState(false);
  const [isModalToggle, setIsModalToggle] = useState(false);

  const handleToggleSidebar = () => setIsSidebarToggle(prev => !prev);
  const handleToggleModal = () => setIsModalToggle(prev => !prev);

  return (
    <div className='container'>
      <header className='header'>
        <i className="ri-menu-fill fs-lg cursor-pointer" onClick={handleToggleSidebar}></i>
        <button className='btn btn-primary' onClick={handleToggleModal}>Modal</button>
      </header>

      <Sidebar isSidebarToggle={isSidebarToggle} onToggleSidebar={handleToggleSidebar} />
      <Modal isModalToggle={isModalToggle} onModalToggle={handleToggleModal} />
    </div>
  )
}

export default App

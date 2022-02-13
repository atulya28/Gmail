import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import Login from './Login'
import Inbox from './Inbox';
import Sent from './Sent';
import SentMail from './SentMail';
import InboxMail from './InboxMail';
import { useEffect } from 'react'

function App() {
  let id = localStorage.getItem("mail_id")

  return (
    <main className='mainBg'>
      <Router>
        <Routes>
          <Route exact path='/' element={<Login />}></Route>
          <Route exact path='/home' element={<Navbar />}></Route>
          <Route exact path='/home/inbox' element={<Inbox />}></Route>
          <Route exact path='/home/sent' element={<Sent />}></Route>
          <Route exact path='/home/sent/:id' element={<SentMail />}></Route>
          <Route exact path='/home/inbox/:id' element={<InboxMail />}></Route>
        </Routes>
      </Router>
    </main>
  );
}

export default App;
